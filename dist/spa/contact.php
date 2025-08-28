<?php
// Simple PHP mail handler for Hostinger/shared hosting
// Expects POST: name, email, phone, service, message (optional)

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

$allowed_services = [ 'Desarrollo web', 'Gestión de Redes Sociales', 'Pauta publicitaria' ];
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

$headers = [
  'From: no-reply@flaks.com.ar',
  'Reply-To: ' . $email,
  'X-Mailer: PHP/' . phpversion()
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode([ 'ok' => true ]);
} else {
  fail('Error al enviar el correo', 500);
}

