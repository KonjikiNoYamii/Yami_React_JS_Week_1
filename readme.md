
# 📝 React TodoList dengan Filter & Jam Real-Time

Proyek ini adalah aplikasi **TodoList** sederhana berbasis **React** yang memiliki fitur lengkap mulai dari penambahan tugas, penghapusan dengan animasi, filter daftar, hingga tampilan **jam nyata (real-time clock)**.  
Aplikasi ini juga dibuat **responsif** sehingga tampil cantik di berbagai ukuran layar.

---

## 🌟 Fitur Utama

- ✏️ **Tambah Tugas**  
  Menambahkan tugas baru melalui form input di bagian atas.

- ✅ **Tandai Selesai**  
  Klik pada checkbox untuk menandai tugas telah selesai.

- ❌ **Hapus Tugas dengan Animasi**   
  Tugas yang dihapus akan menghilang secara halus menggunakan efek transisi.

- 🔍 **Filter Daftar Tugas**
  - **All** → Menampilkan semua tugas.
  - **Active** → Menampilkan hanya tugas yang belum selesai.
  - **Completed** → Menampilkan tugas yang sudah diselesaikan.

- 🕒 **Jam Nyata (Real-Time Clock)**  
  Terletak di bagian paling bawah halaman dan menampilkan waktu terkini secara otomatis yang terus diperbarui setiap detik.

- 📱 **Desain Responsif (Mobile Friendly)**  
  Tampilan menyesuaikan ukuran layar melalui media query agar tetap rapi di perangkat kecil.

---

## 🧭 Alur Aplikasi

Berikut alur lengkap bagaimana aplikasi bekerja dari awal hingga akhir:

1. **Menambah Tugas Baru**
   - Pengguna mengetik tugas pada input field di bagian atas.
   - Menekan tombol “>>” untuk menambah tugas.
   - Tugas baru langsung muncul di daftar beserta animasi lembut masuk ke tampilan.

2. **Menandai Tugas Selesai**
   - Setiap tugas memiliki checkbox di sisi kiri.
   - Ketika dicentang, teks tugas cuma akan bisa dilihat di list All dan Completed.

3. **Menghapus Tugas**
   - Tugas yang tidak diperlukan dapat dihapus dengan menekan tombol “X”.
   - Setelah tombol ditekan, tugas akan menghilang dengan efek animasi yang halus agar lebih menarik.

4. **Memfilter Tugas**
   - Di bagian kiri aplikasi terdapat tiga pilihan filter:
     - **All** untuk semua tugas.
     - **Active** untuk tugas yang belum selesai.
     - **Completed** untuk tugas yang sudah selesai.
   - Klik pada salah satu filter untuk menampilkan daftar sesuai kriteria tersebut.

5. **Menampilkan Jam Real-Time**
   - Bagian kanan bawah halaman menampilkan waktu terkini (tanggal dan jam lengkap).
   - Waktu terus diperbarui setiap detik menggunakan `setInterval`.
   - Format waktu disesuaikan secara lokal dengan format Indonesia (contoh: *Selasa, 07 Oktober 2025 09.45.12*).

6. **Tampilan Responsif**
   - Jika layar dikecilkan (misalnya pada HP), tampilan otomatis berubah:
     - Filter, daftar tugas, dan jam disusun **secara vertikal**.
     - Ukuran teks, padding, dan jarak antar elemen disesuaikan agar tetap rapi dan mudah dibaca.

7. **Tidak Ada Tugas**
   - Jika daftar kosong, aplikasi akan menampilkan pesan:
     > “Tidak ada tugas....”
   - Di bawah pesan itu juga muncul gambar karakter lucu dari folder `public`.

---

## 🎨 Desain Antarmuka

Aplikasi ini menggunakan gaya visual lembut dengan latar putih bersih dan warna biru muda `#019ef9` sebagai warna utama.  
Tiap elemen dibuat dengan **sudut membulat** dan **bayangan lembut**, memberi kesan modern namun tetap ringan.

Animasi yang digunakan:
- **fadeIn** saat elemen muncul.
- **transform & opacity transition** saat tugas dihapus.
- **hover effect** pada tombol dan filter agar lebih interaktif.

---

## 🕒 Seksi Waktu (Real-Time Clock)

Bagian jam berada di sisi kanan (atau paling bawah di tampilan mobile).  
Menampilkan informasi:
- Hari dalam bahasa Indonesia (Senin, Selasa, dst)
- Tanggal lengkap (DD bulan YYYY)
- Waktu real-time (HH:MM:SS)

Jam diperbarui otomatis setiap detik menggunakan **React Hook `useEffect`** dan **`setInterval()`**.

---

## 📱 Tampilan Responsif

Aplikasi telah diatur agar responsif dengan media query:

- **Layar sedang (≤768px)**  
  - Layout berubah menjadi kolom vertikal.  
  - Filter, daftar tugas, dan jam ditumpuk ke bawah.

- **Layar kecil (≤480px)**  
  - Ukuran teks diperkecil agar tetap proporsional.  
  - Padding dan margin disesuaikan agar tidak terlalu lebar.

---

## 💡 Catatan Tambahan

- Jika tidak ada tugas, gambar akan ditampilkan untuk mempercantik tampilan.
- Semua teks, tombol, dan elemen diatur agar mudah dibaca dan memiliki kontras yang baik.
- Struktur kode menggunakan React Hooks (`useState`, `useEffect`) agar efisien dan modern.
- File CSS sudah dioptimalkan agar mendukung transisi, animasi, serta tampilan adaptif.

---

## 🧩 Struktur Folder Proyek

```

TodoList/
├── src/
│   ├── components/
│   │   └── TodoList.jsx
|   |   └── TodoList.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── chitoge-removebg-preview.png
└── package.json


