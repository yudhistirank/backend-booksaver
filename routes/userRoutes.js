const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET semua user
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data user', error: err });
  }
});

module.exports = router;

// DELETE user by ID
router.delete('/:id', async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User tidak ditemukan' });
      }
      res.status(200).json({ message: 'User berhasil dihapus', deletedUser });
    } catch (err) {
      res.status(500).json({ message: 'Gagal menghapus user', error: err });
    }
  });
  