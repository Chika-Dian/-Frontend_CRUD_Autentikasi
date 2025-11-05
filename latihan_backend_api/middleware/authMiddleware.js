const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Token tidak ada' });

  const token = authHeader.split(' ')[1]; // format: "Bearer <token>"
  if (!token) return res.status(401).json({ message: 'Token tidak valid' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // ini yang dipakai di controller
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token expired atau tidak valid' });
  }
};
