# Final Project 2 [Web Based]: E-Commerce Front End (Bukapedia)

Repository ini merupakan Final Project II dari Hacktiv8 MSIB 5. Website Bukapedia adalah sebuah website yang digunakan untuk proses jual beli produk secara online.

## Grup 7

Anggota :

- Alvito Jordan (RCTN-KS09-013)
- Rezal Nur Syaifudin (RCTN-KS09-018)
- Syaeful Annas (RCTN-KS09-019)

## Auth

### Role : User

email : user@gmail.com
password : user123

### Role : Admin

email : admin@bukapedia.com
password : admin123

## Pages

- Halaman `LoginPage` untuk menampilkan halaman Login (Dapat diakses oleh keduanya sebelum memiliki token)
- Halaman `NotFound404Page` untuk menampilkan halaman error 404 dengan tujuan mencegah salah route

- Halaman `HomePage` untuk menampilkan list product (Hanya bisa diakes oleh user)
- Halaman `CartPage` untuk menampilkan halaman keranjang belanja, jika sudah ada item (Hanya bisa diakses oleh user)
- Halaman `EmptyCartPage` untuk menampilkan halaman keranjang belanja, jika tidak ada item (Hanya bisa diakses oleh user)
- Halaman `SearchPage` untuk menampilkan halaman hasil pencarian product (Hanya bisa diakses oleh user)
- Halaman `ProductDetail` untuk menampilkan halaman detail pada product (Hanya bisa diakses oleh user)

- Halaman `AdminHomePage` untuk menampilkan halaman manage product yang baik yang tersedia maupun tidak tersedia (Hanya bisa diakses oleh admin)
- Halaman `AvailablePage` untuk menampilkan halaman manage product yang tersedia saja (Hanya bisa diakses oleh admin)
- Halaman `DisablePage` untuk menampilkan halaman manage product yang tidak tersedia saja (Hanya bisa diakses oleh admin)
- Halaman `Rekap` untuk menampilkan halaman rekap penjualan untuk menghitung total pendapatan (Hanya bisa diakses oleh admin)

## Features

- User tidak dapat mengakses halaman AdminHomePage, Rekap, AvailabledPage, dan DisablePage (Diatur dalam Protected Route)
- Admin tidak dapat mengakses halaman HomePage (User), Cart, DetailProduct, SearchPage, EmptyCartPage (Diatur dalam Protected Route)
- List Product diambil dari Fake Store API yang kemudian disimpan kedalam redux. List tersebut sudah ditambahkan informasi stok = 20 dan status = active
- Bisa melakukan searching Product yang ingin di cari oleh user.
- Fitur Cart yang hanya bisa diakses oleh user yang sudah login. Jika belum login atau admin yang login maka redirect ke halaman home
- Jika Tombol Add to Cart ditekan maka produk yang dipilih akan dimasukkan kedalam Cart (Jika dihalaman homepage maka +1, Jika di ProductDetailPage maka ditambahkan sesuai dengan quantity yang dimasukkan)
- Memanfaatkan Local Storage untuk menyimpan Token
- Tidak bisa Add to Cart jika quantity melebihi stok yang ada
- Tidak bisa Checkout ketika ada barang yang dipesan melebihi stok yang ada
- Jika Sukses Checkout maka stok akan dikurangi sesuai dengan quantity yang dipesan dan item didalam cart akan dihilangkan
- Admin dapat melakukan update Stok (Jika stok di Update ke 0 maka status produk akan otomatis tidak aktif dan tidak dapat dilihat oleh user)
- Admin dapat mengganti Status produt menjadi aktif dan tidak aktif (Tidak dapat dilihat user jika tidak aktif)
- Admin dapat melihat Total Pendapatan di Halaman Rekap Penjualan. Halaman ini berisi semua item yang sudah dicheckout oleh user dan dihitung total pendapatannya
- Terdapat Pagination dihalaman AdminHomePage (Admin)

## Installation

1. Lakukan clone pada repositori ini
   ```sh
   git clone https://github.com/AlvitoJordan/hacktiv8-finalproject-2.git
   ```
2. Masuk kedalam folder hacktiv8-finalproject-2.git
   ```sh
   cd hacktiv8-finalproject-2
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run program dengan
   ```sh
   npm start
   ```
