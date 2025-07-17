<?php
require_once 'config.php';

// CORS headers are already handled in config.php

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

try {
    // For now, return static courses data while we debug
    // TODO: Replace with database query once tables are confirmed
    $staticCourses = [
        [
            'value' => 'cth',
            'label' => 'C.Th (Certificate in Theology)',
            'code' => 'CTH',
            'semesters' => 2,
            'timings' => [
                ['id' => 1, 'timing' => '10am'],
                ['id' => 2, 'timing' => '8pm']
            ]
        ],
        [
            'value' => 'bth',
            'label' => 'B.Th (Bachelor of Theology)',
            'code' => 'BTH',
            'semesters' => 6,
            'timings' => [
                ['id' => 3, 'timing' => '10am'],
                ['id' => 4, 'timing' => '8pm']
            ]
        ],
        [
            'value' => 'mdiv',
            'label' => 'M.Div (Master of Divinity)',
            'code' => 'MDIV',
            'semesters' => 4,
            'timings' => [
                ['id' => 5, 'timing' => '9pm']
            ]
        ],
        [
            'value' => 'dcc',
            'label' => 'DCC (Diploma in Christian Counseling)',
            'code' => 'DCC',
            'semesters' => 2,
            'timings' => [
                ['id' => 6, 'timing' => '10am'],
                ['id' => 7, 'timing' => '8pm']
            ]
        ],
        [
            'value' => 'bcc',
            'label' => 'BCC (Bachelor in Christian Counseling)',
            'code' => 'BCC',
            'semesters' => 6,
            'timings' => [
                ['id' => 8, 'timing' => '10am'],
                ['id' => 9, 'timing' => '8pm']
            ]
        ],
        [
            'value' => 'macp',
            'label' => 'MA in Counselling & Psychology',
            'code' => 'MACP',
            'semesters' => 4,
            'timings' => [
                ['id' => 10, 'timing' => '9pm']
            ]
        ]
    ];

    echo json_encode([
        'success' => true,
        'courses' => $staticCourses,
        'debug' => [
            'timestamp' => date('Y-m-d H:i:s'),
            'method' => $_SERVER['REQUEST_METHOD'],
            'origin' => $_SERVER['HTTP_ORIGIN'] ?? 'not set'
        ]
    ]);

} catch (Exception $e) {
    logError("Get courses error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'error' => 'Internal server error',
        'debug' => [
            'message' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine()
        ]
    ]);
}
?>
