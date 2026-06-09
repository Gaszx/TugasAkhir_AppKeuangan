# Laporan Progres Tugas Akhir - Minggu 2
**Fase:** Pengembangan Frontend (Fase Antarmuka)

Dalam pengerjaan minggu kedua ini, fokus utama kami adalah mentranslasikan rancangan desain konseptual dari minggu pertama menjadi kode pemrograman nyata. Kami menggunakan *framework* Flutter untuk membangun fondasi antarmuka yang solid, interaktif, dan terstruktur.

Berikut adalah rincian pengerjaan dan pencapaian kami di minggu ini:

## 1. Setup Proyek & Manajemen Repositori
Langkah pertama yang kami lakukan adalah menginisiasi proyek Flutter versi terbaru dan langsung mengamankannya menggunakan *Version Control System* (Git). Repositori proyek kami *hosting* di GitHub untuk memastikan keamanan *source code* dan mempermudah proses kolaborasi serta *tracking* perubahan antar anggota kelompok.

Untuk menjaga agar *codebase* tetap bersih (*clean code*), kami langsung mendefinisikan struktur folder proyek di dalam direktori `lib/`. Kami memisahkan file berdasarkan fungsinya ke dalam folder `screens` (antarmuka), `widgets` (komponen UI yang bisa dipakai ulang), `providers` (manajemen *state*), `models` (struktur data), dan `services` (logika *backend*).

## 2. Integrasi Aset Visual & Tipografi
Sebelum melakukan *coding* tampilan, kami perlu memastikan semua aset visual sudah siap dipanggil oleh sistem:
- **Logo & Gambar:** Memasukkan logo utama aplikasi (`logo_bidadari.png` dan variannya) ke dalam direktori `aset/` dan meregistrasikannya secara manual di dalam file konfigurasi `pubspec.yaml`.
- **Tipografi Utama:** Kami menggunakan Google Fonts untuk memberikan kesan *Enterprise* yang rapi. Konfigurasi font ini kami satukan ke dalam file `lib/providers/theme_provider.dart` (*ThemeData* global), sehingga jika nanti ada perubahan jenis huruf, kami cukup mengubahnya di satu tempat saja tanpa harus membongkar seluruh halaman.

## 3. Slicing UI (Implementasi Desain ke Kode)
Fase *slicing* ini adalah bagian yang memakan waktu cukup banyak di minggu kedua. Kami bekerja ekstra untuk memastikan tata letak (*layout*), warna, *margin*, dan *padding* di dalam kode Flutter benar-benar akurat dan sesuai dengan *mockup* awal. 

Walaupun datanya masih berupa data *dummy* statis, secara visual aplikasi sudah sepenuhnya terbentuk. Semua tombol, kolom input form, dan kartu informasi sudah dirender dengan rapi.

Berikut adalah beberapa hasil *slicing* halaman utama aplikasi kami:

<table border="0" width="100%" style="text-align: center; border-collapse: collapse; border: none;">
  <tr style="page-break-inside: avoid;">
    <td width="50%" style="border: none; padding: 10px; vertical-align: top;">
      <img src="../aset/screenshot/Dark_01_LoginScreen.png" width="190" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"><br><br>
      <b style="font-size: 14px;">Halaman Login (PIN)</b>
    </td>
    <td width="50%" style="border: none; padding: 10px; vertical-align: top;">
      <img src="../aset/screenshot/Dark_02_DashboardScreen.png" width="190" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"><br><br>
      <b style="font-size: 14px;">Halaman Dashboard Utama</b>
    </td>
  </tr>
  <tr style="page-break-inside: avoid;">
    <td width="50%" style="border: none; padding: 10px; vertical-align: top;">
      <img src="../aset/screenshot/Dark_06_IncomeFormScreen.png" width="190" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"><br><br>
      <b style="font-size: 14px;">Form Input Pemasukan</b>
    </td>
    <td width="50%" style="border: none; padding: 10px; vertical-align: top;">
      <img src="../aset/screenshot/Dark_09_DebtReportScreen.png" width="190" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"><br><br>
      <b style="font-size: 14px;">Laporan Rekap Utang</b>
    </td>
  </tr>
</table>

## 4. Sistem Navigasi (Routing)
Untuk menghidupkan antarmuka statis tersebut, kami merancang alur perpindahan antar halaman (*routing*). Di dalam file `lib/main.dart`, kami menggunakan teknik navigasi terpusat atau **Named Routes** (seperti pemetaan `'/login'`, `'/dashboard'`, `'/income_form'`). Pendekatan ini membuat perpindahan antarmuka jauh lebih rapi dibanding melakukan pemanggilan *push* secara manual di setiap tombol.

Kami juga berhasil menyematkan **Bottom Navigation Bar** yang mengikat halaman beranda, laporan kelapa, galon, dan kontrakan di dalam satu wadah (*Main Layout*). Pengguna kini bisa melompat dari satu laporan ke laporan lain hanya dengan menyentuh ikon di menu bawah dengan transisi yang sangat mulus tanpa *loading screen* yang mengganggu.

---

**Kesimpulan Minggu 2:**  
Fase *Frontend* telah rampung dan berjalan sesuai ekspektasi. Cangkang aplikasi kini sudah berdiri kokoh, responsif, dan siap untuk disuntikkan "nyawa" (berupa logika bisnis, integrasi database Firebase, dan *State Management*) pada agenda pengerjaan di minggu ketiga.
