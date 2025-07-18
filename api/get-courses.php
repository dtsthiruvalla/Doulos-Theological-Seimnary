<?php
require_once 'config.php';

// CORS headers are already handled in config.php
$allowed_origins = [
    'https://api.dtsthiruvalla.com', // Main domain
    'https://dtsthiruvalla.com',     // GoDaddy domain (for API)
    'https://doulos-theological-seimnary.vercel.app',  // Vercel app
    'https://doulos-theological-seimnary-git-main-dtsthiruvallagmail.vercel.app'
];

// Get the origin from the request
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

// Check if origin is allowed (including Vercel preview URLs)
$origin_allowed = false;
if (in_array($origin, $allowed_origins)) {
    $origin_allowed = true;
} elseif (preg_match('/^https:\/\/doulos-theological-seimnary-.*\.vercel\.app$/', $origin)) {
    $origin_allowed = true;
}

// Set CORS headers
if ($origin_allowed && $origin) {
    header("Access-Control-Allow-Origin: " . $origin);
} else {
    // For debugging - temporarily allow all origins
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=utf-8");

// Handle preflight requests immediately
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

try {
    $db = new Database();
    $pdo = $db->getConnection();

    // Get all courses with their timings
    $stmt = $pdo->prepare("
        SELECT 
            c.id,
            c.course_code,
            c.course_name,
            c.total_semesters,
            GROUP_CONCAT(ct.timing ORDER BY ct.timing) as timings,
            GROUP_CONCAT(ct.id ORDER BY ct.timing) as timing_ids
        FROM dts_courses c
        LEFT JOIN dts_course_timings ct ON c.id = ct.course_id
        GROUP BY c.id, c.course_code, c.course_name, c.total_semesters
        ORDER BY c.course_code
    ");

    $stmt->execute();
    $courses = $stmt->fetchAll();

    // Format the response
    $formattedCourses = [];
    foreach ($courses as $course) {
        $timings = $course['timings'] ? explode(',', $course['timings']) : [];
        $timingIds = $course['timing_ids'] ? explode(',', $course['timing_ids']) : [];

        $formattedTimings = [];
        for ($i = 0; $i < count($timings); $i++) {
            $formattedTimings[] = [
                'id' => isset($timingIds[$i]) ? (int)$timingIds[$i] : $i + 1,
                'timing' => trim($timings[$i])
            ];
        }

        $formattedCourses[] = [
            'value' => strtolower($course['course_code']),
            'label' => $course['course_name'],
            'code' => $course['course_code'],
            'semesters' => (int)$course['total_semesters'],
            'timings' => $formattedTimings
        ];
    }

    echo json_encode([
        'success' => true,
        'courses' => $formattedCourses,
        'debug' => [
            'timestamp' => date('Y-m-d H:i:s'),
            'method' => $_SERVER['REQUEST_METHOD'],
            'origin' => $_SERVER['HTTP_ORIGIN'] ?? 'not set',
            'total_courses' => count($formattedCourses)
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
