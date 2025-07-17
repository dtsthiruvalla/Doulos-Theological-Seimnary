<?php
// Database setup script - Run this once to create tables
require_once 'config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

try {
    $db = new Database();
    $pdo = $db->getConnection();
    
    // Create courses table
    $createCoursesTable = "
    CREATE TABLE IF NOT EXISTS dts_courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_code VARCHAR(10) NOT NULL UNIQUE,
        course_name VARCHAR(255) NOT NULL,
        total_semesters INT NOT NULL DEFAULT 2,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    // Create course timings table
    $createTimingsTable = "
    CREATE TABLE IF NOT EXISTS dts_course_timings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT NOT NULL,
        timing VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (course_id) REFERENCES dts_courses(id) ON DELETE CASCADE
    )";
    
    // Create applications table
    $createApplicationsTable = "
    CREATE TABLE IF NOT EXISTS dts_applications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        admission_no VARCHAR(20) UNIQUE NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        contact VARCHAR(15) NOT NULL,
        aadhar_number VARCHAR(12) NOT NULL UNIQUE,
        address TEXT NOT NULL,
        dob DATE NOT NULL,
        gender ENUM('male', 'female', 'other') NOT NULL,
        higher_education TEXT NOT NULL,
        course VARCHAR(50) NOT NULL,
        timing VARCHAR(20) NOT NULL,
        priest_name VARCHAR(100) NOT NULL,
        church_address TEXT NOT NULL,
        priest_contact VARCHAR(15) NOT NULL,
        personal_photo_path VARCHAR(500),
        certificate_path VARCHAR(500),
        status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    // Execute table creation
    $pdo->exec($createCoursesTable);
    $pdo->exec($createTimingsTable);
    $pdo->exec($createApplicationsTable);
    
    // Insert sample courses if not exist
    $checkCourses = $pdo->query("SELECT COUNT(*) FROM dts_courses")->fetchColumn();
    
    if ($checkCourses == 0) {
        $courses = [
            ['CTH', 'C.Th (Certificate in Theology)', 2],
            ['BTH', 'B.Th (Bachelor of Theology)', 6], 
            ['MDIV', 'M.Div (Master of Divinity)', 4],
            ['DCC', 'DCC (Diploma in Christian Counseling)', 2],
            ['BCC', 'BCC (Bachelor in Christian Counseling)', 6],
            ['MACP', 'MA in Counselling & Psychology', 4]
        ];
        
        $stmt = $pdo->prepare("INSERT INTO dts_courses (course_code, course_name, total_semesters) VALUES (?, ?, ?)");
        foreach ($courses as $course) {
            $stmt->execute($course);
        }
        
        // Add timings for each course
        $timings = [
            [1, '10am'], [1, '8pm'],  // CTH
            [2, '10am'], [2, '8pm'],  // BTH
            [3, '9pm'],               // MDIV
            [4, '10am'], [4, '8pm'],  // DCC
            [5, '10am'], [5, '8pm'],  // BCC
            [6, '9pm']                // MACP
        ];
        
        $stmt = $pdo->prepare("INSERT INTO dts_course_timings (course_id, timing) VALUES (?, ?)");
        foreach ($timings as $timing) {
            $stmt->execute($timing);
        }
    }
    
    // Verify setup
    $courseCount = $pdo->query("SELECT COUNT(*) FROM dts_courses")->fetchColumn();
    $timingCount = $pdo->query("SELECT COUNT(*) FROM dts_course_timings")->fetchColumn();
    
    echo json_encode([
        'status' => 'success',
        'message' => 'Database setup completed successfully!',
        'tables_created' => [
            'dts_courses' => 'Created',
            'dts_course_timings' => 'Created', 
            'dts_applications' => 'Created'
        ],
        'data_inserted' => [
            'courses' => $courseCount,
            'timings' => $timingCount
        ]
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Database setup failed',
        'error' => $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine()
    ]);
}
?>
