# AppKeuangan

**Tugas Akhir Mata Kuliah Pemrograman Mobile**

Aplikasi **AppKeuangan** adalah sebuah perangkat lunak manajemen keuangan dan pencatatan aset berskala *Enterprise* yang dirancang untuk memantau berbagai aliran bisnis secara *real-time*. Proyek ini dibangun menggunakan **Flutter** untuk antarmuka lintas platform, dan **Firebase** (Firestore & Authentication) untuk layanan basis data dan keamanan.

## Anggota Kelompok
1. **Bagas Sujiwo** (2306018)
2. **Romy Zaenul Alam** (2306019)

---

## Fitur Utama
- **Keamanan Ganda:** Login tertutup berbasis PIN (6 digit) dengan sistem *Anonymous Auth* dan *Auto-Lock* jika aplikasi ditinggalkan (berada di latar belakang lebih dari durasi tertentu).
- **Dashboard Terpusat:** Menampilkan *summary* ringkasan saldo, kas masuk, dan aset lainnya secara instan.
- **Pencatatan Arus Kas:** Modul CRUD komprehensif untuk *Income* (Pemasukan) dan *Expense* (Pengeluaran).
- **Manajemen Hutang (Debt):** Pelacakan rincian cicilan dan status jatuh tempo hutang ke kreditur.
- **Multi-Unit Bisnis:** Memantau pendapatan spesifik dari bisnis sampingan (seperti Kontrakan, Air Galon, Kelapa).
- **Ekspor Laporan (Cetak PDF):** Fitur generator laporan fisik berformat PDF yang bisa langsung diunduh atau dicetak.
- **Enterprise UI:** Mengusung antarmuka profesional dengan dukungan fitur perpindahan tema otomatis (*Light Mode / Dark Mode*).

## Dokumentasi Teknis
Untuk membaca rincian struktur data dan melihat visualisasi logika sistem (Flowchart), silakan baca file pendukung:
- `DOKUMENTASI_MINGGU_1.md` (Terletak di direktori utama).

---
*Proyek ini dikembangkan secara spesifik untuk memenuhi standar penugasan akademik dan siap untuk dikembangkan (*scalable*) ke tahapan produksi.*
