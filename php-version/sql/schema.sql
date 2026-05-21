CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS site_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(100) NOT NULL UNIQUE,
  setting_value TEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- default admin: username = admin, password = Admin@123
INSERT INTO admins (username, password_hash)
VALUES ('admin', '$2y$12$9EOcOsA3B44VJERU/24gTODgXR1jJzaoo1XGyL1V1SajBuzzLe66m')
ON DUPLICATE KEY UPDATE username = username;

INSERT INTO site_settings (setting_key, setting_value) VALUES
('site_name', 'HKT ECOTECH'),
('hero_title', 'Nông nghiệp Phát thải thấp'),
('hero_subtitle', 'Chuyển đổi Kinh tế Carbon'),
('hero_description', 'Công nghệ hiện đại cho đo lường khí nhà kính và hành động chống biến đổi khí hậu.'),
('hero_banner', 'assets/images/hero-banner.jpg'),
('cta_label', 'Get Started')
ON DUPLICATE KEY UPDATE setting_key = setting_key;
