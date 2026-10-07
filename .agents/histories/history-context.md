# Rangkuman Histori Proyek: Aer Carwash Blitar (Company Profile)

Dokumen ini berisi catatan komprehensif seluruh histori interaksi, instruksi pengguna, perubahan kode, keputusan arsitektur, dan referensi aset dari awal pengerjaan hingga status terkini. File ini ditujukan sebagai **panduan konteks otomatis** untuk sesi chat baru agar asisten AI dapat langsung melanjutkan pekerjaan tanpa kehilangan riwayat sebelumnya.

---

## 1. Identitas & Informasi Bisnis Resmi (Source of Truth)

* **Nama Brand:** AER DRIVE THRU CARWASH
* **Konsep Utama:** Pelopor cuci mobil berkonsep **Drive-Thru** pertama di Blitar — Cuci cepat hanya **10 Menit** tanpa perlu turun dari kendaraan.
* **Alamat Workshop:** Jl. Bali No. 144, Kota Blitar, Jawa Timur 66137
* **Jam Operasional:** 
  * Buka Setiap Hari: **07.00 – 23.00 WIB** (Pagi sampai Malam)
  * Hari Libur Nasional: Tetap Buka Sampai Malam
* **Hotline WhatsApp:** `0821-4324-3184` ([https://wa.me/6282143243184](https://wa.me/6282143243184))
* **Instagram Resmi:** `@aercarwash.blitar` ([https://www.instagram.com/aercarwash.blitar/](https://www.instagram.com/aercarwash.blitar/))
* **Google Maps Resmi:** [https://maps.app.goo.gl/euUY6TVDstqSZVzF7](https://maps.app.goo.gl/euUY6TVDstqSZVzF7)
  * **Place ID Google:** `0x2e78ebb5eaeefa4d:0x1829dd5dd523c3cb`
  * **Koordinat Presisi:** `-8.1122917, 112.1740563`
* **Author & Copyright:** `© 2026 Jeffrey Adrian. All rights reserved.` ([https://github.com/JeffreyAdrian27](https://github.com/JeffreyAdrian27))

---

## 2. Struktur Menu & Harga Resmi (Pricing Catalog)

### Layanan Cuci & Proteksi:
1. **Promo Cuci Luar (Drive-Thru): Rp 30.000**
   * Durasi ±10 menit, tetap nyaman di dalam mobil tanpa perlu turun.
   * Termasuk: Busa salju aktif pH netral, semprot kolong, pembersihan velg, pengeringan microfiber, dan semir ban.
2. **Promo Cuci Luar Dalam: Rp 40.000**
   * Durasi 20 - 30 menit.
   * Termasuk: Cuci bodi luar bersih total, cuci karpet mobil, vacuum debu interior & jok, lap dashboard, dan semir ban.
3. **Promo Wax Body Protection: Rp 25.000**
   * Durasi 15 menit.
   * Termasuk: Lapisan wax khusus efek kilap basah (*wet-look*), efek hidrofobik daun talas, dan perlindungan cat dari kusam.
4. **Cuci Mesin (Engine Bay): Rp 10.000**
   * Pembersihan ruang mesin dari kerak debu dan oli secara aman.
5. **Sepeda Motor Standar: Rp 15.000**
   * Motor bebek & matic kecil (Beat, Scoopy, Vario 125, Mio, Fazzio, dsb).
6. **Sepeda Motor Besar (Moge / Sport): Rp 25.000**
   * Matic bongsor (NMax, PCX, ADV, XMax) dan motor sport / moge.

### Paket Membership Bulanan (Rutin 30 Hari):
1. **Membership 199k (Paket Personal): Rp 199.000 / 30 Hari**
   * Terdaftar untuk **1 Plat Mobil**.
   * Bebas cuci mobil tiap hari selama sebulan (Maksimal 1 kali cuci per hari).
2. **Membership 399k (Paket Family & Bisnis): Rp 399.000 / 30 Hari**
   * Terdaftar untuk **3 Plat Mobil**.
   * Bebas cuci bergantian tiap hari selama sebulan (Maksimal 1 mobil per hari).

### Layanan Segera Hadir (Coming Soon):
1. **Aer Auto Detailing:** Paint correction multi-stage, Nano Ceramic Coating 9H bergaransi, dan deep interior cleaning.
2. **Aer Cafe & Lounge:** Ruang tunggu estetik ber-AC dengan aneka sajian kopi, minuman segar, camilan, dan koneksi Free High-Speed WiFi.

---

## 3. Tech Stack & Aturan Rekayasa (Architecture & Guidelines)

* **Framework:** Vue 3 (Composition API dengan `<script setup>`), Vite.
* **Routing:** `vue-router` (mode history).
* **Styling:** Vanilla CSS murni / Scoped CSS (Desain bertema *sleek dark mode*, aksen *cyan-blue* `#38bdf8` dan *gold* `#f59e0b`, glassmorphism, serta transisi halus). **Tidak menggunakan TailwindCSS**.
* **Icon Library:** `lucide-vue-next`.
* **Aset Statis:** Disimpan di `frontend/public/`.
* **Perintah Build & Dev:**
  * Dev: `npm run dev` di direktori `frontend/`
  * Build: `npm run build` di direktori `frontend/`

---

## 4. Kronologi Seluruh Permintaan Pengguna & Solusi Teknis

| No | Permintaan Pengguna | Tindakan & Implementasi Teknis |
|:---|:---|:---|
| 1 | *Pelajari PRD dan skills di `.agents`* | Mempelajari `PRD-Company-Profile-Aercarwash.md` dan aturan arsitektur visual. |
| 2 | *Mulai buat website dengan gambar dummy terlebih dahulu* | Menginisialisasi proyek Vue 3 Vite, membuat komponen SVG dummy untuk mockup awal. |
| 3 | *Database tidak usah / hapus saja, cukup Company Profile murni tanpa sistem kompleks* | Menghapus backend Laravel/database, memfokuskan arsitektur menjadi frontend company profile murni yang super cepat dan responsif. |
| 4 | *Pelajari Instagram `@aercarwash.blitar`* | Menganalisis profil Instagram, jam buka (07.00 - 23.00 WIB), alamat Jl. Bali 144, layanan, promo, dan konsep drive-thru. |
| 5-7 | *Ubah logo, hapus booking & before-after slider, terapkan menu dan jam operasional baru* | Mengintegrasikan seluruh daftar harga resmi, menonaktifkan fitur reservasi booking (karena sistem langsung drive-thru), dan menghapus slider before-after sesuai instruksi. |
| 8-9 | *Detailing dan Cafe dibuat "Coming Soon"* | Menambahkan seksi kartu dan banner "Coming Soon" dengan badge indikator pulse animasi di `HomeView.vue`, `PricingView.vue`, dsb. |
| 10 | *Ganti logo website menggunakan `icons.png` dan hilangkan bintangnya* | Memperbarui komponen `Logo.vue` menggunakan `icons.png` yang bersih tanpa elemen bintang. |
| 11 | *Tambahkan paket Membership 199k & 399k* | Membuat seksi membership di `HomeView.vue`, `PricingView.vue`, dan `PromoView.vue` dengan rincian benefit plat mobil. |
| 12 | *Tulisan "Coming Soon" tidak kelihatan* | Memperbaiki kontras warna, border, dan glowing efek pada tag badge Coming Soon agar sangat kontras dan terbaca jelas. |
| 13-14 | *Footer diubah menjadi Copyright 2026 Jeffrey Adrian* | Menyesuaikan teks copyright di `Footer.vue` menjadi `© 2026 Jeffrey Adrian. All rights reserved.` yang mengarah ke GitHub profil pengembang. |
| 15 | *Ubah foto hero utama menjadi `public/images/aer_car_wash_depan.jpg`* | Mengganti gambar ilustrasi mobil lama di hero section `HomeView.vue` dengan foto asli fasad depan workshop Aer Carwash. |
| 16-19 | *Peralatan busa di GalleryView (id: 104) jadikan 1 kartu yang bisa di-slide (3 gambar)* | Mengubah item fasilitas ke-4 (id: 104) di `GalleryView.vue` menjadi slider foto mini yang menampilkan 3 gambar (`water_spray_atas.png`, `water_spray_samping.png`, `water_spray.jpg`) tanpa merusak item galeri lainnya. |
| 20 | *Gambar di slide galeri terlalu nge-zoom* | Menambahkan style `.thumb-contain` (`object-fit: contain; background: rgba(0,0,0,0.5);`) agar gambar tampil utuh proporsional tanpa terpotong. |
| 21 | *Kartu floating stat di hero hilang saat layar HP diperkecil* | Memperbaiki CSS responsif `HomeView.vue`: mengganti `display: none` pada mobile menjadi kartu mini kompak dengan font dan ikon yang pas (`width: 20px` & `font-size: 0.78rem`). |
| 22-23 | *Teks Instagram di footer diganti icon menggunakan `instagram_icons.png` dan dibuat lebih besar* | Mengganti teks `Instagram:` di `Footer.vue` dengan elemen gambar `instagram_icons.png` (ukuran 24x24px, hover scale 1.12, bayangan halus). |
| 24 | *Logo WhatsApp floating tombolnya tolong dinaikkan sedikit* | Menyesuaikan CSS `.floating-wa-btn` di `style.css` menjadi `bottom: 80px` di mobile (sehingga tidak menutupi footer/tombol bawah) dan `bottom: 32px` di desktop. |
| 25 | *Ketika buka di map tidak ada pin point-nya* | Memperbaiki iframe embed peta dan tautan navigasi yang sebelumnya mengarah ke poligon umum alun-alun kota tanpa marker titik. |
| 26 | *Hubungkan Google Maps ke link resmi: `https://maps.app.goo.gl/euUY6TVDstqSZVzF7`* | Menghubungkan iframe peta ke embed resmi profil bisnis Google Aer Carwash (Place ID `0x2e78ebb5eaeefa4d:0x1829dd5dd523c3cb`) sehingga pin merah bertuliskan **Aer Carwash** tertancap presisi. Serta memperbarui semua tombol peta di `LocationView.vue`, `HomeView.vue`, dan `ContactView.vue` ke tautan `maps.app.goo.gl`. |
| 27 | *Gambar hero dibuat full halaman sebesar hero area* | Mengubah layout Hero di `HomeView.vue` menjadi full-bleed background banner: foto tampak depan `/images/aer_car_wash_depan.jpg` mencakup seluruh area hero. |
| 28 | *Buat gambar hero lebih kelihatan jelas* | Menipiskan lapisan gradien overlay gelap di `HomeView.vue`, meningkatkan kecerahan/kontras gambar, dan memperkuat text-shadow pada judul & subjudul agar foto fasad workshop terlihat jelas dan terang, sementara teks tetap mudah dibaca. |

---

## 5. Peta File Utama & Komponen (Codebase Directory)

```
e:\Github\aercarwashblitar\
├── .agents/
│   ├── PRD-Company-Profile-Aercarwash.md     # Spesifikasi awal PRD
│   ├── histories/
│   │   └── history-context.md                # [FILE INI] Rangkuman seluruh histori chat
│   └── skills/                               # Skill tools & panduan UI/UX
├── frontend/
│   ├── public/
│   │   ├── icons.png                         # Logo resmi workshop
│   │   ├── instagram_icons.png               # Icon logo Instagram resmi
│   │   └── images/
│   │       ├── aer_car_wash_depan.jpg        # Foto tampak depan workshop (Hero)
│   │       ├── water_spray_atas.png          # Foto alat semprot atas
│   │       ├── water_spray_samping.png       # Foto alat semprot samping
│   │       └── water_spray.jpg               # Foto semprot kolong / peralatan
│   └── src/
│       ├── style.css                         # Global CSS & styling tombol floating WA
│       ├── components/
│       │   ├── NavBar.vue                    # Navigasi atas + menu mobile
│       │   ├── Footer.vue                    # Footer, info kontak, IG icon, Copyright Jeffrey Adrian
│       │   └── Logo.vue                      # Komponen render logo
│       └── views/
│           ├── HomeView.vue                  # Beranda (Hero, Menu, Membership, Coming Soon, CTA)
│           ├── ServicesView.vue              # Rincian layanan & durasi
│           ├── PricingView.vue               # Menu harga & membership bulanan
│           ├── GalleryView.vue               # Galeri foto fasilitas & slider busa 3-foto
│           ├── PromoView.vue                 # Promo cuci 30k, 40k, wax 25k, & membership
│           ├── LocationView.vue              # Peta Google Maps resmi dengan pin point presisi
│           ├── ContactView.vue               # Hubungi kami & tombol WA langsung
│           └── AboutView.vue                 # Cerita & keunggulan brand
```

---

## 6. Prinsip Kerja Untuk Sesi Chat Mendatang (Guidelines for AI)

1. **Jaga Konsistensi Desain:**
   * Pertahankan tema gelap (*deep navy/slate*), aksen biru neon/cyan (`#38bdf8`) dan gold (`#f59e0b`).
   * Jangan gunakan framework CSS lain (misal Tailwind) kecuali secara eksplisit diminta oleh pengguna.
2. **Kepatuhan pada Permintaan Terarah:**
   * Jika pengguna meminta perubahan spesifik (misal pada satu card atau tombol), **jangan ubah coding file atau komponen lain yang tidak bersangkutan**.
3. **Integritas Link & Informasi:**
   * Seluruh tautan Google Maps harus selalu mengarah ke link resmi: `https://maps.app.goo.gl/euUY6TVDstqSZVzF7`.
   * Nomor WhatsApp tetap: `0821-4324-3184` (`https://wa.me/6282143243184`).
   * Alamat resmi: `Jl. Bali No. 144, Kota Blitar, Jawa Timur 66137`.
4. **Validasi Build:**
   * Selalu jalankan `npm run build` di `frontend/` setelah melakukan perubahan kode untuk memastikan tidak ada syntax atau asset import error.
