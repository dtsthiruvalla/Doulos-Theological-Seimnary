<?php
require_once 'config.php';

// CORS headers are already handled in config.php

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

try {
    $db = new Database();
    $pdo = $db->getConnection();

    // Validate and sanitize input data
    $firstName = sanitizeInput($_POST['firstName'] ?? '');
    $lastName = sanitizeInput($_POST['lastName'] ?? '');
    $address = sanitizeInput($_POST['address'] ?? '');
    $email = sanitizeInput($_POST['email'] ?? '');
    $contact = sanitizeInput($_POST['contact'] ?? '');
    $aadharNumber = sanitizeInput($_POST['aadharNumber'] ?? '');
    $priestName = sanitizeInput($_POST['priestName'] ?? '');
    $churchAddress = sanitizeInput($_POST['churchAddress'] ?? '');
    $priestContact = sanitizeInput($_POST['priestContact'] ?? '');
    $dob = sanitizeInput($_POST['dob'] ?? '');
    $gender = sanitizeInput($_POST['gender'] ?? '');
    $higherEducation = sanitizeInput($_POST['higherEducation'] ?? '');
    $course = sanitizeInput($_POST['course'] ?? '');
    $timing = sanitizeInput($_POST['timing'] ?? '');

    // Validate required fields
    $requiredFields = [
        'firstName' => $firstName,
        'lastName' => $lastName,
        'address' => $address,
        'email' => $email,
        'contact' => $contact,
        'aadharNumber' => $aadharNumber,
        'priestName' => $priestName,
        'churchAddress' => $churchAddress,
        'priestContact' => $priestContact,
        'dob' => $dob,
        'gender' => $gender,
        'higherEducation' => $higherEducation,
        'course' => $course,
        'timing' => $timing
    ];

    $missingFields = [];
    foreach ($requiredFields as $field => $value) {
        if (empty($value)) {
            $missingFields[] = $field;
        }
    }

    if (!empty($missingFields)) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields: ' . implode(', ', $missingFields)]);
        exit;
    }

    // Validate email format
    if (!validateEmail($email)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format']);
        exit;
    }

    // Validate phone numbers
    if (!validatePhone($contact)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid contact number format (must be 10 digits)']);
        exit;
    }

    if (!validatePhone($priestContact)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid priest contact number format (must be 10 digits)']);
        exit;
    }

    // Validate Aadhar number
    if (!validateAadhar($aadharNumber)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid Aadhar number format (must be 12 digits)']);
        exit;
    }

    // Validate gender
    if (!in_array($gender, ['male', 'female', 'other'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid gender value']);
        exit;
    }

    // Validate date of birth
    $dobDate = DateTime::createFromFormat('Y-m-d', $dob);
    if (!$dobDate || $dobDate->format('Y-m-d') !== $dob) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid date of birth format']);
        exit;
    }

    // Check if applicant is at least 18 years old
    $today = new DateTime();
    $age = $today->diff($dobDate)->y;
    if ($age < 18) {
        http_response_code(400);
        echo json_encode(['error' => 'Applicant must be at least 18 years old']);
        exit;
    }

    // Check for duplicate email
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM dts_applications WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetchColumn() > 0) {
        http_response_code(409);
        echo json_encode(['error' => 'An application with this email already exists']);
        exit;
    }

    // Check for duplicate Aadhar number
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM dts_applications WHERE aadhar_number = ?");
    $stmt->execute([$aadharNumber]);
    if ($stmt->fetchColumn() > 0) {
        http_response_code(409);
        echo json_encode(['error' => 'An application with this Aadhar number already exists']);
        exit;
    }

    // Create upload directory if it doesn't exist
    if (!file_exists(UPLOAD_DIR)) {
        mkdir(UPLOAD_DIR, 0755, true);
    }

    $personalPhotoPath = '';
    $certificatePath = '';

    // Handle personal photo upload
    if (isset($_FILES['personalPhoto']) && $_FILES['personalPhoto']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['personalPhoto'];

        // Validate file type
        if (!in_array($file['type'], ALLOWED_IMAGE_TYPES)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid personal photo format. Only JPEG, PNG, GIF, and WebP are allowed.']);
            exit;
        }

        // Validate file size (500KB max for photo)
        if ($file['size'] > 500 * 1024) {
            http_response_code(400);
            echo json_encode(['error' => 'Personal photo must be less than 500KB']);
            exit;
        }

        // Generate unique filename
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $filename = 'photo_' . uniqid() . '.' . $extension;
        $personalPhotoPath = UPLOAD_DIR . $filename;

        if (!move_uploaded_file($file['tmp_name'], $personalPhotoPath)) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to upload personal photo']);
            exit;
        }

        $personalPhotoPath = 'uploads/' . $filename; // Store relative path
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Personal photo is required']);
        exit;
    }

    // Handle certificate upload
    if (isset($_FILES['certificate']) && $_FILES['certificate']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['certificate'];

        // Validate file type
        if (!in_array($file['type'], ALLOWED_DOCUMENT_TYPES)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid certificate format. Only PDF, JPEG, and PNG are allowed.']);
            exit;
        }

        // Validate file size (2MB max)
        if ($file['size'] > MAX_FILE_SIZE) {
            http_response_code(400);
            echo json_encode(['error' => 'Certificate must be less than 2MB']);
            exit;
        }

        // Generate unique filename
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $filename = 'cert_' . uniqid() . '.' . $extension;
        $certificatePath = UPLOAD_DIR . $filename;

        if (!move_uploaded_file($file['tmp_name'], $certificatePath)) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to upload certificate']);
            exit;
        }

        $certificatePath = 'uploads/' . $filename; // Store relative path
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Certificate is required']);
        exit;
    }

    // Generate admission number
    $admissionNo = generateAdmissionNumber();

    // Ensure admission number is unique
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM dts_applications WHERE admission_no = ?");
    $stmt->execute([$admissionNo]);
    while ($stmt->fetchColumn() > 0) {
        $admissionNo = generateAdmissionNumber();
        $stmt->execute([$admissionNo]);
    }

    // Begin transaction
    $pdo->beginTransaction();

    try {
        // Insert application
        $stmt = $pdo->prepare("
            INSERT INTO dts_applications (
                admission_no, first_name, last_name, address, email, contact, 
                aadhar_number, priest_name, church_address, priest_contact, 
                dob, gender, higher_education, course, timing, 
                personal_photo_path, certificate_path, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
        ");

        $stmt->execute([
            $admissionNo,
            $firstName,
            $lastName,
            $address,
            $email,
            $contact,
            $aadharNumber,
            $priestName,
            $churchAddress,
            $priestContact,
            $dob,
            $gender,
            $higherEducation,
            $course,
            $timing,
            $personalPhotoPath,
            $certificatePath
        ]);

        $applicationId = $pdo->lastInsertId();

        // Commit transaction
        $pdo->commit();

        // Log successful application
        logError("New application submitted: $admissionNo by $firstName $lastName ($email)");

        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Application submitted successfully',
            'admission_no' => $admissionNo,
            'application_id' => $applicationId
        ]);
    } catch (Exception $e) {
        // Rollback transaction
        $pdo->rollback();

        // Clean up uploaded files
        if (file_exists($personalPhotoPath)) {
            unlink($personalPhotoPath);
        }
        if (file_exists($certificatePath)) {
            unlink($certificatePath);
        }

        throw $e;
    }
} catch (Exception $e) {
    logError("Application submission error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error. Please try again later.']);
}
