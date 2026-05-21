<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# HKT ECOTECH Website + CMS API cơ bản

Dự án gồm:
- **Frontend (React + Vite)** để hiển thị giao diện.
- **Backend API (Express)** để cập nhật nội dung động như logo text, CTA, banner, headline... mà không cần sửa trực tiếp mã giao diện.

---

## 1) Website bị màn hình trắng khi upload hosting: nguyên nhân thường gặp

Với project này, lỗi trắng trang thường do:
1. Upload **nhầm source code** (`src/`, `index.html` gốc) thay vì thư mục build `dist/`.
2. Hosting không cấu hình SPA fallback (điều hướng về `index.html`).
3. Frontend gọi API sai domain/port.

> **Lưu ý quan trọng:** bạn phải chạy `npm run build` và upload **toàn bộ file trong `dist/`** lên hosting tĩnh.

---

## 2) Cách chạy đúng local

1. Cài dependencies:
   ```bash
   npm install
   ```
2. Chạy frontend:
   ```bash
   npm run dev
   ```
3. Chạy backend API (terminal khác):
   ```bash
   npm run dev:api
   ```

---

## 3) Deploy frontend lên hosting tĩnh (cPanel, DirectAdmin, Nginx static...)

1. Build production:
   ```bash
   npm run build
   ```
2. Upload **nội dung bên trong thư mục `dist/`** lên thư mục webroot (`public_html` hoặc tương đương).
3. Nếu có route SPA, cấu hình rewrite/fallback về `index.html`.

Dự án đã đặt `base: './'` để giảm lỗi path assets khi chạy trên nhiều loại hosting tĩnh.

---

## 4) Cấu hình API content

- `GET /api/content` : lấy toàn bộ nội dung website.
- `PUT /api/content` : cập nhật toàn bộ nội dung website.
- Dữ liệu lưu ở: `data/site-content.json`.

Frontend mặc định gọi API theo `/api/content` (same-origin).

Nếu API chạy domain khác, set biến môi trường trước khi build:
```bash
VITE_API_BASE_URL=https://api.hktecotech.com npm run build
```

---

## 5) Có cần Database không?

**Không bắt buộc.**
Hiện tại CMS dùng file JSON (`data/site-content.json`) nên không cần MySQL/PostgreSQL để website chạy.

---

## 6) Tài khoản admin đăng nhập là gì?

Hiện tại project **chưa có module đăng nhập admin** (không có user/password admin mặc định).

Nếu bạn muốn, mình có thể làm bước tiếp theo:
- Trang `/admin` đăng nhập,
- token/session,
- form chỉnh logo/text/banner,
- lưu vào JSON hoặc Database.

