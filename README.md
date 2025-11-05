# Latihan Frontend React + Backend Express + PostgreSQL

Project ini merupakan latihan **CRUD dan Autentikasi** menggunakan React.js untuk frontend dan Node.js + Express + PostgreSQL untuk backend. Fitur utamanya mencakup register dan login user dengan autentikasi **JWT**, CRUD item user yang ditampilkan melalui modal, navigasi antar halaman menggunakan **React Router**, serta tampilan UI yang rapi dengan **React-Bootstrap**.  

Teknologi yang digunakan meliputi React.js, Bootstrap, Axios, React Router untuk frontend, dan Node.js, Express, Sequelize untuk backend. Database yang dipakai adalah PostgreSQL, sedangkan autentikasi di-handle menggunakan JWT. Beberapa library tambahan yang digunakan antara lain dotenv untuk environment variable, bcryptjs untuk hashing password, serta cors agar frontend dapat mengakses backend.

Untuk setup, masuk ke folder backend lalu jalankan `npm install` untuk menginstal semua dependency. Buat file `.env` dengan konfigurasi seperti `PORT=5000`, `JWT_SECRET=Chika12345!@`, `DB_USER=postgres`, `DB_PASSWORD=postgres`, `DB_HOST=localhost`, `DB_NAME=latihan_frontend`, `DB_PORT=5432`, dan `DB_DIALECT=postgres`. Jalankan server backend dengan `node server.js` atau `nodemon server.js`, yang akan berjalan di `http://localhost:5000`. Selanjutnya, masuk ke folder frontend, jalankan `npm install` lalu `npm start` untuk menyalakan React app di `http://localhost:3000`.

Cara pakainya cukup register user baru di frontend, login untuk mendapatkan token JWT, lalu masuk ke dashboard untuk menambah, mengedit, atau menghapus item. Semua aksi CRUD akan tersimpan di PostgreSQL sesuai user yang sedang login.
