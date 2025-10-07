
# 🧠 Studi Kasus 2 – QA Analysis AYO.co.id

## 1️⃣ Website (https://ayo.co.id)

| No | Area Fitur | Tujuan Pengujian | Jenis Pengujian yang Cocok | Contoh Skenario Uji |
|----|-------------|------------------|-----------------------------|----------------------|
| 1 | **Navigasi Menu Utama** | Memastikan semua link dan navigasi berfungsi dengan benar | Functional Testing, Link Validation Test | Klik setiap menu dan pastikan diarahkan ke halaman yang sesuai tanpa error 404. |
| 2 | **Form Pencarian Lapangan** | Memastikan fitur pencarian memberikan hasil yang relevan | Functional Testing, UI/UX Testing | Pilih jenis olahraga & lokasi → klik "Temukan" → pastikan hasil sesuai filter. |
| 3 | **Autentikasi User (Masuk/Daftar)** | Validasi form login & register sesuai standar keamanan | Functional Testing, Negative Testing, Security Testing | Coba login dengan email salah, password kosong, format salah, dsb. |
| 4 | **Integrasi ke Mobile App** | Pastikan tombol download menuju store yang benar | Integration Testing, Link Test | Klik tombol dan pastikan diarahkan ke aplikasi AYO resmi di store. |
| 5 | **Responsivitas Website** | Pastikan tampilan UI proporsional di berbagai device | Responsive UI Testing | Uji di resolusi mobile, tablet, dan desktop. |
| 6 | **Kecepatan dan Performa** | Evaluasi waktu load halaman | Performance Testing | Gunakan Lighthouse/GTmetrix untuk mengukur load time. |
| 7 | **Keamanan Data Pengguna** | Pastikan data user & booking aman | Security Testing, Penetration Test (basic) | Coba input injection di form login & pencarian. |

---

## 2️⃣ Aplikasi Mobile (AYO App)

| No | Area Fitur | Tujuan Pengujian | Jenis Pengujian yang Cocok | Contoh Skenario Uji |
|----|-------------|------------------|-----------------------------|----------------------|
| 1 | **Login & Register** | Pastikan proses login/register normal & aman | Functional Test, API Test, Security Test | Login dengan kredensial valid & invalid. |
| 2 | **Pencarian & Pemesanan Lapangan** | Pastikan alur sewa lapangan berfungsi penuh | End-to-End Test, Regression Test | Pilih lokasi → pilih jam → bayar → verifikasi status booking. |
| 3 | **Sparring & Community** | Cek fitur mencari lawan main/tim lain | Functional Test, Usability Test | Kirim permintaan sparring dan cek notifikasi lawan. |
| 4 | **Pembayaran (Payment Gateway)** | Validasi integrasi pembayaran | Integration Test, API Test | Bayar dengan berbagai metode & cek status “Success”/“Failed”. |
| 5 | **Notifikasi (Push Notification)** | Pastikan user menerima notifikasi | Notification Test | Lakukan booking → pastikan notifikasi dikirim. |
| 6 | **Offline Handling** | Uji perilaku aplikasi saat koneksi hilang | Network Simulation Test | Matikan koneksi saat booking → cek pesan error. |
| 7 | **UI Consistency** | Pastikan tampilan seragam & mudah digunakan | UI/UX Test, Exploratory Test | Bandingkan gaya desain antar halaman. |

---

## ⚙️ Tools yang Direkomendasikan

| Tujuan | Tools |
|---------|-------|
| Functional Testing | Cypress (web), Appium (mobile) |
| API Testing | Postman, Cypress API test |
| UI/UX Testing | BrowserStack, Detox, Figma Inspect |
| Performance | Lighthouse, GTmetrix, Firebase Performance |
| Security | OWASP ZAP, Burp Suite (basic) |

---

## ✅ Kesimpulan

Sebagai QA Engineer:
- Fokus pengujian pada **alur booking, validasi harga, dan integrasi pembayaran**.  
- Untuk **web**, gunakan *Cypress* + *Postman*.  
- Untuk **mobile**, gunakan *Appium* atau *Detox*.  
- Prioritas utama:
  1. Tidak ada **double booking**  
  2. Harga sesuai tarif  
  3. Pembayaran valid & status sinkron  
  4. Pengalaman pengguna mulus di web & mobile.
