<?php
require_once 'config.php';

// Test CORS and basic functionality
echo json_encode([
    'success' => true,
    'message' => 'CORS is working!',
    'timestamp' => date('Y-m-d H:i:s'),
    'server_info' => [
        'REQUEST_METHOD' => $_SERVER['REQUEST_METHOD'],
        'HTTP_ORIGIN' => $_SERVER['HTTP_ORIGIN'] ?? 'not set',
        'HTTP_HOST' => $_SERVER['HTTP_HOST'] ?? 'not set'
    ]
]);
?>
