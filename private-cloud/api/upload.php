<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$uploadDir = '../uploads/';
$maxFileSize = 10 * 1024 * 1024; // 10MB
$allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$response = ['success' => false, 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_FILES['file'])) {
        $response['message'] = 'No file uploaded';
        echo json_encode($response);
        exit;
    }

    $file = $_FILES['file'];
    
    // Check for errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        $response['message'] = 'Upload failed with error code: ' . $file['error'];
        echo json_encode($response);
        exit;
    }
    
    // Check file size
    if ($file['size'] > $maxFileSize) {
        $response['message'] = 'File too large. Max size: 10MB';
        echo json_encode($response);
        exit;
    }
    
    // Check file type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($mimeType, $allowedTypes)) {
        $response['message'] = 'File type not allowed';
        echo json_encode($response);
        exit;
    }
    
    // Generate unique filename
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = uniqid() . '_' . time() . '.' . $extension;
    $filepath = $uploadDir . $filename;
    
    // Move uploaded file
    if (move_uploaded_file($file['tmp_name'], $filepath)) {
        $response['success'] = true;
        $response['message'] = 'File uploaded successfully';
        $response['file'] = [
            'name' => $file['name'],
            'size' => $file['size'],
            'type' => $mimeType,
            'path' => 'uploads/' . $filename
        ];
    } else {
        $response['message'] = 'Failed to save file';
    }
} else {
    $response['message'] = 'Invalid request method';
}

echo json_encode($response);
?>
