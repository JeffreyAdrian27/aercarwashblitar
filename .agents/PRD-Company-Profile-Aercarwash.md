# PRD: Website Company Profile Aercarwash

## 1. Ringkasan Produk

- **Nama produk:** Website Company Profile Aercarwash
- **Tujuan:** Memperkenalkan Aercarwash sebagai layanan cuci mobil profesional, membangun kepercayaan pelanggan, dan mempermudah pelanggan melihat layanan, harga, lokasi, serta melakukan booking.
- **Platform:** Website responsif (mobile-first, karena mayoritas pengunjung diperkirakan dari smartphone).

## 2. Latar Belakang dan Masalah

- Calon pelanggan sulit menemukan informasi layanan, harga, dan jam operasional secara online.
- Belum ada media resmi yang menunjukkan kredibilitas dan kualitas hasil kerja.
- Proses pemesanan masih manual dan memakan waktu.

## 3. Tujuan dan Indikator Keberhasilan

| Tujuan | Indikator (KPI) |
|---|---|
| Meningkatkan kepercayaan brand | Waktu kunjungan rata-rata > 1,5 menit |
| Menaikkan jumlah pelanggan baru | Klik tombol WhatsApp/Booking per bulan |
| Mudah ditemukan di Google | Muncul di Google Maps dan pencarian lokal |
| Pengalaman mobile baik | Skor Lighthouse mobile > 80 |

## 4. Target Pengguna

- **Pemilik mobil pribadi:** mencari cuci mobil cepat, harga jelas.
- **Pelanggan korporat/armada:** mencari kerja sama berlangganan.
- **Pelanggan detailing:** mencari poles, coating, dan perawatan interior.

## 5. Struktur Navbar

- **Desktop:** logo di kiri, menu di tengah/kanan, tombol CTA di ujung kanan. Navbar bersifat *sticky* (tetap di atas saat scroll).
- **Mobile:** logo di kiri, ikon hamburger di kanan, menu muncul sebagai drawer/dropdown, tombol CTA tetap terlihat.

| No | Menu | Tujuan | Isi Utama |
|---|---|---|---|
| 1 | **Beranda** | Kesan pertama | Hero banner, ringkasan layanan, keunggulan, testimoni singkat, CTA |
| 2 | **Tentang Kami** | Membangun kepercayaan | Profil perusahaan, visi misi, nilai, tim |
| 3 | **Layanan** | Menjelaskan produk | Cuci eksterior, cuci interior, cuci komplit, poles, coating, detailing, cuci mesin |
| 4 | **Harga / Paket** | Transparansi harga | Tabel paket per jenis kendaraan (city car, SUV, MPV) |
| 5 | **Galeri** | Bukti hasil kerja | Foto/video sebelum-sesudah, foto fasilitas |
| 6 | **Promo** | Mendorong transaksi | Promo aktif, paket member, voucher |
| 7 | **Lokasi** | Memudahkan datang | Alamat, peta Google Maps, jam buka, petunjuk arah |
| 8 | **Kontak** | Komunikasi | Form kontak, WhatsApp, telepon, email, media sosial |
| CTA | **Booking Sekarang** | Konversi | Tombol menuju WhatsApp atau halaman form booking |

*Opsional tahap lanjut:* Blog/Tips Perawatan Mobil, FAQ, Karier, Kemitraan.

## 6. Kebutuhan Fungsional

### Halaman Beranda
- Hero dengan headline, sub-headline, dan tombol CTA.
- Section keunggulan (contoh: air bersih, produk premium, tenaga terlatih, garansi).
- Cuplikan layanan unggulan dan testimoni pelanggan.
- Footer berisi kontak, jam buka, dan tautan cepat.

### Halaman Layanan dan Harga
- Kartu layanan dengan deskripsi, estimasi durasi, dan harga mulai dari.
- Filter/tab berdasarkan ukuran kendaraan.

### Galeri
- Grid foto dengan *lightbox*, slider sebelum-sesudah.

### Lokasi
- Peta Google Maps tertanam, tombol "Buka di Google Maps".

### Kontak dan Booking
- Form: nama, nomor WhatsApp, jenis kendaraan, layanan, tanggal/jam, catatan.
- Tombol WhatsApp mengambang (*floating*) di semua halaman.
- Validasi form di sisi Vue dan di sisi PHP, lalu pesan konfirmasi setelah submit.
- Data booking/pesan disimpan ke database melalui endpoint PHP, dengan notifikasi ke email atau WhatsApp pemilik.

## 7. Kebutuhan Non-Fungsional

- **Performa:** waktu muat < 3 detik di jaringan 4G, gambar dikompres (WebP).
- **Responsif:** nyaman di layar 360px sampai desktop.
- **SEO:** meta title/description, struktur heading rapi, schema *LocalBusiness*, Google Business Profile.
- **Keamanan:** HTTPS, proteksi spam pada form.
- **Aksesibilitas:** kontras warna cukup, teks alternatif pada gambar.
- **Analitik:** Google Analytics dan pelacakan klik tombol CTA.

## 8. Stack Teknologi dan Arsitektur

**Stack utama:** PHP native (tanpa framework) sebagai backend dan Vue.js sebagai frontend.

| Lapisan | Teknologi | Peran |
|---|---|---|
| Frontend | Vue.js 3 (Composition API) + Vue Router | Antarmuka, navigasi navbar tanpa reload halaman (SPA) |
| Build tool | Vite | Bundling dan optimasi aset |
| Styling | Tailwind CSS atau CSS custom | Tampilan responsif |
| Backend | PHP native 8.x (REST API sederhana, format JSON) | Menyajikan data layanan/harga/promo dan memproses form |
| Database | MySQL/MariaDB (PDO + prepared statement) | Menyimpan layanan, harga, promo, galeri, pesan, booking |
| Web server | Apache atau Nginx | Hosting dan routing |

**Pola arsitektur:**
- Vue.js berjalan sebagai SPA, mengambil data dari endpoint PHP lewat `fetch`/Axios.
- PHP native menyediakan endpoint JSON, misalnya:
  - `GET /api/services.php` untuk daftar layanan
  - `GET /api/packages.php` untuk paket dan harga
  - `GET /api/promos.php` untuk promo aktif
  - `GET /api/gallery.php` untuk galeri
  - `POST /api/contact.php` untuk form kontak
  - `POST /api/booking.php` untuk booking
- Navbar dibuat sebagai komponen Vue (`NavBar.vue`) dengan Vue Router, tiap menu memetakan ke satu view.

**Struktur folder yang disarankan:**

```
aercarwash/
├── api/                  # endpoint PHP native
│   ├── config/db.php     # koneksi PDO
│   ├── services.php
│   ├── packages.php
│   ├── promos.php
│   ├── gallery.php
│   ├── contact.php
│   └── booking.php
├── admin/                # panel admin sederhana (PHP)
├── frontend/             # proyek Vue.js (Vite)
│   └── src/
│       ├── components/   # NavBar.vue, Footer.vue, ServiceCard.vue, dst
│       ├── views/        # Home, About, Services, Pricing, Gallery, Promo, Location, Contact
│       ├── router/index.js
│       └── main.js
├── public/               # hasil build Vue + aset + uploads
└── .htaccess             # fallback SPA ke index.html
```

**Catatan teknis penting:**
- **SEO:** SPA murni kurang ramah mesin pencari. Mitigasi: atur meta tag dinamis (misalnya `@vueuse/head`), sediakan `sitemap.xml`, dan gunakan schema *LocalBusiness* di `index.html`. Jika SEO sangat penting, pertimbangkan prerendering.
- **Keamanan PHP native:** gunakan PDO prepared statement, validasi dan sanitasi input, proteksi CSRF dan spam (honeypot/reCAPTCHA) pada form, atur header CORS secara terbatas, serta simpan kredensial di file konfigurasi di luar folder publik.
- **Panel admin (opsional MVP+):** login dengan `password_hash`/`password_verify` dan session aman, untuk mengelola layanan, harga, promo, galeri, dan melihat pesan masuk.
- **Deployment:** build Vue (`npm run build`) lalu taruh hasilnya di `public/`; pastikan `.htaccess` mengarahkan rute non-API ke `index.html`.

## 9. Arahan Desain

- **Nuansa:** bersih, segar, modern; warna biru/cyan (air), putih, dengan aksen kuning/oranye untuk CTA.
- **Tipografi:** sans-serif yang tegas dan mudah dibaca.
- **Visual:** foto asli kendaraan dan fasilitas, bukan stok generik.

## 10. Konten yang Dibutuhkan dari Pihak Aercarwash

- Logo dan panduan warna (jika ada).
- Profil singkat, visi misi, dan tahun berdiri.
- Daftar layanan dan harga terbaru.
- Foto dan video hasil kerja serta fasilitas.
- Alamat lengkap, jam operasional, nomor WhatsApp, akun media sosial.
- Testimoni pelanggan.

## 11. Ruang Lingkup

- **Termasuk (MVP):** 8 menu di atas, form booking sederhana (tersimpan di database dan diteruskan ke WhatsApp/email), REST API PHP native, SEO dasar, integrasi peta dan analitik.
- **Belum termasuk:** pembayaran online, sistem membership berlogin, dashboard admin kompleks (panel admin sederhana bersifat opsional), aplikasi mobile.

## 12. Estimasi Timeline

| Tahap | Durasi |
|---|---|
| Pengumpulan konten dan wireframe | 1 minggu |
| Desain UI | 1–2 minggu |
| Pengembangan (Vue.js + API PHP native + database) | 2–3 minggu |
| Pengujian dan revisi | 1 minggu |
| Peluncuran | 1 hari |

## 13. Risiko dan Asumsi

- Keterlambatan materi konten (foto, harga) dapat menunda peluncuran.
- Diasumsikan harga dan layanan cukup stabil, sehingga cukup dikelola lewat pengeditan konten sederhana.
- Domain dan hosting disiapkan oleh klien atau ditentukan bersama; hosting harus mendukung PHP 8.x, MySQL, dan dapat menjalankan file build Vue.
- PHP native tanpa framework membuat pengembangan lebih manual (routing, keamanan, struktur kode); perlu disiplin pada standar kode agar mudah dirawat.
- Sebagai SPA, SEO perlu perhatian ekstra (lihat catatan di bagian Stack Teknologi).
