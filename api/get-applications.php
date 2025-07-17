<?php
require_once 'config.php';

// Add these headers to ALL your PHP files
header("Access-Control-Allow-Origin: https://dtsthiruvalla.com");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
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
    
    // Get filter parameters
    $status = $_GET['status'] ?? 'all';
    $course = $_GET['course'] ?? 'all';
    $search = $_GET['search'] ?? '';
    $page = (int)($_GET['page'] ?? 1);
    $limit = (int)($_GET['limit'] ?? 50);
    $offset = ($page - 1) * $limit;
    
    // Build WHERE clause
    $whereConditions = [];
    $params = [];
    
    if ($status !== 'all') {
        $whereConditions[] = "a.status = ?";
        $params[] = $status;
    }
    
    if ($course !== 'all') {
        $whereConditions[] = "c.course_code = ?";
        $params[] = strtoupper($course);
    }
    
    if (!empty($search)) {
        $whereConditions[] = "(a.first_name LIKE ? OR a.last_name LIKE ? OR a.email LIKE ? OR a.admission_no LIKE ?)";
        $searchTerm = "%$search%";
        $params[] = $searchTerm;
        $params[] = $searchTerm;
        $params[] = $searchTerm;
        $params[] = $searchTerm;
    }
    
    $whereClause = !empty($whereConditions) ? 'WHERE ' . implode(' AND ', $whereConditions) : '';
    
    // Get total count
    $countSql = "
        SELECT COUNT(*) as total
        FROM dts_applications a
        JOIN dts_course_timings ct ON a.course_timing_id = ct.id
        JOIN dts_courses c ON ct.course_id = c.id
        $whereClause
    ";
    
    $countStmt = $pdo->prepare($countSql);
    $countStmt->execute($params);
    $totalCount = $countStmt->fetchColumn();
    
    // Get applications with course details
    $sql = "
        SELECT 
            a.id,
            a.admission_no,
            a.first_name,
            a.last_name,
            a.address,
            a.email,
            a.contact,
            a.aadhar_number,
            a.priest_name,
            a.church_address,
            a.priest_contact,
            a.dob,
            a.gender,
            a.higher_education,
            a.personal_photo_path,
            a.certificate_path,
            a.status,
            a.application_date,
            c.course_name,
            c.course_code,
            ct.timing,
            ct.id as course_timing_id
        FROM dts_applications a
        JOIN dts_course_timings ct ON a.course_timing_id = ct.id
        JOIN dts_courses c ON ct.course_id = c.id
        $whereClause
        ORDER BY a.application_date DESC
        LIMIT ? OFFSET ?
    ";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([...$params, $limit, $offset]);
    $applications = $stmt->fetchAll();
    
    // Format the response
    $formattedApplications = [];
    foreach ($applications as $app) {
        $formattedApplications[] = [
            'id' => $app['id'],
            'admission_no' => $app['admission_no'],
            'first_name' => $app['first_name'],
            'last_name' => $app['last_name'],
            'full_name' => $app['first_name'] . ' ' . $app['last_name'],
            'address' => $app['address'],
            'email' => $app['email'],
            'contact' => $app['contact'],
            'aadhar_number' => $app['aadhar_number'],
            'priest_name' => $app['priest_name'],
            'church_address' => $app['church_address'],
            'priest_contact' => $app['priest_contact'],
            'dob' => $app['dob'],
            'gender' => $app['gender'],
            'higher_education' => $app['higher_education'],
            'personal_photo_path' => $app['personal_photo_path'],
            'certificate_path' => $app['certificate_path'],
            'status' => $app['status'],
            'application_date' => $app['application_date'],
            'course_name' => $app['course_name'],
            'course_code' => $app['course_code'],
            'timing' => $app['timing'],
            'course_timing_id' => $app['course_timing_id'],
            'course' => strtolower($app['course_code']),
            'applied_date' => date('M d, Y', strtotime($app['application_date']))
        ];
    }
    
    // Get statistics
    $statsStmt = $pdo->prepare("
        SELECT 
            COUNT(*) as total,
            SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
            SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) as approved,
            SUM(CASE WHEN status = 'rejected' THEN 1 ELSE 0 END) as rejected
        FROM dts_applications
    ");
    $statsStmt->execute();
    $stats = $statsStmt->fetch();
    
    echo json_encode([
        'success' => true,
        'applications' => $formattedApplications,
        'pagination' => [
            'total' => (int)$totalCount,
            'page' => $page,
            'limit' => $limit,
            'pages' => ceil($totalCount / $limit)
        ],
        'stats' => [
            'total' => (int)$stats['total'],
            'pending' => (int)$stats['pending'],
            'approved' => (int)$stats['approved'],
            'rejected' => (int)$stats['rejected']
        ]
    ]);
    
} catch (Exception $e) {
    logError("Get applications error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error']);
}
?>
        
        if (!empty($search)) {
            $whereConditions[] = "(first_name LIKE ? OR last_name LIKE ? OR email LIKE ? OR admission_no LIKE ?)";
            $searchParam = "%$search%";
            $params[] = $searchParam;
            $params[] = $searchParam;
            $params[] = $searchParam;
            $params[] = $searchParam;
        }
        
        $whereClause = !empty($whereConditions) ? 'WHERE ' . implode(' AND ', $whereConditions) : '';
        
        // Get total count
        $countQuery = "SELECT COUNT(*) as total FROM applications $whereClause";
        $countStmt = $pdo->prepare($countQuery);
        $countStmt->execute($params);
        $totalCount = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];
        
        // Get applications
        $query = "
            SELECT 
                id, first_name, last_name, address, email, contact, aadhar_number,
                priest_name, church_address, priest_contact, dob, gender,
                higher_education, course, timing, personal_photo, certificate,
                admission_no, status, created_at, updated_at
            FROM applications 
            $whereClause 
            ORDER BY created_at DESC 
            LIMIT ? OFFSET ?
        ";
        
        $params[] = $limit;
        $params[] = $offset;
        
        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $applications = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Get statistics
        $statsQuery = "
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
                SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) as approved,
                SUM(CASE WHEN status = 'rejected' THEN 1 ELSE 0 END) as rejected
            FROM applications
        ";
        
        $statsStmt = $pdo->query($statsQuery);
        $stats = $statsStmt->fetch(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'applications' => $applications,
            'stats' => $stats,
            'pagination' => [
                'current_page' => $page,
                'total_pages' => ceil($totalCount / $limit),
                'total_count' => $totalCount,
                'per_page' => $limit
            ]
        ]);
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
