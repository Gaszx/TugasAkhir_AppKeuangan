# TUGAS MINGGU 3: Logika Bisnis dan Integrasi Data (Fase Dinamis)

**Nama Proyek:** Aplikasi Manajemen Keuangan  
**Anggota Kelompok:**
- Bagas Sujiwo (2306018)
- Romy Zaenul Alam (2306019) 
- Firman Nur Hakim (2305107) 

**Mata Kuliah:** Pemrograman Mobile  

---

## 1. Manajemen State (State Management)
Untuk mengatur aliran pergerakan data uang yang kompleks antar-halaman, kami menggunakan pustaka **Provider** (`ChangeNotifier`). Pendekatan ini membuat pembaruan antarmuka (grafik, saldo, tabel) berjalan sangat cepat tanpa membebani performa *smartphone*.

**Cuplikan `finance_provider.dart`:**
```dart
class FinanceProvider extends ChangeNotifier {
  List<Transaction> _transactions = [];
  
  // Fungsi otomatis memicu pembaruan seluruh layar (re-render) 
  // saat ada perubahan uang kas
  void _notifyListenersAndSave() {
    notifyListeners();
  }
}
```

## 2. Integrasi Backend (Database Cloud)
Aplikasi kami telah mengudara secara *online*. Kami menggunakan **Firebase Cloud Firestore** dari Google sebagai infrastruktur *Backend-as-a-Service* (BaaS) untuk menyimpan data transaksi secara *real-time* dan persisten.

**Inisialisasi Firebase di `main.dart`:**
```dart
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const BidadariERPApp());
}
```

## 3. Implementasi Fungsi CRUD 
Fungsi logika bisnis telah terhubung sepenuhnya dengan antarmuka. Kini pengguna bisa membuat (*Create*), membaca (*Read*), mengubah (*Update*), dan menghapus (*Delete*) data pemasukan, pengeluaran, dan utang.

**Logika Penambahan Transaksi (Create):**
```dart
Future<void> addTransaction(Transaction transaction) async {
  try {
    // 1. Simpan ke Firebase Cloud
    await _firestore.collection('transactions')
        .doc(transaction.id).set(transaction.toMap());
    
    // 2. Simpan ke State Lokal
    _transactions.add(transaction);
    notifyListeners();
  } catch (e) {
    print('Gagal menambah transaksi: $e');
  }
}
```

<div align="center">
  <img src="../aset/screenshot/Dark_06_IncomeFormScreen.png" width="200" style="border-radius: 12px; margin: 15px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <br><i style="font-size: 13px;">Gambar: Form Input Transaksi yang sudah terhubung ke Cloud Database.</i>
</div>

## 4. Penanganan Error Dasar (Error Handling)
Untuk memastikan *User Experience* (UX) tidak terganggu saat terjadi kegagalan sistem (seperti input kosong atau internet putus), kami menerapkan perlindungan validasi ketat disertai notifikasi *pop-up* bawah (*Snackbar*).

**Sistem Peringatan UX:**
```dart
// Memunculkan peringatan merah jika nominal salah/kosong
ScaffoldMessenger.of(context).showSnackBar(
  const SnackBar(
    content: Text('Error: Harap isi semua form dengan benar!'),
    backgroundColor: Colors.redAccent,
    behavior: SnackBarBehavior.floating,
  ),
);
```

<div align="center">
  <img src="../aset/screenshot/Dark_10_NotificationScreen.png" width="200" style="border-radius: 12px; margin: 15px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <br><i style="font-size: 13px;">Gambar: Pusat log aktivitas dan peringatan keamanan sistem.</i>
</div>

---

**Kesimpulan Minggu 3:**  
Aplikasi Bidadari ERP kini telah memiliki "otak". Seluruh antarmuka tidak lagi memunculkan data statis (*dummy*), melainkan sudah menarik dan mengolah data langsung secara *real-time* dari *server* Firebase, dengan manajemen sirkulasi keuangan yang akurat.
