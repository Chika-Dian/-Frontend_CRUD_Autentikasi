// File: server.js (index.js)
const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// 1️⃣ Middleware
app.use(cors({
  origin: 'http://localhost:3000',             // React frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// 2️⃣ Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

// 3️⃣ Test endpoint
app.get('/', (req, res) => res.send('API berjalan'));

// 4️⃣ Jalankan server & sinkronisasi tabel
const PORT = process.env.PORT || 5000;

connectDB(); // koneksi database

sequelize.sync({ alter: true }) // sinkronisasi tabel, alter=true untuk update struktur tabel otomatis
  .then(() => {
    app.listen(PORT, () => console.log(`Server API berjalan di http://localhost:${PORT}`));
  })
  .catch(err => console.error('Gagal menjalankan server:', err));
