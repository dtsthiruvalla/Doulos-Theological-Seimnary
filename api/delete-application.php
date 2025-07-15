<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Database configuration
$host = 'localhost';
$dbname = 'doulos_seminary';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE' || $_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($input['id'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Application ID is required']);
            exit;
        }
        
        $id = $input['id'];
        
        // First, get the application to check if it exists and get file paths
        $getQuery = "SELECT personal_photo, certificate FROM applications WHERE id = ?";
        $getStmt = $pdo->prepare($getQuery);
        $getStmt->execute([$id]);
        $application = $getStmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$application) {
            http_response_code(404);
            echo json_encode(['error' => 'Application not found']);
            exit;
        }
        
        // Delete the application from database
        $deleteQuery = "DELETE FROM applications WHERE id = ?";
        $deleteStmt = $pdo->prepare($deleteQuery);
        $result = $deleteStmt->execute([$id]);
        
        if ($result && $deleteStmt->rowCount() > 0) {
            // Delete associated files
            if (!empty($application['personal_photo']) && file_exists($application['personal_photo'])) {
                unlink($application['personal_photo']);
            }
            
            if (!empty($application['certificate']) && file_exists($application['certificate'])) {
                unlink($application['certificate']);
            }
            
            echo json_encode([
                'success' => true,
                'message' => 'Application deleted successfully'
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to delete application']);
        }
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
