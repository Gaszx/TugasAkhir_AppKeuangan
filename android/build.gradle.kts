allprojects {
    repositories {
        google()
        mavenCentral()
    }
    
    // ==========================================================
    // DEKRIT GLOBAL: MEMAKSA SEMUA PLUGIN TANPA TERKECUALI
    // Mengunci library inti ke versi stabil yang bebas dari error lStar
    // ==========================================================
    configurations.all {
        resolutionStrategy {
            force("androidx.core:core:1.6.0")
            force("androidx.core:core-ktx:1.6.0")
        }
    }
}

val newBuildDir: Directory =
    rootProject.layout.buildDirectory
        .dir("../../build")
        .get()
rootProject.layout.buildDirectory.value(newBuildDir)

subprojects {
    val newSubprojectBuildDir: Directory = newBuildDir.dir(project.name)
    project.layout.buildDirectory.value(newSubprojectBuildDir)
}

subprojects {
    project.evaluationDependsOn(":app")
}

tasks.register<Delete>("clean") {
    delete(rootProject.layout.buildDirectory)
}