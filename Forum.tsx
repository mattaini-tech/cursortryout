import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  IconButton,
  Divider,
  Fade,
  Grow
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import axios from 'axios';

interface Message {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  upvotes: number;
}

const Forum = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handlePostMessage = async () => {
    if (!newMessage.trim() || !author.trim()) {
      alert('Please fill in both message and name!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/messages', {
        content: newMessage,
        author: author
      });
      setMessages([response.data, ...messages]);
      setNewMessage('');
    } catch (error) {
      console.error('Error posting message:', error);
      alert('Failed to post message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpvote = async (id: string) => {
    try {
      const response = await axios.post(`http://localhost:3001/api/messages/${id}/upvote`);
      setMessages(messages.map(msg => msg.id === id ? response.data : msg));
    } catch (error) {
      console.error('Error upvoting:', error);
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000);
    
    if (hours > 24) {
      return `${Math.floor(hours / 24)}d ago`;
    } else if (hours > 0) {
      return `${hours}h ago`;
    } else if (minutes > 0) {
      return `${minutes}m ago`;
    } else {
      return 'just now';
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #001f3f 0%, #0a4d8c 100%)',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#FFD700',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                mb: 1
              }}
            >
              cursortryout
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#B8860B',
                fontWeight: 300,
                letterSpacing: 2
              }}
            >
              Share Your Thoughts
            </Typography>
          </Box>
        </Fade>

        <Grow in timeout={1000}>
          <Paper
            elevation={8}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 4,
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              border: '2px solid #FFD700'
            }}
          >
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="What's on your mind?"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: 'white',
                  '&:hover fieldset': {
                    borderColor: '#001f3f',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFD700',
                    borderWidth: 2
                  }
                }
              }}
            />
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TextField
                placeholder="Your name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    backgroundColor: 'white',
                    '&:hover fieldset': {
                      borderColor: '#001f3f',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FFD700',
                      borderWidth: 2
                    }
                  }
                }}
              />
              <Button
                variant="contained"
                onClick={handlePostMessage}
                disabled={loading}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: 'linear-gradient(45deg, #001f3f 30%, #0a4d8c 90%)',
                  boxShadow: '0 3px 8px 2px rgba(255, 215, 0, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #003366 30%, #0066cc 90%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 12px 4px rgba(255, 215, 0, .4)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Post
              </Button>
            </Box>
          </Paper>
        </Grow>

        <Box>
          {messages.map((message, index) => (
            <Grow in timeout={500 + index * 100} key={message.id}>
              <Card
                sx={{
                  mb: 2,
                  borderRadius: 4,
                  background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)',
                    borderColor: '#FFD700'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: 50
                      }}
                    >
                      <IconButton
                        onClick={() => handleUpvote(message.id)}
                        sx={{
                          color: '#001f3f',
                          '&:hover': {
                            backgroundColor: '#FFD70030',
                            color: '#FFD700'
                          }
                        }}
                      >
                        <ArrowUpwardIcon />
                      </IconButton>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 700,
                          color: message.upvotes > 0 ? '#FFD700' : '#666'
                        }}
                      >
                        {message.upvotes}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            color: '#001f3f',
                            fontSize: '0.9rem'
                          }}
                        >
                          {message.author.charAt(0).toUpperCase()}
                        </Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 700,
                            color: '#001f3f'
                          }}
                        >
                          {message.author}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: '#999', ml: 1 }}
                        >
                          {formatTime(message.timestamp)}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#333',
                          lineHeight: 1.6,
                          whiteSpace: 'pre-wrap'
                        }}
                      >
                        {message.content}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          ))}
        </Box>

        {messages.length === 0 && (
          <Fade in timeout={1500}>
            <Paper
              sx={{
                p: 6,
                textAlign: 'center',
                borderRadius: 4,
                background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                border: '2px dashed #FFD700'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#001f3f',
                  fontWeight: 600
                }}
              >
                No messages yet!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666',
                  mt: 1
                }}
              >
                Be the first to share your thoughts
              </Typography>
            </Paper>
          </Fade>
        )}
      </Container>
    </Box>
  );
};

export default Forum;
