// This would need to connect to the same storage as messages.js
// For Vercel, you'd need a database like Vercel KV, MongoDB, or similar

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    // Note: This won't persist across serverless invocations
    // You need a real database for production
    return res.status(200).json({ message: 'Upvote received but not persisted (need database)' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

