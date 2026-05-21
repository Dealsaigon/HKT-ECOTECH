<?php
require __DIR__ . '/includes/db.php';
require __DIR__ . '/includes/functions.php';

$siteName = getSetting($pdo, 'site_name', 'HKT ECOTECH');
$heroTitle = getSetting($pdo, 'hero_title', 'Nông nghiệp Phát thải thấp');
$heroSubtitle = getSetting($pdo, 'hero_subtitle', 'Chuyển đổi Kinh tế Carbon');
$heroDescription = getSetting($pdo, 'hero_description', 'Công nghệ hiện đại cho đo lường khí nhà kính và hành động chống biến đổi khí hậu.');
$heroBanner = getSetting($pdo, 'hero_banner', 'assets/images/hero-banner.jpg');
$ctaLabel = getSetting($pdo, 'cta_label', 'Get Started');
?>
<!doctype html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= htmlspecialchars($siteName) ?></title>
  <style>
    body{font-family:Arial,sans-serif;margin:0;background:#f4f8f6;color:#143e2f}
    .nav{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;background:#fff;position:sticky;top:0}
    .hero{max-width:1100px;margin:40px auto;padding:0 20px;display:grid;grid-template-columns:1fr 1fr;gap:24px}
    .hero img{width:100%;border-radius:16px;object-fit:cover;min-height:300px}
    .btn{background:#1f8f54;color:#fff;padding:12px 20px;border-radius:999px;display:inline-block;text-decoration:none}
    @media(max-width:900px){.hero{grid-template-columns:1fr}}
  </style>
</head>
<body>
  <div class="nav">
    <h2><?= htmlspecialchars($siteName) ?></h2>
    <a href="admin/login.php">Admin</a>
  </div>
  <section class="hero">
    <div>
      <h1><?= htmlspecialchars($heroTitle) ?></h1>
      <h3><?= htmlspecialchars($heroSubtitle) ?></h3>
      <p><?= htmlspecialchars($heroDescription) ?></p>
      <a class="btn" href="#"><?= htmlspecialchars($ctaLabel) ?></a>
    </div>
    <img src="<?= htmlspecialchars($heroBanner) ?>" alt="banner">
  </section>
</body>
</html>
