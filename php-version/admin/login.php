<?php
require __DIR__ . '/../includes/db.php';
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = trim($_POST['username'] ?? '');
  $password = $_POST['password'] ?? '';

  $stmt = $pdo->prepare('SELECT id, username, password_hash FROM admins WHERE username = :username LIMIT 1');
  $stmt->execute(['username' => $username]);
  $admin = $stmt->fetch();

  if ($admin && password_verify($password, $admin['password_hash'])) {
    $_SESSION['admin_id'] = $admin['id'];
    $_SESSION['admin_username'] = $admin['username'];
    header('Location: dashboard.php');
    exit;
  }
  $error = 'Sai tài khoản hoặc mật khẩu.';
}
?>
<!doctype html>
<html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Admin Login</title></head>
<body style="font-family:Arial;padding:40px;max-width:420px;margin:auto">
<h2>Đăng nhập quản trị</h2>
<?php if ($error): ?><p style="color:red"><?= htmlspecialchars($error) ?></p><?php endif; ?>
<form method="post">
  <label>User</label><br><input name="username" required style="width:100%;padding:10px"><br><br>
  <label>Password</label><br><input type="password" name="password" required style="width:100%;padding:10px"><br><br>
  <button type="submit" style="padding:10px 16px">Đăng nhập</button>
</form>
</body></html>
