<?php
// Test file to debug database and CORS issues
header("Access-Control-Allow-Origin: *"); // Temporary - allow all origins for testing
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

echo json_encode([
    'message' => 'Testing CORS and Database',
    'timestamp' => date('Y-m-d H:i:s'),
    'request_info' => [
        'method' => $_SERVER['REQUEST_METHOD'],
        'origin' => $_SERVER['HTTP_ORIGIN'] ?? 'not set',
        'host' => $_SERVER['HTTP_HOST'] ?? 'not set',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'not set'
    ]
]);

// Test database connection
echo "\n\n=== DATABASE TEST ===\n";

// Test different database configurations
$configs = [
    [
        'host' => 'localhost',
        'dbname' => 'doulostheologicalseminary',
        'user' => 'dtsadmin',
        'pass' => 'dtsBenssen603',
        'label' => 'Original Config'
    ],
    [
        'host' => 'localhost', 
        'dbname' => 'cpses_doulostheologicalseminary',
        'user' => 'cpses_dtsadmin',
        'pass' => 'dtsBenssen603',
        'label' => 'GoDaddy Prefixed Config'
    ],
    [
        'host' => 'localhost',
        'dbname' => 'doulostheologicalseminary', 
        'user' => 'cpses_c7tr1210Gq',
        'pass' => 'dtsBenssen603',
        'label' => 'Error Username Config'
    ]
];

foreach ($configs as $config) {
    echo "\nTesting: " . $config['label'] . "\n";
    echo "Host: " . $config['host'] . "\n";
    echo "Database: " . $config['dbname'] . "\n";
    echo "User: " . $config['user'] . "\n";
    
    try {
        $pdo = new PDO(
            "mysql:host=" . $config['host'] . ";dbname=" . $config['dbname'] . ";charset=utf8mb4",
            $config['user'],
            $config['pass'],
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]
        );
        echo "✅ SUCCESS: Database connection successful!\n";
        
        // Test a simple query
        $stmt = $pdo->query("SELECT DATABASE() as current_db, USER() as current_user");
        $result = $stmt->fetch();
        echo "Connected to database: " . $result['current_db'] . "\n";
        echo "Connected as user: " . $result['current_user'] . "\n";
        
        // List tables
        $stmt = $pdo->query("SHOW TABLES");
        $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
        echo "Tables found: " . implode(', ', $tables) . "\n";
        
        break; // Stop testing if one works
        
    } catch (PDOException $e) {
        echo "❌ FAILED: " . $e->getMessage() . "\n";
    }
}
?>
