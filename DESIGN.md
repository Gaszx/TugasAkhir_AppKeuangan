# Bidadari ERP - Design System & UI Specification

This document serves as the absolute source of truth for the UI/UX design of the **Bidadari ERP** application. It is formatted specifically for AI Design Generators (like Stitch / Project IDX) to perfectly replicate the application's visual identity.

## 1. Brand & Core Identity
- **App Name:** AppKeuangan (Bidadari ERP)
- **Design Philosophy:** Enterprise, Professional, Clean, and Trustworthy.
- **Theme Support:** Fully responsive Light and Dark modes.
- **Logo:** Refer to the provided `logo_bidadari.png` and `logo_icon_bidadari.png`.

## 2. Color Palette (Hex Codes)
The application strictly uses the following color tokens. **Do not use generic colors.**

### Primary Brand
- **Primary (Teal Modern):** `#0D9488` (Used for active states, primary buttons, highlights)
- **Primary Light:** `#2DD4BF`
- **Primary Dark:** `#0F766E`

### Semantic & Status
- **Success (Emerald):** `#10B981` (Used for positive numbers, paid status)
- **Warning (Amber):** `#F59E0B` (Used for due dates, pending status)
- **Error (Red Soft):** `#EF4444` (Used for negative numbers, unpaid debts, delete actions)
- **Info (Blue):** `#3B82F6` (Used for neutral information)

### Backgrounds & Surfaces
**Light Mode:**
- **Background:** `#F8FAFC` (Off-white, soft on eyes)
- **Surface/Card:** `#FFFFFF` (Pure white)

**Dark Mode:**
- **Background:** `#0F172A` (Deep Slate, not pitch black)
- **Surface/Card:** `#1E293B` (Blueish Slate)

### Typography Colors
- **Text Primary (Headings):** `#0F172A` (Light Mode) / `#F8FAFC` (Dark Mode)
- **Text Secondary (Subtitles):** `#64748B` (Light Mode) / `#94A3B8` (Dark Mode)

### Business Unit Accents
- **Kelapa Business:** `#F59E0B`
- **Galon Business:** `#0EA5E9`
- **Kontrakan Business:** `#8B5CF6`

## 3. Typography
- **Primary Font Family:** `Plus Jakarta Sans` or `Poppins` (Google Fonts).
- **Heading 1:** 24px, Bold.
- **Heading 2:** 20px, Bold.
- **Body:** 14px, Regular.
- **Labels/Subtitles:** 12px, Medium, colored in Text Secondary.

## 4. Spacing & Sizing System
Strictly follows an 8-point grid system:
- **Extra Small (XS):** 4px
- **Small (S):** 8px
- **Medium (M):** 16px (Standard padding for screen edges)
- **Large (L):** 24px
- **Extra Large (XL):** 32px

## 5. Components & Borders
- **Cards:** Border Radius `16px`. Must include a soft shadow: `Blur 15px, Y-Offset 4px, Color #0F172A at 5% opacity` (Light mode) or `Color #000000 at 30% opacity` (Dark mode).
- **Buttons:** Border Radius `8px`. No aggressive shadows.
- **Input Fields:** 
  - Transparent fill.
  - Border Radius `16px`.
  - Default Border: `1.5px solid #64748B at 20% opacity`.
  - Focused Border: `2px solid #0D9488`.
  - Content Padding: `16px horizontal, 16px vertical`.

## 6. Glassmorphism Effects
Used specifically for the PIN login keypad and secure overlays:
- **Background:** White at 10% opacity (`rgba(255, 255, 255, 0.1)`).
- **Border:** White at 24% opacity (`rgba(255, 255, 255, 0.24)`).
- **Border Radius:** 16px.
- Requires backdrop-filter blur.

## 7. App Screens & Layout Flow
When generating views based on uploaded screenshots, adhere to these structural rules:
1. **Login Screen:** Minimalist, centered PIN keypad, heavy use of Glassmorphism and Primary brand color backgrounds. No standard username/password text fields.
2. **Dashboard (Main Layout):** Bottom Navigation Bar. Top section features a prominent summary card (Total Balance) with a modern chart below it.
3. **Data Forms (Income/Expense):** Clean input fields using the defined Input Decoration. Semantic buttons.
4. **Reports/Lists:** Card-based list views. Each transaction is a Card component with clear visual hierarchy (Amount on the right, title on the left).

### Screenshot Mapping Reference

| No | Screen Name | Description | UI Type |
|---|---|---|---|
| 01 | Login Screen | Halaman PIN masuk aplikasi | Glassmorphism Auth |
| 02 | Dashboard Screen | Beranda ringkasan keuangan total | Tab/Main Layout |
| 03 | Kelapa Report Screen | Laporan khusus bisnis Kelapa | Chart & List |
| 04 | Galon Report Screen | Laporan khusus bisnis Galon | Chart & List |
| 05 | Kontrakan Report Screen | Laporan khusus bisnis Kontrakan | Grid & List |
| 06 | Income Form Screen | Mengisi pemasukan | Form Input |
| 07 | Expense Form Screen | Mengisi pengeluaran operasional | Form Input |
| 08 | Debt Form Screen | Menambah data utang baru | Form Input |
| 09 | Debt Report Screen | Laporan seluruh utang / piutang | List View |
| 10 | Notification Screen | Layar notifikasi jatuh tempo | List View |
| 11 | Profile Menu Screen | Bottom sheet menu profil (Tema, PDF, Logout) | Bottom Sheet |

## 8. Database Schema (dbdiagram.io)

Skema database NoSQL (Firestore) yang direlasikan secara logika untuk aplikasi Bidadari ERP. Kode di bawah ini dapat di-copy-paste langsung ke [dbdiagram.io](https://dbdiagram.io) untuk menghasilkan visualisasi relasi entitas.

```dbml
// Bidadari ERP Database Schema

Table Admin {
  id varchar [primary key, note: "Document ID (e.g., admin1)"]
  pin varchar [note: "6-digit PIN for login"]
}

Table Income {
  id varchar [primary key, note: "Document ID"]
  type varchar [note: "Enum: kelapa, galon, kontrakan"]
  amount float [note: "Net Income"]
  date datetime
  submittedBy varchar [note: "Role (Admin/Karyawan)"]
  description varchar [null]
  
  // Specific fields
  location varchar [null]
  grossAmount float [null]
  capitalCost float [null]
  employeeCut float [null]
  rentCost float [null]
  itemQuantity int [null]
  doorNumber varchar [null, ref: > Door.roomNumber]
}

Table Expense {
  id varchar [primary key]
  type varchar [note: "Enum: operasional, belanja, gaji"]
  unitBisnis varchar [note: "Kelapa, Galon, Kontrakan"]
  amount float
  date datetime
  outlet varchar [note: "Location/Outlet"]
  description varchar [null]
}

Table Debt {
  id varchar [primary key]
  type varchar [note: "Enum: utang (payable), piutang (receivable)"]
  amount float
  personName varchar [note: "Debtor/Creditor name"]
  date datetime
  dueDate datetime
  isPaid boolean [default: false]
  description varchar [null]
}

Table Door {
  id varchar [primary key]
  roomNumber varchar [unique]
  tenantName varchar [null]
  monthlyPrice float
  dueDate int [note: "Day of the month (1-31)"]
  isEmpty boolean [default: true]
  lastPaymentDate datetime [null]
}

Table Notification {
  id varchar [primary key]
  title varchar
  body varchar
  date datetime
  isRead boolean [default: false]
  relatedId varchar [null, note: "ID of related Door or Debt"]
  type varchar [note: "Enum: debt_due, rent_due, system"]
}
```

## 📦 Assets & Resources
