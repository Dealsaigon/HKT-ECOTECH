<?php
require __DIR__ . '/../includes/db.php';
require __DIR__ . '/../includes/functions.php';
requireAdmin();

$keys = ['site_name','hero_badge','hero_title','hero_subtitle','hero_description','hero_banner','cta_label','cta_secondary'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  foreach ($keys as $key) {
    $value = trim($_POST[$key] ?? '');
    $stmt = $pdo->prepare('INSERT INTO site_settings (setting_key, setting_value) VALUES (:k,:v) ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)');
    $stmt->execute(['k' => $key, 'v' => $value]);
  }
  header('Location: dashboard.php?saved=1');
  exit;
}

$values=[];
foreach($keys as $k){$values[$k]=getSetting($pdo,$k,'');}
?>
<!doctype html>
<html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dashboard</title></head>
<body style="font-family:Arial;padding:30px;max-width:900px;margin:auto">
<h2>Admin Dashboard</h2>
<p>Xin chào, <?= htmlspecialchars($_SESSION['admin_username'] ?? 'admin') ?> | <a href="logout.php">Đăng xuất</a></p>
<?php if (!empty($_GET['saved'])): ?><p style="color:green">Đã lưu thành công.</p><?php endif; ?>
<form method="post">
<?php foreach($keys as $key): ?>
  <label><?= htmlspecialchars($key) ?></label><br>
  <?php if ($key === 'hero_description'): ?>
  <textarea name="<?= htmlspecialchars($key) ?>" style="width:100%;padding:10px;min-height:120px"><?= htmlspecialchars($values[$key]) ?></textarea><br><br>
  <?php else: ?>
  <input name="<?= htmlspecialchars($key) ?>" value="<?= htmlspecialchars($values[$key]) ?>" style="width:100%;padding:10px"><br><br>
  <?php endif; ?>
<?php endforeach; ?>
  <button type="submit" style="padding:10px 16px">Lưu</button>
</form>
</body></html>
