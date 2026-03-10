# Muslim Daily v4 — Toolkit Islami Harian 🌙

Aplikasi web progresif (PWA) islami lengkap untuk kebutuhan ibadah sehari-hari.

## 📁 Struktur File

```
Muslim-Daily/
├── index.html          → Halaman utama (Home, Statistik, Pengaturan)
├── app.js              → Logika utama app
├── style.css           → Stylesheet utama
├── manifest.json       → PWA manifest
├── service-worker.js   → Service worker untuk offline
│
├── quran.html          → Al-Qur'an (114 surah via API equran.id)
├── sholat.html         → Jadwal Sholat (API aladhan.com + GPS)
├── tasbih.html         → Tasbih Digital (counter + riwayat)
├── dzikir.html         → Dzikir Pagi & Petang
├── doa.html            → Doa Harian (18 doa ma'tsur)
├── kiblat.html         → Arah Kiblat (kompas digital)
├── asmaul.html         → Asmaul Husna (99 nama Allah)
├── hadis.html          → Hadis Harian (25 hadis pilihan)
├── kalender.html       → Kalender Islam & Event 1447 H
│
├── css/
│   └── shared.css      → CSS bersama untuk halaman terpisah
└── js/
    └── shared.js       → Utilitas & data bersama
```

## 🚀 Cara Menggunakan

1. Buka `index.html` di browser modern
2. Atau host di web server (untuk PWA & GPS penuh)
3. Install sebagai PWA melalui tombol install di browser

## ✨ Fitur

- **Al-Qur'an** — 114 surah lengkap, cari, bookmark ayat (via equran.id API)
- **Jadwal Sholat** — Waktu sholat akurat berdasarkan lokasi GPS
- **Tasbih Digital** — Hitung dzikir dengan berbagai pilihan, riwayat tersimpan
- **Dzikir Harian** — Dzikir pagi & petang dengan progress tracking
- **Doa Harian** — Kumpulan doa ma'tsur lengkap dengan Arab, latin & terjemah
- **Arah Kiblat** — Kompas digital dengan perhitungan sudut kiblat akurat
- **Asmaul Husna** — 99 nama Allah dengan fitur tandai hafal
- **Hadis Harian** — 25 hadis pilihan dengan fitur bookmark
- **Kalender Islam** — Tanggal hijriyah & event Islam 1447 H
- **Streak Ibadah** — Pantau konsistensi ibadah harian
- **Dark/Light Mode** — Tema gelap dan terang
- **PWA** — Bisa diinstall sebagai aplikasi di HP

## 🔧 Teknologi

- HTML5, CSS3, Vanilla JavaScript (no framework)
- Progressive Web App (PWA)
- API: aladhan.com (waktu sholat), equran.id (Al-Qur'an), bigdatacloud.net (geocoding)
- Font: Plus Jakarta Sans + Amiri (Arabic)

---
*Semoga bermanfaat. بَارَكَ اللَّهُ فِيكُمْ*
