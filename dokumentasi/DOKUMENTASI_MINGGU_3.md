# TUGAS MINGGU 3: Logika Bisnis dan Integrasi Data (Fase Dinamis)

**Nama Proyek:** Aplikasi Manajemen Keuangan  
**Anggota Kelompok:**
- Bagas Sujiwo (2306018)
- Romy Zaenul Alam (2306019) 
- Firman Nur Hakim (2305107) 

**Mata Kuliah:** Pemrograman Mobile  

---

## 1. Manajemen State (State Management)
Alih-alih menggunakan pengiriman data manual antar halaman yang rumit, kami merancang arsitektur **Provider** (`ChangeNotifier`) agar data keuangan tersinkronisasi secara otomatis di seluruh sudut aplikasi tanpa harus me-*reload* layar.

```mermaid
graph LR
    A[Database / Firebase] -->|Menarik Data| B(FinanceProvider)
    B -->|State Berubah| C{Update UI Otomatis}
    C --> D[Dashboard Utama]
    C --> E[Laporan Kelapa]
    C --> F[Laporan Galon & Kontrakan]
```

## 2. Integrasi Backend (Database Cloud)
Aplikasi kami telah mengudara secara *online*. Infrastruktur penyimpanan data tidak lagi berupa statis, melainkan ditenagai penuh oleh **Firebase Cloud Firestore**.

```mermaid
graph TD
    A[Aplikasi Bidadari ERP] <-->|Real-time Sync| B((Firebase Firestore))
    B --> C[(Koleksi: Transaksi)]
    B --> D[(Koleksi: Pintu Kontrakan)]
```

## 3. Implementasi Fungsi CRUD (Create, Read, Update, Delete)
Fungsi logika bisnis telah terhubung 100%. Pengguna dapat menginput transaksi baru secara nyata (*Create*), dan hasilnya akan langsung terkalkulasi lalu dirender pada halaman laporan (*Read*).

<table border="0" width="100%" style="text-align: center; border-collapse: collapse; border: none;">
  <tr>
    <td width="50%" style="border: none; padding: 10px; vertical-align: top;">
      <img src="../aset/screenshot/Dark_06_IncomeFormScreen.png" width="180" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"><br><br>
      <b style="font-size: 14px;">1. Form Input (Create)</b>
    </td>
    <td width="50%" style="border: none; padding: 10px; vertical-align: top;">
      <img src="../aset/screenshot/Dark_03_KelapaReportScreen.png" width="180" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"><br><br>
      <b style="font-size: 14px;">2. Hasil Laporan (Read)</b>
    </td>
  </tr>
</table>

## 4. Penanganan Error Dasar (Error Handling)
Untuk memberikan pengalaman pengguna (*User Experience*) terbaik, seluruh aksi diamankan oleh validasi ketat. Aplikasi akan memberikan umpan balik (*feedback*) instan melalui **Snackbar Pop-up** tanpa harus berpindah halaman.

<div align="center">
  <img src="../aset/screenshot/snackbar_success.png" width="350" style="border-radius: 10px; margin: 15px 0 5px 0; box-shadow: 0 6px 12px rgba(0,0,0,0.2);">
  <br><i style="font-size: 13px;">Gambar: Pop-up konfirmasi (sukses) saat data masuk ke Firebase.</i>
  
  <br><br>

  <img src="../aset/screenshot/snackbar_error.png" width="350" style="border-radius: 10px; margin: 10px 0 5px 0; box-shadow: 0 6px 12px rgba(0,0,0,0.2);">
  <br><i style="font-size: 13px;">Gambar: Pop-up peringatan (error) jika input form tidak lengkap.</i>
</div>

---

**Kesimpulan Minggu 3:**  
Sistem aplikasi telah menjadi dinamis seutuhnya. Arsitektur data telah terbentuk sempurna berkat kombinasi *Provider* dan *Firebase*, menghasilkan pergerakan pencatatan uang yang akurat dan interaktif.
