const User = require('../models/User');

const apiKeyMiddleware = async (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (!apiKey) return res.status(403).json({ message: 'API key is required' });

  const user = await User.findOne({ apiKey });
  if (!user) return res.status(401).json({ message: 'Invalid API key' });

  req.user = user;
  next();
};

module.exports = apiKeyMiddleware;
