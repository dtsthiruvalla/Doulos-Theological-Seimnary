<?php
// Simple method test - no config dependencies
header('Access-Control-Allow-Origin: https://doulos-theological-seimnary.vercel.app');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Log all request details
$logData = [
    'timestamp' => date('Y-m-d H:i:s'),
    'method' => $_SERVER['REQUEST_METHOD'],
    'content_type' => $_SERVER['CONTENT_TYPE'] ?? 'not set',
    'post_data' => $_POST,
    'files' => $_FILES,
    'headers' => getallheaders(),
    'raw_input' => file_get_contents('php://input')
];

file_put_contents('method-test.log', json_encode($logData, JSON_PRETTY_PRINT) . "\n\n", FILE_APPEND);

echo json_encode([
    'method' => $_SERVER['REQUEST_METHOD'],
    'status' => 'received',
    'timestamp' => date('Y-m-d H:i:s'),
    'has_post_data' => !empty($_POST),
    'has_files' => !empty($_FILES)
]);
?>
