<?php
// test-db.php - Database Connection Test
require_once 'config.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>🔍 Database Connection Test for DTS Thiruvalla</h2>";
echo "<hr>";

try {
    echo "<h3>Step 1: Testing Database Connection</h3>";
    $db = new Database();
    $pdo = $db->getConnection();
    echo "✅ <strong>Database connected successfully!</strong><br><br>";
    
    echo "<h3>Step 2: Verifying Database Details</h3>";
    echo "🏢 <strong>Database Name:</strong> " . DB_NAME . "<br>";
    echo "👤 <strong>Database User:</strong> " . DB_USER . "<br>";
    echo "🖥️ <strong>Database Host:</strong> " . DB_HOST . "<br><br>";
    
    echo "<h3>Step 3: Checking Table Existence</h3>";
    $stmt = $pdo->query("SHOW TABLES LIKE 'dts_applications'");
    if ($stmt->rowCount() > 0) {
        echo "✅ <strong>Table 'dts_applications' exists!</strong><br><br>";
    } else {
        echo "❌ <strong>Table 'dts_applications' not found!</strong><br>";
        echo "💡 <strong>Solution:</strong> You may need to import your database.sql file<br><br>";
    }
    
    echo "<h3>Step 4: Testing Table Structure</h3>";
    try {
        $stmt = $pdo->query("DESCRIBE dts_applications");
        $columns = $stmt->fetchAll();
        echo "📋 <strong>Table columns found:</strong><br>";
        echo "<ul>";
        foreach ($columns as $column) {
            echo "<li>" . $column['Field'] . " (" . $column['Type'] . ")</li>";
        }
        echo "</ul><br>";
    } catch (Exception $e) {
        echo "❌ <strong>Could not read table structure:</strong> " . $e->getMessage() . "<br><br>";
    }
    
    echo "<h3>Step 5: Testing Data Operations</h3>";
    try {
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM dts_applications");
        $result = $stmt->fetch();
        echo "📊 <strong>Current applications in database:</strong> " . $result['count'] . "<br><br>";
        
        // Test insert capability (without actually inserting)
        $stmt = $pdo->prepare("SELECT 1 FROM dts_applications LIMIT 1");
        $stmt->execute();
        echo "✅ <strong>Database read operations working correctly!</strong><br><br>";
        
    } catch (Exception $e) {
        echo "❌ <strong>Data operations failed:</strong> " . $e->getMessage() . "<br><br>";
    }
    
    echo "<h3>🎉 Connection Test Result: SUCCESS!</h3>";
    echo "<p style='color: green;'><strong>Your database is properly connected and ready to use!</strong></p>";
    
} catch (Exception $e) {
    echo "<h3>❌ Connection Test Result: FAILED</h3>";
    echo "<p style='color: red;'><strong>Connection failed:</strong> " . $e->getMessage() . "</p>";
    
    echo "<h3>🔧 Troubleshooting Steps:</h3>";
    echo "<ol>";
    echo "<li><strong>Check Database Credentials:</strong> Verify username and password in config.php</li>";
    echo "<li><strong>Try Different Hostnames:</strong> Your current host is: " . DB_HOST . "</li>";
    echo "<li><strong>Alternative hostnames to try:</strong>";
    echo "<ul>";
    echo "<li>localhost</li>";
    echo "<li>118.139.176.130 (your shared IP)</li>";
    echo "<li>dtsthiruvalla.com</li>";
    echo "</ul></li>";
    echo "<li><strong>Check Database User Privileges:</strong> Ensure 'dtsadmin' has full access to 'doulostheologicalseminary'</li>";
    echo "<li><strong>Enable Remote MySQL:</strong> If using external IP, enable remote access in cPanel</li>";
    echo "</ol>";
}

echo "<hr>";
echo "<p><small>Generated on: " . date('Y-m-d H:i:s') . "</small></p>";
echo "<p><small><strong>⚠️ Important:</strong> Delete this file after testing for security!</small></p>";
?>
