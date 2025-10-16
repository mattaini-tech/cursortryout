const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3001;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Middleware
app.use(cors());
app.use(express.json());

// Initialize messages file if it doesn't exist
async function initializeMessagesFile() {
  try {
    await fs.access(MESSAGES_FILE);
  } catch {
    await fs.writeFile(MESSAGES_FILE, JSON.stringify([]));
  }
}

// Get all messages
app.get('/api/messages', async (req, res) => {
  try {
    const data = await fs.readFile(MESSAGES_FILE, 'utf8');
    const messages = JSON.parse(data);
    res.json(messages);
  } catch (error) {
    console.error('Error reading messages:', error);
    res.status(500).json({ error: 'Failed to read messages' });
  }
});

// Post a new message
app.post('/api/messages', async (req, res) => {
  try {
    const { content, author } = req.body;
    
    if (!content || !author) {
      return res.status(400).json({ error: 'Content and author are required' });
    }

    const data = await fs.readFile(MESSAGES_FILE, 'utf8');
    const messages = JSON.parse(data);
    
    const newMessage = {
      id: Date.now().toString(),
      content,
      author,
      timestamp: new Date().toISOString(),
      upvotes: 0
    };
    
    messages.unshift(newMessage);
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
    
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error posting message:', error);
    res.status(500).json({ error: 'Failed to post message' });
  }
});

// Upvote a message
app.post('/api/messages/:id/upvote', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(MESSAGES_FILE, 'utf8');
    const messages = JSON.parse(data);
    
    const message = messages.find(m => m.id === id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    message.upvotes += 1;
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
    
    res.json(message);
  } catch (error) {
    console.error('Error upvoting message:', error);
    res.status(500).json({ error: 'Failed to upvote message' });
  }
});

// Start server
initializeMessagesFile().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 cursortryout server running on http://localhost:${PORT}`);
  });
});

