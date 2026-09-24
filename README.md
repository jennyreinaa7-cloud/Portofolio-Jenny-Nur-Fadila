# Portofolio-Jenny-Nur-Fadila

<img width="1077" height="2232" alt="Portofolio Jenny Nur Fadila" src="https://github.com/user-attachments/assets/3724cf19-78ee-4796-a32d-f89a264a8a7b" />

Penjelasan: 

1. Inti program website yang saya buat ini adalah sebuah portofolio digital satu halaman berbasis web responsif yang dirancang untuk kebutuhan personal branding dan rekam jejak akademik maupun organisasi Jenny Nur Fadila. Arsitekturnya mengombinasikan tiga pilar web mendasar: HTML sebagai fondasi semantik penyusun konten, CSS sebagai perancang tata letak dan estetika visual, serta JavaScript sebagai pengatur logika interaksi dinamis antara pengguna dan elemen halaman.
2. Pada struktur HTML, dokumen diawali dengan deklarasi tipe data <!DOCTYPE html>, penentuan bahasa dokumen id (Indonesia), serta meta tag viewport untuk memastikan halaman dapat menyesuaikan skala layar ponsel maupun desktop.
3. Bagian atas memuat elemen header berupa nama lengkap, paragraf bio ringkas, deretan tombol tautan eksternal menuju WhatsApp, LinkedIn, Instagram, dan YouTube menggunakan elemen <a>, serta foto profil personal dengan tag <img>.
4. Bagian bawah dipisahkan oleh garis horizontal semantik <hr> menuju tajuk <h3> sebagai judul seksi, yang diikuti oleh daftar kartu kegiatan di dalam kontainer.
5. Setiap entri kegiatan dibungkus dalam elemen kontainer berkelas .card yang memuat gambar dokumentasi, label kategori atau badge prestasi, judul kegiatan dalam tag <h4>, serta paragraf keterangan hasil capaian.
6. Pada lembar gaya CSS, aturan global universal * menetapkan box-sizing: border-box agar perhitungan lebar elemen memperhitungkan padding dan garis batas secara presisi.
7. Kontainer .wrapper dibatasi dengan lebar maksimal 720 piksel dan diposisikan tepat di tengah layar melalui margin: 0 auto, dibalut latar belakang merah muda lembut (#ffeaea) dengan sudut melengkung dan garis tepi bernuansa pastel.
8. Pada lapisan logika JavaScript, kode dibungkus di dalam pemantau acara document.addEventListener('DOMContentLoaded', ...) guna memastikan seluruh pohon dokumen HTML telah selesai dimuat dan siap dimanipulasi sebelum skrip dieksekusi.
9. Skrip kemudian menyeleksi seluruh elemen kartu kegiatan di halaman menggunakan document.querySelectorAll('.card') dan menerapkan pendengar acara klik (addEventListener('click')) pada masing-masing kartu melalui perulangan forEach.
10. Saat sebuah kartu diklik, fungsi akan memeriksa terlebih dahulu apakah kartu tersebut sudah memiliki penanda status aktif melalui metode classList.contains('active')
