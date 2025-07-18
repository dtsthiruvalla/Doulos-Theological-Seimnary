<?php
// CORS Configuration - Must be at the very top
$allowed_origins = [
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


// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'doulostheologicalseminary');
define('DB_USER', 'dtsadmin');
define('DB_PASS', 'dtsBenssen603');

// Security settings
define('UPLOAD_DIR', __DIR__ . '/uploads/');
define('MAX_FILE_SIZE', 2 * 1024 * 1024); // 2MB
define('ALLOWED_IMAGE_TYPES', ['image/jpeg', 'image/png', 'image/gif', 'image/webp']);
define('ALLOWED_DOCUMENT_TYPES', ['application/pdf', 'image/jpeg', 'image/png']);

// Email configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'dts.thiruvalla@gmail.com');
define('SMTP_PASS', 'your-app-password');
define('FROM_EMAIL', 'dts.thiruvalla@gmail.com');
define('FROM_NAME', 'Doulos Theological Seminary');

class Database
{
    private $pdo;

    public function __construct()
    {
        try {
            $this->pdo = new PDO(
                "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
                DB_USER,
                DB_PASS,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]
            );
        } catch (PDOException $e) {
            error_log("Database connection failed: " . $e->getMessage());
            throw new Exception("Database connection failed");
        }
    }

    public function getConnection()
    {
        return $this->pdo;
    }
}

// Security functions
function sanitizeInput($data)
{
    return trim(htmlspecialchars(strip_tags($data)));
}

function validateEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validatePhone($phone)
{
    return preg_match('/^[0-9]{10}$/', $phone);
}

function validateAadhar($aadhar)
{
    return preg_match('/^[0-9]{12}$/', $aadhar);
}

function generateAdmissionNumber()
{
    return 'DTS' . date('Y') . str_pad(mt_rand(1, 9999), 4, '0', STR_PAD_LEFT);
}

function logError($message)
{
    error_log("[DTS Application] " . date('Y-m-d H:i:s') . " - " . $message);
}

// Enable error reporting for development
if (defined('DISPLAY_DEBUG') && DISPLAY_DEBUG) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    error_reporting(0);
}
