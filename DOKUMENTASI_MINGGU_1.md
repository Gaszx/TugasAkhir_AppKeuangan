# TUGAS MINGGU 1: Perencanaan dan Desain (Fase Konseptual)

**Nama Proyek:** Aplikasi Bidadari ERP (Manajemen Keuangan)  
**Anggota Kelompok:**
- Bagas Sujiwo (2306018)
- Romy Zaenul Alam (2306019)  
**Mata Kuliah:** Pemrograman Mobile  

---

## 1. Ruang Lingkup (Scope) Keseluruhan

Berdasarkan *source code* dan struktur direktori yang telah diaudit, aplikasi Bidadari ERP adalah sebuah perangkat lunak manajemen keuangan dan aset berskala *Enterprise* yang dirancang secara khusus untuk memantau beragam aliran bisnis. Berikut adalah penjabaran seluruh fitur komprehensif di dalamnya:

1. **Sistem Keamanan Autentikasi Internal (PIN & Auto-Lock)**
   - Fitur *login* tidak menggunakan registrasi terbuka, melainkan sistem tertutup menggunakan validasi PIN 6 digit.
   - Dilengkapi *AuthWrapper* yang secara otomatis mengunci aplikasi (memaksa *logout* atau minta PIN ulang) jika aplikasi ditinggalkan di latar belakang (*background*) lebih dari batas waktu yang ditentukan.
2. **Dashboard Keuangan Terpusat (Dashboard Screen)**
   - Menyajikan *summary* (ringkasan) total arus kas secara *real-time*.
   - Menampilkan statistik kumulatif dari berbagai unit bisnis.
3. **Manajemen Arus Kas Reguler (Income & Expense)**
   - **Pemasukan:** Fitur pencatatan dana masuk (CRUD) melalui antarmuka `income_form_screen.dart`.
   - **Pengeluaran:** Fitur pencatatan beban operasional atau pengeluaran lainnya melalui `expense_form_screen.dart`.
4. **Manajemen Hutang dan Cicilan (Debt Management)**
   - Modul khusus (`debt_form_screen.dart` & `debt_report_screen.dart`) untuk melacak hutang kepada entitas (bank, leasing, individu).
   - Memantau total pinjaman, besaran angsuran, dan melacak status jatuh tempo pelunasan.
5. **Manajemen Multi-Unit Bisnis Sampingan**
   - **Manajemen Kontrakan (`kontrakan_report_screen.dart`):** Melacak status pintu kontrakan (terisi/kosong), rekam jejak identitas penyewa, hingga pemantauan jadwal pembayaran per pintu (menggunakan `door_model.dart`).
   - **Bisnis Air Galon (`galon_report_screen.dart`):** Modul spesifik untuk mencatat dan memantau stok serta pendapatan dari penjualan air galon.
   - **Bisnis Kelapa (`kelapa_report_screen.dart`):** Modul spesifik untuk pencatatan rekapitulasi distribusi atau penjualan produk kelapa.
6. **Sistem Notifikasi Lokal (Local Notifications)**
   - Menggunakan `notification_screen.dart` dan `notification_service.dart` untuk memberikan peringatan dini kepada pemilik terkait jadwal jatuh tempo angsuran hutang atau tagihan penyewa kontrakan.
7. **Modul Ekspor Laporan Fisik (Cetak PDF)**
   - Fitur untuk menghasilkan dokumen laporan transaksi dan *summary* bisnis dalam format berkas PDF (*Portable Document Format*) yang dapat langsung dicetak atau dibagikan.
8. **Kustomisasi Tema (Enterprise UI - Light/Dark Mode)**
   - Sistem perpindahan tema (*light/dark*) yang diatur secara sentral di `theme_provider.dart` agar nyaman digunakan dalam kondisi pencahayaan apa pun.

---

## 2. Pemilihan Tech Stack Keseluruhan

Arsitektur perangkat lunak dibangun menggunakan kombinasi teknologi modern agar aplikasi bersifat lintas platform (Android, iOS, Web) dan dapat diandalkan kinerjanya. Berdasarkan audit pada file `pubspec.yaml`, *tech stack* yang digunakan adalah:

### **A. Framework & Bahasa Pemrograman**
- **Flutter SDK (>=3.3.0):** *Framework* utama berbasis UI untuk membangun aplikasi multi-platform.
- **Dart:** Bahasa pemrograman di balik Flutter yang mengeksekusi logika secara asinkronus dan kuat dalam paradigma OOP.

### **B. Sistem Backend & Database (BaaS)**
- **Firebase Core (`firebase_core: ^2.24.2`):** Jembatan penghubung utama antara Flutter dan ekosistem Google Cloud.
- **Firebase Authentication (`firebase_auth: ^4.17.8`):** Menangani sesi *Anonymous Login* di belakang layar tanpa mengharuskan input *email* dari pengguna.
- **Cloud Firestore (`cloud_firestore: ^4.15.8`):** Basis data relasional dokumen (NoSQL) yang menyimpan seluruh objek keuangan (Pemasukan, Pengeluaran, Hutang, Kontrakan) secara *real-time*.

### **C. State Management**
- **Provider (`provider: ^6.1.1`):** Digunakan untuk menyuntikkan dan memantau pembaruan UI (melalui `ChangeNotifier`) agar aplikasi merespons perubahan data seketika tanpa harus melakukan *rebuild* keseluruhan halaman. Proyek ini menggunakan 3 lapisan *provider*: `AuthProvider`, `FinanceProvider`, dan `ThemeProvider`.

### **D. Package & Library Krusial Lainnya**
- **Sistem Cetak & Ekspor PDF:** Menggunakan *library* `pdf (^3.11.0)` sebagai mesin (*engine*) perakit dokumen dan `printing (^5.12.0)` untuk menjembatani sistem cetak sistem operasi (*print spooler*).
- **Manajemen Notifikasi & Waktu:** Menggunakan `flutter_local_notifications (^17.0.0)` untuk memunculkan peringatan sistem (UI lokal) dan `timezone (^0.9.2)` untuk menghitung penjadwalan secara presisi berdasarkan zona waktu lokal.
- **UI & Formatting:**
  - `google_fonts (^6.1.0)`: Memasok fon *Enterprise* profesional (seperti PlusJakartaSans/Poppins).
  - `shimmer (^3.0.0)`: Memberikan efek *loading* animasi tulang punggung (skeleton) yang elegan saat data sedang ditarik dari awan.
  - `intl (^0.18.1)`: Mengatur *parsing* mata uang menjadi format Rupiah standar secara konsisten.
- **Penyimpanan Lokal (Cache):** Menggunakan `shared_preferences (^2.2.2)` untuk menyimpan *state* sementara di memori perangkat, serta `path_provider (^2.1.2)` untuk mencari direktori aman tempat hasil unduhan file PDF bersemayam.

---

## 3. Desain Struktur Data & Alur Logika (Flowchart)

Visualisasi di bawah ini menggambarkan alur dari ujung ke ujung (*End-to-End*) yang sangat akurat dengan logika asinkronus sistem.

```mermaid
graph TD
    %% 1. Inisiasi Aplikasi
    A([Icon Aplikasi Ditekan]) --> B[Memuat SplashScreen & Inisialisasi Firebase]
    B --> C{AuthWrapper / Observer <br/> Mengecek Lifecycle & Sesi}
    
    %% 2. Skenario Gagal Sesi / Locked
    C -- "Sesi Kosong / App Ditinggalkan > 3 Menit" --> D[LoginScreen]
    D --> E[/Input PIN 6 Digit/]
    E --> F[Memanggil Provider: auth.login()]
    F --> G[Firebase Auth: signInAnonymously]
    G --> H{Cek ID PIN di <br/> Firestore: 'admins/admin_id'}
    
    H -- Tidak Ditemukan --> I[Tolak Akses & Tampilkan SnackBar Error]
    I --> D
    
    %% 3. Skenario Masuk Sistem
    H -- Cocok --> J[Simpan Sesi ke SharedPreferences]
    J --> K
    C -- "Sesi Aktif & Valid" --> K([MainLayout / Dashboard])
    
    %% 4. Eksekusi Dalam Aplikasi
    K --> L{Navigasi Utama <br/> (BottomNavBar/Menu)}
    
    %% 4A. Modul Dashboard Utama
    L -- Tab Dashboard --> M1[DashboardScreen]
    M1 --> N1[Menarik Data Kumulatif dari FinanceProvider]
    N1 --> O1[Menampilkan Chart & Ringkasan Saldo]
    
    %% 4B. Modul Arus Kas Biasa
    L -- Tab Income/Expense --> M2[Income / Expense Form]
    M2 --> N2[/User Input: Nominal, Tipe, Catatan/]
    N2 --> O2{Operasi CRUD Database}
    
    %% 4C. Modul Manajemen Hutang & Cicilan
    L -- Tab Debt --> M3[DebtReportScreen]
    M3 --> N3[Memantau Tanggal Jatuh Tempo via NotificationService]
    N3 --> O2
    
    %% 4D. Modul Manajemen Aset Sampingan
    L -- Tab Unit Bisnis --> M4[Kontrakan / Galon / Kelapa Report]
    M4 --> N4[/Ubah Status Pintu & Stok/]
    N4 --> O2
    
    %% 5. Pusat Operasi Cloud
    O2 -- CREATE/UPDATE/DELETE --> P[(Firebase Cloud Firestore)]
    O2 -- READ Real-time --> P
    
    %% 6. Pembuatan Laporan Fisik
    P --> Q{Request Cetak Laporan}
    Q -- Ya --> R[Generate PDF via package:pdf]
    R --> S[Tampilkan Preview & Download/Print]
    Q -- Tidak --> K
```
