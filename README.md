<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# HKT ECOTECH Website + CMS API cơ bản

Dự án gồm:
- **Frontend (React + Vite)** để hiển thị giao diện.
- **Backend API (Express)** để cập nhật nội dung động như logo text, CTA, banner, headline... mà không cần sửa trực tiếp mã giao diện.

## Chạy local

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

## CMS API cơ bản

- `GET /api/content` : lấy toàn bộ nội dung website.
- `PUT /api/content` : cập nhật toàn bộ nội dung website.

Dữ liệu được lưu tại: `data/site-content.json`.

Ví dụ cập nhật nhanh:
```bash
curl -X PUT http://localhost:4000/api/content \
  -H "Content-Type: application/json" \
  --data @data/site-content.json
```

## Deploy notes (tránh màn hình trắng)

- Frontend mặc định gọi API theo đường dẫn tương đối `/api/content`.
- Nếu API ở domain khác, set biến môi trường `VITE_API_BASE_URL` trước khi build.
  - Ví dụ: `VITE_API_BASE_URL=https://api.hktecotech.com npm run build`
- Nếu deploy **chỉ static hosting** (không chạy Node/Express), frontend vẫn chạy bằng dữ liệu mặc định, nhưng API cập nhật nội dung sẽ không hoạt động.
