<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($input['id']) || !isset($input['status'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Application ID and status are required']);
            exit;
        }
        
        $id = $input['id'];
        $status = $input['status'];
        
        // Validate status
        $validStatuses = ['pending', 'approved', 'rejected'];
        if (!in_array($status, $validStatuses)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid status. Must be one of: ' . implode(', ', $validStatuses)]);
            exit;
        }
        
        // Get current application data
        $getQuery = "SELECT * FROM applications WHERE id = ?";
        $getStmt = $pdo->prepare($getQuery);
        $getStmt->execute([$id]);
        $application = $getStmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$application) {
            http_response_code(404);
            echo json_encode(['error' => 'Application not found']);
            exit;
        }
        
        $oldStatus = $application['status'];
        
        // Update application status
        $updateQuery = "UPDATE applications SET status = ?, updated_at = NOW() WHERE id = ?";
        $updateStmt = $pdo->prepare($updateQuery);
        $result = $updateStmt->execute([$status, $id]);
        
        if ($result && $updateStmt->rowCount() > 0) {
            // Log the status change
            $logQuery = "INSERT INTO application_logs (application_id, action, old_status, new_status, created_at) VALUES (?, ?, ?, ?, NOW())";
            $logStmt = $pdo->prepare($logQuery);
            $logStmt->execute([$id, 'status_change', $oldStatus, $status]);
            
            // Send notification email if status changed to approved or rejected
            if ($status === 'approved' || $status === 'rejected') {
                $to = $application['email'];
                $subject = 'Application Status Update - Doulos Theological Seminary';
                
                if ($status === 'approved') {
                    $message = "
                        <html>
                        <body>
                            <h2>Congratulations!</h2>
                            <p>Dear {$application['first_name']} {$application['last_name']},</p>
                            <p>We are pleased to inform you that your application to Doulos Theological Seminary has been <strong>approved</strong>.</p>
                            <p>Your admission number is: <strong>{$application['admission_no']}</strong></p>
                            <p>Course: {$application['course']}</p>
                            <p>Timing: {$application['timing']}</p>
                            <p>Please contact us for further instructions regarding enrollment.</p>
                            <br>
                            <p>Congratulations and welcome to our seminary family!</p>
                            <p>Best regards,<br>
                            Doulos Theological Seminary Team</p>
                        </body>
                        </html>
                    ";
                } else {
                    $message = "
                        <html>
                        <body>
                            <h2>Application Status Update</h2>
                            <p>Dear {$application['first_name']} {$application['last_name']},</p>
                            <p>Thank you for your interest in Doulos Theological Seminary.</p>
                            <p>After careful review, we regret to inform you that your application has not been approved at this time.</p>
                            <p>We encourage you to reapply in the future.</p>
                            <br>
                            <p>Best regards,<br>
                            Doulos Theological Seminary Team</p>
                        </body>
                        </html>
                    ";
                }
                
                $headers = "MIME-Version: 1.0" . "\r\n";
                $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                $headers .= "From: noreply@dtsthiruvalla.com" . "\r\n";
                
                mail($to, $subject, $message, $headers);
            }
            
            echo json_encode([
                'success' => true,
                'message' => 'Application status updated successfully',
                'old_status' => $oldStatus,
                'new_status' => $status
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to update application status']);
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
