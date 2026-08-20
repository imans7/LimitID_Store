# Limit ID Store

Website top up game & voucher — React + Vite + TypeScript + Tailwind, tema
dark-red gaming, struktur terinspirasi dari platform top up game populer
(navbar search, tab kategori, grid produk).

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Struktur project

```
src/
  components/
    ui/        -> Button reusable
    layout/    -> Navbar (search + tab), Footer
    sections/  -> Hero, Popular, Catalog (tab Top Up/Voucher/Hiburan)
  data/
    games.ts   -> daftar game & harga (masih dummy)
```

## Catatan penting soal aset visual

Tile game di scaffold ini sengaja pakai **gradient placeholder + huruf awal**,
bukan artwork/logo resmi dari game (Mobile Legends, Free Fire, dst.) — logo
dan ilustrasi karakter game itu berhak cipta milik publisher masing-masing.

Untuk produksi, kamu perlu:
1. Pakai aset resmi yang kamu punya izin/lisensi untuk menampilkannya
   (banyak provider H2H/aggregator top up menyediakan banner resmi ke
   reseller mereka), **atau**
2. Buat ilustrasi/ikon sendiri per game.

Ganti `gradient` di `src/data/games.ts` dengan `image: "/games/nama.png"`
lalu render `<img>` di `Popular.tsx` & `Catalog.tsx` begitu asetnya siap.

## Langkah berikutnya

- Sambungkan `games.ts` ke API/backend (provider top up atau database kamu
  sendiri) untuk data & harga real-time.
- Tambah halaman detail produk (pilih nominal, input ID game, metode bayar).
- Tambah Cek Transaksi, Leaderboard, dan Kalkulator (saat ini baru jadi tab
  navigasi, belum ada halamannya).
- Auth untuk Masuk/Daftar (Supabase, atau provider lain).

Bilang saja kalau mau saya lanjutkan ke salah satu bagian ini.
