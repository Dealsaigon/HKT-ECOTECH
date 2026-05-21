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
