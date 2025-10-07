
# Studi Kasus 1 – Cara penggunaan dan Test Scenario

## Cara Penggunaan

1. <code>git clone https://github.com/hwijaya91/ayo-test.git</code>
2. <code>cd ayo-test</code>
3. <code>npm install</code>
4. <code>npx cypress open</code>
5. Pilih E2E testing
6. Pilih browser apapun
7. Pilih <code>spec.cy.js</code>

## Notes 

- Data tabel pada soal dibuat dalam file json di folder <code>cypress/fixtures</code>
- Script automation ada di file <code>cypress/e2e/spec.cy.js</code>


## Test Scenario

<table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 14px;">
  <thead>
    <tr>
      <th>No</th>
      <th>Scenario Name</th>
      <th>Test Case Description</th>
      <th>Precondition</th>
      <th>Test Steps</th>
      <th>Expected Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Cek double booking</td>
      <td>Memeriksa apakah ada booking dengan (<code>venue_id</code>, <code>date</code>, <code>start_time</code>, dan <code>end_time</code>) yang sama</td>
      <td>File <code>bookings.json</code> berisi minimal dua data booking.</td>
      <td>
        1. Ambil data dari <code>fixtures/booking.json</code>.<br>
        2. Loop setiap kombinasi booking<br>
        3. Bandingkan venue, tanggal, dan jam mulai hingga selesai<br>
        4. Print <code>booking_id</code> jika ada data yang double
      </td>
      <td>Tidak ditemukan double booking dengan (<code>venue_id</code>, <code>date</code>, <code>start_time</code>, dan <code>end_time</code>) yang sama</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Cek harga booking</td>
      <td>Memeriksa apakah harga booking sesuai dengan harga yang berlaku semestinya</td>
      <td>File <code>fixtures/priceSched.json</code> berisi data tarif yang valid</td>
      <td>
        1. Load data booking dan priceSched (data untuk harga semestinya)<br>
        2. Untuk tiap booking, cocokkan harga booking dengan harga semestinya<br>
        3. Print <code>booking_id</code> jika ada harga yang tidak sesuai
      </td>
      <td>Harga booking sesuai dengan harga pada data <code>priceSched.json</code></td>
    </tr>
    </tbody>
</table>




# Studi Kasus 2 - Desktop dan MobileApp

## 1️⃣ Desktop

<table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 14px;">
  <thead style="background-color: #f2f2f2;">
    <tr>
      <th>No</th>
      <th>Bagian yang Diuji</th>
      <th>Tujuan Pengujian</th>
      <th>Mekanisme Pengujian</th>
      <th>Contoh Skenario Uji</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><b>Autentikasi User (Masuk/Daftar)</b></td>
      <td>Validasi form login & register sesuai standar </td>
      <td>Functional Testing, Negative Testing, Security Testing</td>
      <td>Coba login dengan email salah, password kosong, format salah, SQL Injection, dan lain-lain</td>
    </tr>
    <tr>
      <td>2</td>
      <td><b>Navigasi Menu Utama</b></td>
      <td>Memastikan navigasi untuk Sewa Lapangan, Main Bareng, Sparring, Partner With Us, Liga AYO, Blog, dan juga link lain sudah sesuai.</td>
      <td>Functional Testing</td>
      <td>Klik setiap menu / link yang tersedia di halaman utama dan pastikan diarahkan ke halaman yang sesuai tanpa error</td>
    </tr>
    <tr>
      <td>3</td>
      <td><b>Fitur Search dan Filter Sewa Lapangan, Main Bareng, dan Sparring</b></td>
      <td>Memastikan fitur pencarian memberikan hasil yang relevan</td>
      <td>Functional Testing, UI/UX Testing, Usability Testing</td>
      <td>Pilih nama lapangan, kota, dan cabang olahraga yang diinginkan dan juga filter biaya lalu cari venue dan pastikan hasil sesuai</td>
    </tr>
    <tr>
      <td>4</td>
      <td><b>Cross Browser Testing / Responsive Testing</b></td>
      <td>Pastikan tampilan UI konsisten di beberapa browser (Chrome, Mozilla, Edge)</td>
      <td>Responsive UI Testing</td>
      <td>Uji di resolusi mobile, tablet, dan pada beberapa browser desktop</td>
    </tr>
    <tr>
      <td>5</td>
      <td><b>Kecepatan dan Performa</b></td>
      <td>Evaluasi waktu load halaman</td>
      <td>Performance Testing</td>
      <td>Gunakan JMeter untuk mengukur load time</td>
    </tr>
    <tr>
      <td>6</td>
      <td><b>Pembayaran</b></td>
      <td>Validasi integrasi pembayaran</td>
      <td>Integration Test, API Test</td>
      <td>Bayar dengan berbagai metode & cek status “Success”/“Failed”</td>
    </tr>
    <tr>
      <td>7</td>
      <td><b>Test booking bersamaan</b></td>
      <td>Test performa website saat terjadi booking secara bersamaan</td>
      <td>Load Test</td>
      <td>10 user berbeda melakukan booking di venue dan jadwal yang sama bersamaan</td>
    </tr>
  </tbody>
</table>

---

## 2️⃣ Mobile App (Android / IOS)

<table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 14px;">
  <thead style="background-color: #f2f2f2;">
    <tr>
      <th>No</th>
      <th>Bagian yang Diuji</th>
      <th>Tujuan Pengujian</th>
      <th>Mekanisme Pengujian</th>
      <th>Contoh Skenario Uji</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><b>Autentikasi User (Masuk/Daftar)</b></td>
      <td>Validasi form login & register sesuai standar </td>
      <td>Functional Testing, Negative Testing, Security Testing</td>
      <td>Coba login dengan email salah, password kosong, format salah, SQL Injection, dan lain-lain</td>
    </tr>
    <tr>
      <td>2</td>
      <td><b>Fitur Search dan Filter Sewa Lapangan, Main Bareng, dan Sparring</b></td>
      <td>Memastikan fitur pencarian memberikan hasil yang relevan</td>
      <td>Functional Testing, UI/UX Testing, Usability Testing</td>
      <td>Pilih nama lapangan, kota, dan cabang olahraga yang diinginkan dan juga filter biaya lalu cari venue dan pastikan hasil sesuai</td>
    </tr>
    <tr>
      <td>3</td>
      <td><b>Pembayaran</b></td>
      <td>Validasi integrasi pembayaran</td>
      <td>Integration Test, API Test</td>
      <td>Bayar dengan berbagai metode & cek status “Success”/“Failed”</td>
    </tr>
    <tr>
      <td>4</td>
      <td><b>Notifikasi</b></td>
      <td>Pastikan user menerima notifikasi</td>
      <td>Functional Test</td>
      <td>Lakukan booking dan pastikan notifikasi dikirim</td>
    </tr>
    <tr>
      <td>5</td>
      <td><b>Offline Test</b></td>
      <td>Uji perilaku aplikasi saat koneksi hilang</td>
      <td>Network Test</td>
      <td>Matikan koneksi saat booking dan cek pesan error</td>
    </tr>
    <tr>
      <td>6</td>
      <td><b>Location Test</b></td>
      <td>Uji perilaku aplikasi saat GPS on</td>
      <td>Functional Test</td>
      <td>Apakah menampilkan lapangan / rekomendasi lapangan dari daerah dekat lokasi user</td>
    </tr>
    <tr>
      <td>7</td>
      <td><b>UI Consistency</b></td>
      <td>Pastikan informasi yang ingin disampaikan sama dengan di desktop</td>
      <td>UI/UX Test, Exploratory Test</td>
      <td>Bandingkan gaya desain antar halaman</td>
    </tr>
    <tr>
      <td>8</td>
      <td><b>Fitur Chat</b></td>
      <td>Pastikan fitur chat berfungsi</td>
      <td>Functional Test</td>
      <td>Simulasikan chat dengan penyewa lapangan, antar teman sparring, dan antar komunitas</td>
    </tr>
  </tbody>
</table>

