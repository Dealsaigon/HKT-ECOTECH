# PHP + MySQL version (deploy trực tiếp hosting)

## 1) Upload đúng cách
- Upload **toàn bộ nội dung bên trong `php-version/`** vào `public_html` (hoặc domain root).
- File chạy chính: `index.php`.

## 2) Tạo database + chống lỗi tiếng Việt bị lỗi font
1. Tạo MySQL database/user trên hosting.
2. Import `sql/schema.sql` (đã cấu hình `utf8mb4_unicode_ci`).
3. Sửa kết nối DB trong `includes/config.php`.
4. Khi import trên phpMyAdmin, chọn charset UTF-8.

## 3) Đăng nhập admin
- URL: `/admin/login.php`
- User mặc định: `admin`
- Password mặc định: `Admin@123`
- Vào `/admin/dashboard.php` để sửa nội dung giao diện.

## 4) Quản lý ảnh local
- Thư mục ảnh: `assets/images/`
- Upload ảnh banner vào thư mục này (ví dụ `hero-banner.svg`).
- Trong admin nhập đường dẫn: `assets/images/hero-banner.svg`

## 5) Hosting yêu cầu
- PHP 8.0+
- MySQL 5.7+ / MariaDB
- PDO MySQL extension
