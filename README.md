# Limit ID Store

Website top up game & voucher — React + Vite + TypeScript + Tailwind, tema
dark-red gaming. Data produk, nominal, metode pembayaran, dan order diambil
dari backend Laravel + MySQL (lihat project terpisah `limit-id-store-api`).

## Cara menjalankan

Backend Laravel harus jalan duluan (lihat README di `limit-id-store-api`),
baru frontend ini:

```bash
cp .env.example .env
# pastikan VITE_API_URL mengarah ke API Laravel-mu, default:
# VITE_API_URL=http://localhost:8000/api

npm install
npm run dev
```

Buka `http://localhost:5173`.

## Struktur project

```
src/
  types.ts        -> tipe bersama (GameItem, Nominal, NominalGroup) —
                      bentuknya sengaja disamakan dengan JSON dari API
  lib/
    api.ts         -> semua pemanggilan ke backend Laravel (fetch wrapper)
    format.ts       -> formatIDR()
  hooks/
    useFetch.ts     -> hook generik: loading/error/data untuk komponen yang fetch
  pages/
    HomePage.tsx    -> Hero + Popular + Catalog
    ProductPage.tsx -> halaman pembelian, fetch detail game + submit order
  components/
    ui/         -> Button reusable
    layout/     -> Navbar (search + tab), Footer
    sections/   -> Hero, Popular, Catalog — fetch dari API, ada state loading & error
    product/    -> semua step di halaman pembelian (AccountForm, NominalPicker,
                   QuantityStep, PaymentPicker, PromoStep, ContactStep, OrderSidebar)
```

## Bagaimana data mengalir

```
Popular.tsx / Catalog.tsx
  └─ useFetch(fetchPopularGames / fetchGames) ──▶ GET /api/games ...

ProductPage.tsx
  ├─ useFetch(fetchGame(slug)) ─────────────────▶ GET /api/games/{slug}
  ├─ PaymentPicker ─ useFetch(fetchPaymentMethods) ▶ GET /api/payment-methods
  ├─ handleApplyPromo() ─────────────────────────▶ POST /api/promo-codes/validate
  └─ handleSubmit() ─────────────────────────────▶ POST /api/orders
```

Kalau backend belum jalan atau `VITE_API_URL` salah, tiap section akan
menampilkan pesan error di tempat (bukan halaman putih kosong) — cek pesan
itu dulu kalau data tidak muncul.

## Catatan penting soal aset visual

Tile game sengaja pakai **gradient placeholder + huruf awal**, bukan
artwork/logo resmi dari game (Mobile Legends, Free Fire, dst.) — itu berhak
cipta milik publisher masing-masing. Untuk produksi, pakai aset resmi yang
kamu punya izin pakai, atau buat ilustrasi sendiri, lalu render `<img>` di
`Popular.tsx`/`Catalog.tsx`/`ProductBanner.tsx` menggunakan field
`banner_path`/`logo_path` yang sudah disiapkan di skema database.

## Langkah berikutnya

- Halaman Cek Transaksi (fetch `GET /api/orders/{order_number}` yang sudah
  ada di backend), Leaderboard, Kalkulator — saat ini baru jadi tab navigasi.
- Auth untuk Masuk/Daftar & riwayat transaksi per user.
- Integrasi payment gateway asli (saat ini `POST /orders` cuma bikin order
  status `pending`, belum ada redirect ke pembayaran).

Bilang saja kalau mau saya lanjutkan ke salah satu bagian ini.
