<?php
header('Content-Type: text/html; charset=UTF-8');
require __DIR__ . '/includes/db.php';
require __DIR__ . '/includes/functions.php';

$siteName = getSetting($pdo, 'site_name', 'HKT ECOTECH');
$heroBadge = getSetting($pdo, 'hero_badge', 'MRV Platform');
$heroTitle = getSetting($pdo, 'hero_title', 'Nông nghiệp Phát thải thấp');
$heroSubtitle = getSetting($pdo, 'hero_subtitle', 'Chuyển đổi Kinh tế Carbon');
$heroDescription = getSetting($pdo, 'hero_description', 'Công nghệ hiện đại cho đo lường khí nhà kính và hành động chống biến đổi khí hậu.');
$heroBanner = getSetting($pdo, 'hero_banner', 'assets/images/hero-banner.svg');
$ctaLabel = getSetting($pdo, 'cta_label', 'Khám phá Giải pháp');
$ctaLabel2 = getSetting($pdo, 'cta_secondary', 'Xem Dữ liệu Báo cáo');
?>
<!doctype html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title><?= htmlspecialchars($siteName) ?></title><link rel="stylesheet" href="assets/styles.css"></head>
<body>
<nav class="nav"><div class="container nav-inner"><a class="brand" href="/"><?= htmlspecialchars($siteName) ?></a><div class="menu"><a href="#solutions">Solutions</a><a href="#blockchain">Blockchain</a><a href="#emissions">Emissions</a><a href="#resources">Resources</a><a href="#partnerships">Partnerships</a></div><a href="admin/login.php">Admin</a></div></nav>
<section class="hero" id="emissions"><div class="container hero-grid"><div><span class="badge"><?= htmlspecialchars($heroBadge) ?></span><h1><?= htmlspecialchars($heroTitle) ?></h1><div class="sub"><?= htmlspecialchars($heroSubtitle) ?></div><p class="desc"><?= htmlspecialchars($heroDescription) ?></p><p><a class="btn" href="#solutions"><?= htmlspecialchars($ctaLabel) ?></a> <a class="btn" style="background:#345" href="#resources"><?= htmlspecialchars($ctaLabel2) ?></a></p></div><div><img src="<?= htmlspecialchars($heroBanner) ?>" alt="banner"></div></div></section>
<section class="section" id="solutions"><div class="container"><h2>Giải pháp bền vững</h2><div class="cards"><div class="card"><h3>Xóa đói giảm nghèo</h3><p>Tạo nguồn thu nhập mới cho nông dân qua tín chỉ carbon và mô hình canh tác phát thải thấp.</p><p class="kpi">+15% thu nhập</p></div><div class="card"><h3>Hành động vì khí hậu</h3><p>Triển khai MRV để theo dõi và xác minh giảm phát thải theo chuẩn quốc tế.</p><p class="kpi">-45,000 tấn CO₂e</p></div></div></div></section>
<section class="section" id="partnerships"><div class="container"><h2>Dự án & Cơ chế Trọng điểm</h2><div class="projects"><div class="card"><h3>Dự án TRVC</h3><p>Chuyển đổi chuỗi giá trị lúa gạo phát thải thấp tại Đồng bằng sông Cửu Long.</p><ul><li>An Giang, Đồng Tháp, Kiên Giang</li><li>Hỗ trợ bởi SNV và Australia DFAT</li></ul></div><div class="card"><h3>Pay-for-Results</h3><p>Chi trả dựa trên kết quả thực tế, kết hợp MRV + blockchain để phân bổ thưởng minh bạch.</p><p><b>Đối tác công nghệ:</b> Regrow</p></div></div></div></section>
<footer class="footer"><div class="container">© <?= date('Y') ?> <?= htmlspecialchars($siteName) ?>.</div></footer>
</body></html>
