<?php
require_once 'config.php';

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
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
                'id' => $timingIds[$i],
                'timing' => $timings[$i]
            ];
        }
        
        $formattedCourses[] = [
            'value' => strtolower($course['course_code']),
            'label' => $course['course_name'],
            'code' => $course['course_code'],
            'semesters' => $course['total_semesters'],
            'timings' => $formattedTimings
        ];
    }
    
    echo json_encode([
        'success' => true,
        'courses' => $formattedCourses
    ]);
    
} catch (Exception $e) {
    logError("Get courses error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error']);
}
?>
