const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

// Controller untuk menangani registrasi dan login
exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const apiKey = uuidv4();

  try {
    const user = new User({ email, password: hashed, apiKey });
    await user.save();
    res.status(201).json({ apiKey });
  } catch (err) {
    res.status(400).json({ message: 'Email Sudah Terpakai' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Email atau Password Salah' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Email atau password Salah' });

  res.json({ apiKey: user.apiKey });
};
