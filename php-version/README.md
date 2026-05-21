# PHP + MySQL version (deploy trực tiếp hosting)

## 1) Upload đúng cách
- Upload toàn bộ thư mục `php-version` vào `public_html` (hoặc domain root).
- Đảm bảo file chạy chính là `index.php`.

## 2) Tạo database
1. Tạo MySQL database/user trên hosting.
2. Import file `sql/schema.sql`.
3. Sửa thông tin kết nối trong `includes/config.php`.

## 3) Đăng nhập admin
- URL: `/admin/login.php`
- Tài khoản mặc định:
  - user: `admin`
  - pass: `Admin@123`
- Sau khi đăng nhập vào `dashboard.php` để sửa nội dung website.

## 4) Ảnh banner
- Copy ảnh vào `assets/images/`.
- Trong admin sửa trường `hero_banner`, ví dụ `assets/images/hero-banner.jpg`.

## 5) Yêu cầu hosting
- PHP 8.0+
- MySQL 5.7+ hoặc MariaDB tương đương
- Bật PDO MySQL extension
