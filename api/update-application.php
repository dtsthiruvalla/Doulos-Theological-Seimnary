<?php
require_once 'config.php';

// CORS headers are already handled in config.php


// Database connection is handled in config.php via Database class

try {
    $database = new Database();
    $pdo = $database->getConnection();
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT') {
    try {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($input['id'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Application ID is required']);
            exit;
        }
        
        $id = $input['id'];
        
        // Build update query dynamically based on provided fields
        $allowedFields = [
            'first_name', 'last_name', 'address', 'email', 'contact', 'aadhar_number',
            'priest_name', 'church_address', 'priest_contact', 'dob', 'gender',
            'higher_education', 'course', 'timing', 'status'
        ];
        
        $updateFields = [];
        $params = [];
        
        foreach ($allowedFields as $field) {
            if (isset($input[$field])) {
                $updateFields[] = "$field = ?";
                $params[] = $input[$field];
            }
        }
        
        if (empty($updateFields)) {
            http_response_code(400);
            echo json_encode(['error' => 'No valid fields to update']);
            exit;
        }
        
        $updateFields[] = "updated_at = NOW()";
        $params[] = $id;
        
        $query = "UPDATE applications SET " . implode(', ', $updateFields) . " WHERE id = ?";
        
        $stmt = $pdo->prepare($query);
        $result = $stmt->execute($params);
        
        if ($result && $stmt->rowCount() > 0) {
            // Get the updated application
            $getQuery = "SELECT * FROM applications WHERE id = ?";
            $getStmt = $pdo->prepare($getQuery);
            $getStmt->execute([$id]);
            $application = $getStmt->fetch(PDO::FETCH_ASSOC);
            
            echo json_encode([
                'success' => true,
                'message' => 'Application updated successfully',
                'application' => $application
            ]);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Application not found or no changes made']);
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
