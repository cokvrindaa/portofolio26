# 🌐 cokvrinda26 — Personal Portfolio Website

Website portofolio pribadi yang dibangun menggunakan **React + Vite + Tailwind CSS**, dilengkapi dengan animasi interaktif berbasis **Three.js** dan **Framer Motion**. Bisa diakses secara live di GitHub Pages.

🔗 **Live Demo:** [cokvrindaa.github.io/cokvrinda26](https://cokvrindaa.github.io/cokvrinda26)

---

## ✨ Fitur

- **Beranda** — Intro dengan animasi scroll velocity
- **Tentang** — Deskripsi diri dan keahlian
- **Riwayat Pendidikan** — Timeline pendidikan
- **Projek** — Showcase project yang pernah dibuat
- **Sertifikat** — Daftar sertifikat yang dimiliki
- **Kontak** — Form / info kontak
- Animasi 3D menggunakan dengan reactbits **Three.js / React Three Fiber**
- Transisi halus dengan **Framer Motion** dan **GSAP**
- Desain responsif dengan **Tailwind CSS v4**
- Dark theme dengan background grid animasi

---

## 🛠️ Tech Stack

| Teknologi | Keterangan |
|---|---|
| [React 19](https://react.dev/) | Library UI utama |
| [Vite 7](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| [Three.js](https://threejs.org/) + React Three Fiber | Animasi & elemen 3D |
| [Framer Motion](https://www.framer.com/motion/) | Animasi UI |
| [GSAP](https://gsap.com/) | Animasi scroll & timeline |
| [Font Awesome](https://fontawesome.com/) | Icon library |
| [Tabler Icons](https://tabler.io/icons) | Icon library tambahan |
| [gh-pages](https://github.com/tschaub/gh-pages) | Deploy ke GitHub Pages |

---

## 📁 Struktur Proyek

```
cokvrinda26/
├── public/
│   ├── image/          # Gambar aset (foto, logo, screenshot projek)
│   └── assets/         # Aset lainnya (lanyard, dll)
├── src/
│   ├── Components/
│   │   ├── Pages/      # Halaman utama (MainPage)
│   │   ├── Layout/     # Seksi-seksi halaman (Beranda, Projek, dll)
│   │   ├── Fragment/   # Komponen bagian dari layout
│   │   ├── Element/    # Komponen UI kecil & reusable
│   │   └── lib/        # Utility / helper
│   ├── main.jsx        # Entry point React
│   └── index.css       # Global styles
├── index.html
├── vite.config.js
├── package.json
└── eslint.config.js
```

---

## 🚀 Cara Instalasi & Menjalankan Lokal

### Prasyarat
- **Node.js** versi 18 atau lebih baru → [Download di sini](https://nodejs.org/)
- **npm** (sudah termasuk saat install Node.js)

### Langkah-langkah

**1. Clone repositori ini**
```bash
git clone https://github.com/cokvrindaa/cokvrinda26.git
cd cokvrinda26
```

**2. Install semua dependensi**
```bash
npm install
```

**3. Jalankan di mode development**
```bash
npm run dev
```

Buka browser dan akses `http://localhost:5173`

---

## 🏗️ Build untuk Produksi

```bash
npm run build
```

Hasil build akan ada di folder `dist/`. Untuk preview hasil build secara lokal:

```bash
npm run preview
```

---

## 🌍 Deploy ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk deploy otomatis ke GitHub Pages menggunakan `gh-pages`.

```bash
npm run deploy
```

Perintah ini akan otomatis menjalankan `npm run build` terlebih dahulu, lalu mendeploy folder `dist/` ke branch `gh-pages`.

> **Catatan:** Pastikan field `homepage` di `package.json` sudah sesuai dengan URL GitHub Pages kamu.

---

## 📜 Scripts yang Tersedia

| Script | Perintah | Keterangan |
|---|---|---|
| Dev server | `npm run dev` | Jalankan di localhost |
| Build | `npm run build` | Build untuk produksi |
| Preview | `npm run preview` | Preview hasil build |
| Lint | `npm run lint` | Cek kualitas kode |
| Deploy | `npm run deploy` | Deploy ke GitHub Pages |

---

## 📄 Lisensi

Proyek ini bersifat pribadi. Silakan gunakan sebagai referensi, namun mohon jangan mengklaim sebagai milikmu sendiri.

---

<p align="center">Made with ❤️ by <a href="https://github.com/cokvrindaa">cokvrindaa</a></p>
