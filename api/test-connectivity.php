<?php
header('Access-Control-Allow-Origin: https://doulos-theological-seimnary.vercel.app');
header('Content-Type: application/json');

echo json_encode([
    'status' => 'server_reachable',
    'timestamp' => date('Y-m-d H:i:s'),
    'method' => $_SERVER['REQUEST_METHOD'],
    'server_info' => [
        'php_version' => phpversion(),
        'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'unknown'
    ]
]);
?>
