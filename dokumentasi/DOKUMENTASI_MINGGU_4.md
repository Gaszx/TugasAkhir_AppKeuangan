# TUGAS MINGGU 4: Pengujian, Optimasi, dan Deployment (Fase Final)

**Nama Proyek:** Aplikasi Manajemen Keuangan  
**Anggota Kelompok:**
- Bagas Sujiwo (2306018)
- Romy Zaenul Alam (2306019) 
- Firman Nur Hakim (2305107) 

**Mata Kuliah:** Pemrograman Mobile  

---

## 1. Pengujian Sistem Menyeluruh (End-to-End Testing)
Pada minggu terakhir ini, aplikasi kami telah melewati proses *Quality Control* (QC) yang sangat ketat. Kami memastikan aplikasi ini "Tahan Banting" dengan menguji 3 pilar utama sistem:

### A. Pengujian Keamanan & Autentikasi (LULUS ✅)
Sistem *Login* kami mendemonstrasikan ketahanan mutlak. Pengguna tanpa PIN yang valid tidak dapat menembus ke dalam *Dashboard*. Selain itu, jika aplikasi ditinggalkan dalam keadaan terbuka (*minimize*), sistem pendeteksi latar belakang akan mengunci layar secara otomatis (*Auto-Lock*) demi melindungi privasi finansial.

<div align="center">
  <img src="../aset/screenshot/Dark_01_LoginScreen.png" width="250" style="border-radius: 8px; margin: 10px 0; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
  <br><i style="font-size: 13px;">Gambar: Gerbang keamanan utama berbasis PIN 6-digit.</i>
</div>

### B. Pengujian Algoritma Kalkulator Gaji (LULUS ✅)
Sistem kalkulasi pendapatan diuji untuk akurasi presisi tinggi. Sebagai contoh, ketika pendapatan Kotor (Bruto) sebesar **Rp 100.000** diinputkan pada form penjualan Kelapa, sistem seketika memotong gaji karyawan (15%) sebesar Rp 15.000, sehingga laba bersih (Netto) terekam persis **Rp 85.000**.

<div align="center">
  <img src="../aset/screenshot/Dark_06_IncomeFormScreen.png" width="250" style="border-radius: 8px; margin: 10px 0; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
  <br><i style="font-size: 13px;">Gambar: Skenario uji kalkulasi potongan gaji terotomatisasi.</i>
</div>

### C. Pengujian Responsivitas Multi-Layar (LULUS ✅)
Aplikasi dibangun menggunakan arsitektur antarmuka yang fleksibel. Saat diuji pada ukuran layar ekstra besar (seperti *Tablet* beresolusi 1024x768), tata letak beradaptasi secara elegan tanpa adanya distorsi gambar atau layar yang terpotong (*Pixel Overflow*).

<div align="center">
  <img src="../aset/screenshot/test_responsive_tablet.png" width="550" style="border-radius: 8px; margin: 10px 0; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
  <br><i style="font-size: 13px;">Gambar: Pengujian antarmuka pada simulasi layar Tablet/iPad.</i>
</div>

### D. Konfirmasi Pengujian Otomatis Terminal
Selain uji coba manual, kelima instrumen sistem juga dites secara simultan oleh mesin *Automated Testing* dan memberikan hasil lulus sempurna (Passed).

<div align="center">
  <img src="../aset/screenshot/qa_test_report.png" width="550" style="border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
  <br><i style="font-size: 13px;">Gambar: Output terminal mesin pengujian otomatis.</i>
</div>

---

## 2. Operasi Penambalan Bug (Bug Fixing)
Selama proses integrasi tahap akhir, tim kami secara kolaboratif membasmi anomali (*bugs*) pada tatanan antarmuka dan *cache*. Beberapa perbaikan krusial meliputi sinkronisasi letak gambar, perbaikan ruang kosong (*whitespace*) pada sistem *Export PDF*, dan pembersihan file sampah agar *size* repositori menjadi ringan.

Berikut adalah log bukti forensik kolaborasi (*Real Commit History*) repositori kami di Github:

<div align="center">
  <img src="../aset/screenshot/git_commits.png" width="550" style="border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
  <br><i style="font-size: 13px;">Gambar: Rekam log nyata dari kontribusi penambalan kode tim.</i>
</div>

---

## 3. Kompilasi & Rilis Instaler (Build & Deployment)
Memasuki tahap purna-produksi, *source code* dikompilasi (di-Build) dengan menargetkan platform Android. Berbekal mesin *Flutter Release Compiler*, aplikasi ini disulap dari susunan kode mentah menjadi sebuah instaler (APK) yang sangat optimal.

<div align="center">
  <img src="../aset/screenshot/terminal_build.png" width="550" style="border-radius: 8px; margin: 15px 0 5px 0; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
  <br><i style="font-size: 13px;">Gambar: Visualisasi detik-detik proses kompilasi APK.</i>
</div>

---

## 4. Tautan UNDUHAN Aplikasi (Direct Download)
Untuk memudahkan tim penguji, kami menyediakan **tautan publik absolut** yang memastikan Anda dapat mengunduh dan menginstal instaler `.apk` Bidadari ERP dengan sekali klik, baik melalui peramban web maupun langsung dari dokumen PDF ini.

**🔗 TAUTAN TEKS ALTERNATIF (ANTI-GAGAL):**  
> **[📥 KLIK DI SINI: UNDUH APLIKASI BIDADARI ERP (app-release.apk)](https://github.com/Gaszx/TugasAkhir_AppKeuangan/raw/main/build/app/outputs/flutter-apk/app-release.apk)**

<div align="center">
  <a href="https://github.com/Gaszx/TugasAkhir_AppKeuangan/raw/main/build/app/outputs/flutter-apk/app-release.apk">
    <img src="../aset/screenshot/apk_download_banner.png" width="600" style="border-radius: 12px; margin: 15px 0 5px 0; box-shadow: 0 6px 15px rgba(0,0,0,0.4); cursor: pointer;">
  </a>
  <br><i style="font-size: 13px;">(Banner Interaktif: Sentuh/klik grafis di atas untuk mulai mengunduh APK)</i>
</div>

---

## 5. Dokumentasi Landing Page (README)
Puncak dari arsitektur *Software Engineering* kelompok kami bermuara pada file `README.md`. Repositori proyek kami tidak terlihat seperti penugasan konvensional, melainkan telah kami dandani seperti *Landing Page* perusahaan teknologi (*Startup*) modern.

<div align="center">
  <img src="../aset/screenshot/readme_preview.png" width="600" style="border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
  <br><i style="font-size: 13px;">Gambar: Pratinjau repositori Github yang menampilkan panduan Instalasi dan Unduhan Cepat.</i>
</div>

---

**Kesimpulan Akhir Proyek:**  
Pembangunan "Aplikasi Manajemen Keuangan Bidadari ERP" dinyatakan **RAMPUNG 100%**. Seluruh tahapan perancangan UI/UX (Minggu 1), translasi Frontend (Minggu 2), penyuntikan Logika Firebase Cloud (Minggu 3), hingga Pengujian Mutu dan Kompilasi APK (Minggu 4) telah dieksekusi dengan presisi industri tinggi. Proyek ini resmi diselesaikan dan **siap untuk dideklarasikan dalam sidang presentasi akhir**.
