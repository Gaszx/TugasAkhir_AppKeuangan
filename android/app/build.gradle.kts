plugins {
    id("com.android.application")
    id("com.google.gms.google-services")
    id("kotlin-android")
    id("dev.flutter.flutter-gradle-plugin")
}

android {
    namespace = "com.example.manajemen_keuangan"
    // TURUNKAN KE 34: Angka paling stabil untuk semua library Flutter saat ini
    compileSdk = 34 
    ndkVersion = flutter.ndkVersion

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
        isCoreLibraryDesugaringEnabled = true
    }

    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_17.toString()
    }

    defaultConfig {
        applicationId = "com.example.manajemen_keuangan"
        minSdk = 24 // Tetap 24 agar Firebase & PDF lancar
        targetSdk = 34
        versionCode = flutter.versionCode
        versionName = flutter.versionName
    }

    buildTypes {
        release {
            signingConfig = signingConfigs.getByName("debug")
        }
    }
}

flutter {
    source = "../.."
}

dependencies {
    // Mesin utama untuk API waktu
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.0.3")
    
    // HAPUS SEMUA JURUS LSTAR SEBELUMNYA. 
    // Biarkan Flutter & Android mengatur dependensinya secara otomatis.
}