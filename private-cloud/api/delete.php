<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST' && $_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get input data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST;
}

$filename = $input['file'] ?? '';
$id = $input['id'] ?? '';

if (empty($filename) && empty($id)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No file specified']);
    exit();
}

// Security: Prevent directory traversal
$filename = basename($filename);
$filepath = '../uploads/' . $filename;

if (!file_exists($filepath)) {
    echo json_encode(['success' => false, 'message' => 'File not found']);
    exit();
}

// Attempt to delete
if (unlink($filepath)) {
    // Move to trash instead of permanent delete?
    // Create trash directory if needed
    $trashDir = '../trash/';
    if (!file_exists($trashDir)) {
        mkdir($trashDir, 0755, true);
    }
    
    // Log deletion
    $logEntry = date('c') . " | Deleted: {$filename}\n";
    file_put_contents('../uploads/delete.log', $logEntry, FILE_APPEND);
    
    echo json_encode(['success' => true, 'message' => 'File deleted successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to delete file']);
}
?>
