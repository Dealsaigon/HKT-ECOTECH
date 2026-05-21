<?php
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}

function getSetting(PDO $pdo, string $key, string $default = ''): string {
  $stmt = $pdo->prepare('SELECT setting_value FROM site_settings WHERE setting_key = :key LIMIT 1');
  $stmt->execute(['key' => $key]);
  $row = $stmt->fetch();
  return $row['setting_value'] ?? $default;
}

function requireAdmin(): void {
  if (empty($_SESSION['admin_id'])) {
    header('Location: login.php');
    exit;
  }
}
