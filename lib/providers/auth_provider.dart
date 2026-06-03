import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

// Definisi Jabatan
enum UserRole { superadmin, admin }

class AuthProvider extends ChangeNotifier {
  // --- KONEKSI KE FIREBASE ---
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  UserRole? _currentRole;
  String? _currentUserName;

  UserRole? get currentRole => _currentRole;

  // Mengambil nama user yang sedang login, jika null maka tampilkan 'GUEST'
  String get currentUserName => _currentUserName ?? 'GUEST';

  bool get isAuthenticated => _currentRole != null;

  // --- FUNGSI LOGIN (CLOUD-BASED) ---
  Future<bool> login(String pin) async {
    try {
      // 1. Aplikasi "bertanya" ke Firebase: Ada tidak PIN ini di koleksi 'admins'?
      final snapshot = await _db
          .collection('admins')
          .where('pin', isEqualTo: pin)
          .limit(1) // Ambil 1 saja agar cepat
          .get();

      if (snapshot.docs.isNotEmpty) {
        // 2. Jika PIN Cocok & Ditemukan!
        final adminData = snapshot.docs.first.data();

        // 3. Simpan Nama
        _currentUserName = adminData['name'] ?? 'Admin Tanpa Nama';

        // 4. Konversi Role dari Database (String) menjadi Enum (UserRole)
        final String roleString = adminData['role'] ?? 'admin';
        if (roleString.toLowerCase() == 'superadmin') {
          _currentRole = UserRole.superadmin;
        } else {
          _currentRole = UserRole.admin;
        }

        notifyListeners();
        return true; // Login sukses, gembok terbuka!
      } else {
        // Jika PIN salah / tidak ditemukan di database
        return false;
      }
    } catch (e) {
      debugPrint("Error sistem saat cek PIN di Cloud: $e");
      return false;
    }
  }

  // --- FUNGSI LOGOUT ---
  Future<void> logout() async {
    _currentRole = null;
    _currentUserName = null;
    notifyListeners();
  }

// --- CEK STATUS LOGIN & LOGIN SILUMAN MESIN ---
  Future<void> checkAuthStatus() async {
    try {
      // Mesin otomatis melakukan login rahasia ke Firebase
      await FirebaseAuth.instance.signInAnonymously();
      debugPrint("Sistem Keamanan Mesin Aktif!");
      
      // Panggil Seeder SETELAH login anonim berhasil agar lolos Firestore Rules
      await _seedAdminPins();
    } catch (e) {
      debugPrint("Gagal mengaktifkan keamanan mesin: $e");
    }

    notifyListeners();
  }

  // --- DATABASE SEEDER ---
  Future<void> _seedAdminPins() async {
    try {
      final admins = _db.collection('admins');

      await admins.doc('admin1').set({
        'pin': '111111',
        'name': 'Super Admin',
        'role': 'superadmin',
      }, SetOptions(merge: true));

      await admins.doc('admin2').set({
        'pin': '222222',
        'name': 'Admin Dua',
        'role': 'admin',
      }, SetOptions(merge: true));

      await admins.doc('admin3').set({
        'pin': '333333',
        'name': 'Admin Tiga',
        'role': 'admin',
      }, SetOptions(merge: true));

      debugPrint('Database Seeder: 3 PIN Admin berhasil di-seed (Aman)!');
    } catch (e) {
      debugPrint('Database Seeder Error: $e');
    }
  }
}
