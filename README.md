# 🦋 Bidadari ERP - Aplikasi Manajemen Keuangan

<div align="center">
  <img src="aset/screenshot/logo_bidadari.png" width="180" style="border-radius: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); margin-bottom: 20px;">
  <br>
  <b>Sistem Pencatatan & Pelaporan Keuangan Bisnis Terintegrasi Cloud</b>
</div>

---

## 📥 Unduh & Instal Aplikasi (APK)
Anda tidak perlu melakukan *compile* kode dari awal. Aplikasi versi final yang sudah lulus uji (*Production Ready*) telah tersedia dan siap dipasang di perangkat Android Anda.

**[👉 KLIK DI SINI UNTUK MENGUNDUH APLIKASI (v1.0.0 APK)](https://github.com/Gaszx/TugasAkhir_AppKeuangan/raw/main/release/Bidadari-ERP-v1.0.apk)**

### 📖 Cara Instalasi Cepat:
1. Klik tautan unduhan di atas untuk mengunduh file `.apk` ke *smartphone* Android Anda.
2. Buka file tersebut. Jika muncul peringatan keamanan, buka Pengaturan dan izinkan **"Install from Unknown Sources"** (*Instal dari Sumber Tidak Dikenal*).
3. Lanjutkan proses instalasi hingga selesai.
4. Buka aplikasi **Bidadari ERP**, masukkan PIN Admin, dan aplikasi siap digunakan!

---

## ✨ Fitur Utama
- **🔐 Keamanan Ganda:** Login tertutup berbasis PIN (6 digit) dengan sistem *Anonymous Auth* dan *Auto-Lock* jika aplikasi ditinggalkan.
- **📊 Dashboard Terpusat:** Menampilkan ringkasan saldo, kas masuk, dan aset lainnya secara instan dan *real-time*.
- **💸 Pencatatan Arus Kas:** Modul CRUD komprehensif untuk *Income* (Pemasukan) dan *Expense* (Pengeluaran).
- **📝 Manajemen Hutang (Debt):** Pelacakan rincian cicilan dan status jatuh tempo hutang ke kreditur.
- **🏢 Multi-Unit Bisnis:** Memantau pendapatan spesifik dari bisnis sampingan (seperti Kontrakan, Air Galon, Kelapa).
- **🖨️ Ekspor Laporan (PDF):** Fitur generator laporan fisik berformat PDF yang bisa langsung diunduh atau dicetak.
- **🌗 Enterprise UI:** Mengusung antarmuka profesional dengan dukungan fitur perpindahan tema otomatis (*Light Mode / Dark Mode*).

---

## 🛠️ Panduan Build dari Kode Sumber (*Source Code*)
Bagi pengembang (*developer*) yang ingin memodifikasi atau merakit ulang aplikasi ini:

1. **Prasyarat (Prerequisites):**
   - Flutter SDK terinstal (Versi 3.x).
   - Node.js & NPM (Opsional, untuk *script* otomatisasi *screenshot*).
   - Kredensial Firebase (`google-services.json` dan `firebase_options.dart`) harus tersedia.

2. **Kloning & Instalasi Repositori:**
   ```bash
   git clone https://github.com/Gaszx/TugasAkhir_AppKeuangan.git
   cd Aplikasi-keuangan
   flutter pub get
   ```

3. **Menjalankan Aplikasi (Mode Debug):**
   ```bash
   flutter run
   ```

4. **Kompilasi APK (Mode Rilis):**
   ```bash
   flutter build apk --release
   ```

---

## 📚 Dokumentasi Teknis Akademik
Untuk membaca rincian struktur data, alur arsitektur, dan laporan *progress* pengembangan proyek ini, silakan akses Laporan Mingguan berikut:

- 📄 **[DOKUMENTASI MINGGU 1: Desain & Konsep Visual](dokumentasi/DOKUMENTASI_MINGGU_1.md)**
- 📄 **[DOKUMENTASI MINGGU 2: Slicing UI & Setup Frontend](dokumentasi/DOKUMENTASI_MINGGU_2.md)**
- 📄 **[DOKUMENTASI MINGGU 3: Logika Bisnis & Firebase DB](dokumentasi/DOKUMENTASI_MINGGU_3.md)**
- 📄 **[DOKUMENTASI MINGGU 4: Pengujian, Optimasi & Deployment](dokumentasi/DOKUMENTASI_MINGGU_4.md)**

---
*Proyek ini dikembangkan secara spesifik untuk memenuhi standar penugasan akademik dan telah memiliki arsitektur yang sanggup diskalakan (scalable) ke tahapan produksi komersial.*
