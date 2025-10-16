const fs = require('fs').promises;
const path = require('path');

// In-memory storage for Vercel (since file system is read-only)
let messages = [
  {
    "id": "1",
    "content": "Welcome to cursortryout! 🎉\n\nThis is your new forum app with a sleek navy blue and gold design. Feel free to post your thoughts, upvote messages you like, and enjoy the bubbly UI!\n\nAll your messages are safely stored. Happy posting!",
    "author": "cursortryout",
    "timestamp": "2025-10-16T00:00:00.000Z",
    "upvotes": 0
  }
];

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Get all messages
    return res.status(200).json(messages);
  }

  if (req.method === 'POST') {
    // Post a new message
    const { content, author } = req.body;
    
    if (!content || !author) {
      return res.status(400).json({ error: 'Content and author are required' });
    }

    const newMessage = {
      id: Date.now().toString(),
      content,
      author,
      timestamp: new Date().toISOString(),
      upvotes: 0
    };
    
    messages.unshift(newMessage);
    return res.status(201).json(newMessage);
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

