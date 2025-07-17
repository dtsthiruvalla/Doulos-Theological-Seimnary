<?php
// Simple test without any redirects
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

echo json_encode([
    'status' => 'success',
    'message' => 'API is working!',
    'timestamp' => date('Y-m-d H:i:s'),
    'server_info' => [
        'request_method' => $_SERVER['REQUEST_METHOD'],
        'http_host' => $_SERVER['HTTP_HOST'] ?? 'not set',
        'server_name' => $_SERVER['SERVER_NAME'] ?? 'not set',
        'request_uri' => $_SERVER['REQUEST_URI'] ?? 'not set',
        'origin' => $_SERVER['HTTP_ORIGIN'] ?? 'not set'
    ]
]);
