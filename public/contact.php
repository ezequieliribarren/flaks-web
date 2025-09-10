<?php
// Simple PHP mail handler for shared hosting
// Expects POST: name, email, phone, service, message (optional)

// CORS (útil para desarrollo cuando el front corre en otro puerto)
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
header('Access-Control-Allow-Origin: ' . $origin);
header('Vary: Origin');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Responder preflight en dev
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

header('Content-Type: application/json; charset=utf-8');

function fail($msg, $code = 400) {
  http_response_code($code);
  echo json_encode([ 'ok' => false, 'error' => $msg ]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  fail('Method Not Allowed', 405);
}

// Basic sanitization
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$service = isset($_POST['service']) ? trim($_POST['service']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if (strlen($name) < 2) fail('Nombre inválido');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) fail('Email inválido');
if (strlen($phone) < 5) fail('Teléfono inválido');

// Allow both properly accented and legacy-encoded values
$allowed_services = [
  'Desarrollo web',
  'Gestión de Redes Sociales',
  'GestiA3n de Redes Sociales',
  'Pauta publicitaria'
];
if (!in_array($service, $allowed_services)) fail('Servicio inválido');

// Configure recipient
$to = 'info@flaks.com.ar';
$subject = 'Nuevo contacto (' . $service . ') - ' . $name;

$body = "Nombre: $name\n" .
        "Email: $email\n" .
        "Teléfono: $phone\n" .
        "Servicio: $service\n" .
        "Mensaje: " . ($message !== '' ? $message : '-') . "\n" .
        "Origen: " . (isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '-') . "\n";

$from = 'info@flaks.com.ar';
$headers = [
  'From: Flaks <' . $from . '>',
  'Reply-To: ' . $email,
  'Sender: ' . $from,
  'Return-Path: ' . $from,
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion()
];

// Envelope sender para Return-Path correcto
$params = '-f' . $from;
$sent = @mail($to, $subject, $body, implode("\r\n", $headers), $params);

if ($sent) {
  echo json_encode([ 'ok' => true ]);
} else {
  fail('Error al enviar el correo', 500);
}

