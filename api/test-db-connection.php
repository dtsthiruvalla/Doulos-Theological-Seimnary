<?php
// Simple database connection test
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = 'localhost';
$dbname = 'doulostheologicalseminary';
$username = 'dtsadmin';
$password = 'dtsBenssen603';

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
    
    // Test query
    $stmt = $pdo->query("SELECT DATABASE() as current_db, USER() as current_user, NOW() as server_time");
    $result = $stmt->fetch();
    
    // List tables
    $stmt = $pdo->query("SHOW TABLES");
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo json_encode([
        'status' => 'success',
        'message' => 'Database connection successful!',
        'connection_info' => $result,
        'tables' => $tables,
        'table_count' => count($tables)
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Database connection failed',
        'error' => $e->getMessage(),
        'error_code' => $e->getCode()
    ]);
}
?>
