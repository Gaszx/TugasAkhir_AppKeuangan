🤖 KONTROL CORE DAN KONSTITUSI PROYEK (GEMINI.MD)
•	File ini adalah Sumber Kebenaran (Source of Truth) absolut.
•	Aturan di dalam dokumen ini bersifat statis dan mengikat untuk setiap baris kode yang dihasilkan AI.
•	Jangan abaikan atau modifikasi aturan ini tanpa instruksi eksplisit.

1. IDENTITAS PROYEK DAN TECH STACK
•	Nama Proyek: [ISI_NAMA_PROYEK]
•	Tujuan Utama: [DESKRIPSI_TUJUAN_APLIKASI]
•	Lingkungan Frontend: [Contoh: HTML5 + Tailwind / Flutter 3.x / Vue.js]
•	Lingkungan Backend: [Contoh: PHP Native 8.x / Dart / Node.js]
•	Database System: [Contoh: MySQL 8.0 / Firebase]
•	Konsep Tema UI/UX: [Contoh: Dark Mode / Glassmorphism / Cyberpunk]
•	Design System Tool: Figma (Akurasi visual wajib mengikuti instruksi desain).

2. STRUKTUR DIREKTORI PROYEK (TEMPLATE)
•	Peta direktori di bawah ini adalah acuan utama lokasi file.
•	Selalu sesuaikan jalur impor (import path) dan referensi antar-file berdasarkan peta ini.
[TEMPEL_STRUKTUR_TREE_FOLDER_DI_SINI_SAAT_MEMULAI_PROYEK]

3. GLOBAL "DO NOT" (BATASAN KETAT AI)
•	JANGAN menulis baris kode apapun sebelum memberikan 1-2 kalimat penjelasan logis tentang pendekatan yang akan digunakan.
•	JANGAN mengarang atau menciptakan elemen antarmuka (UI) di luar spesifikasi desain yang diberikan.
•	JANGAN pernah melakukan hardcode pada data sensitif (API Keys, Password Database, URL rahasia); wajib menggunakan environment variables (contoh: .env).
•	JANGAN menghapus, mengubah nama file, atau melakukan perubahan destruktif tanpa konfirmasi.
•	JANGAN menyertakan pustaka (library/package) pihak ketiga di luar Tech Stack utama tanpa persetujuan.

4. STANDAR ARSITEKTUR DAN PENULISAN KODE
•	Pola Arsitektur: [Pilih: MVC / Clean Architecture / Modular Component].
•	Prinsip Clean Code: Pastikan setiap fungsi hanya memiliki satu tanggung jawab (Single Responsibility Principle) dan terdokumentasi dengan baik.
•	Penamaan Class & Model: Wajib menggunakan PascalCase.
•	Penamaan Variabel & Fungsi: Wajib menggunakan camelCase.
•	Penamaan Database (Tabel & Kolom): Wajib menggunakan snake_case.
•	Penamaan File: [Pilih: kebab-case / snake_case].
•	Manajemen State: Gunakan metode pembaruan antarmuka yang paling efisien, hindari re-render keseluruhan halaman atau kanvas jika tidak perlu.

5. STANDAR TRANSLASI UI/UX
•	Akurasi Desain: Terjemahkan dimensi (margin, padding), tipografi, dan warna secara presisi hingga tingkat piksel.
•	Konsistensi Tema: Gunakan variabel global untuk warna dan gaya, jangan menuliskan kode warna hex/rgb secara berulang di setiap komponen.
•	Responsivitas: Wajib mendesain tata letak dengan pendekatan Mobile-First (untuk web) atau layout fleksibel (untuk mobile).
•	Inisiatif UX (Wajib): Ingatkan pengembang jika ada state yang terlupakan (contoh: Loading state, Error handling message, Empty state pada tabel/daftar, Hover effect).

6. STANDAR KEAMANAN DAN VALIDASI DATA
•	Proteksi Database: Wajib menggunakan Prepared Statements (PDO/MySQLi) untuk seluruh eksekusi query guna mencegah SQL Injection.
•	Proteksi Antarmuka: Sanitasi seluruh input dari pengguna dan output ke layar untuk mencegah serangan XSS.
•	Validasi Input: Lakukan validasi ganda pada setiap form (Validasi antarmuka di sisi Client dan logika ketat di sisi Server).
•	Autentikasi: Password wajib di-hash (contoh: Bcrypt), dilarang keras menyimpan password dalam bentuk plaintext.

7. PROTOKOL GIT DAN WORKFLOW
•	Pengingat Commit: AI wajib memberikan pengingat untuk menjalankan komit Git setiap kali satu fitur krusial atau perbaikan bug berhasil berjalan stabil.
•	Format Pesan Komit: Wajib menggunakan Semantic Commits.
o	Awalan feat: untuk penambahan fitur baru.
o	Awalan fix: untuk perbaikan bug atau error.
o	Awalan ui: untuk penyesuaian tata letak antarmuka atau styling.
o	Awalan refactor: untuk restrukturisasi kode tanpa mengubah fungsionalitas.

8. PROTOKOL FAIL-SAFE (PENANGANAN AMBIGUITAS)
•	Wajib Bertanya: Jika instruksi yang diberikan memiliki arti ganda, bertentangan dengan arsitektur saat ini, atau berisiko merusak sistem, AI wajib menghentikan proses coding.
•	Format Bertanya: "Terdapat ambiguitas/risiko pada instruksi Anda terkait [Sebutkan Masalah]. Apakah kita akan menggunakan opsi [A] atau opsi [B]?"

