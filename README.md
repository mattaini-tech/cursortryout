# cursortryout 🌟

A sleek, minimal, and bubbly forum application inspired by Reddit, built with React and Express.

![Navy Blue & Gold Theme](https://img.shields.io/badge/theme-navy%20%26%20gold-FFD700)
![React](https://img.shields.io/badge/react-18.2.0-61DAFB)
![TypeScript](https://img.shields.io/badge/typescript-4.9.5-3178C6)
![Express](https://img.shields.io/badge/express-4.18.2-000000)

## ✨ Features

- 💬 **Post Messages** - Share your thoughts with the community
- 👤 **Sign with Your Name** - Every message shows who posted it
- ⬆️ **Upvote System** - Show appreciation for great posts
- 💾 **Safe Storage** - All messages are safely stored in JSON format
- 🎨 **Beautiful UI** - Navy blue and gold color scheme with smooth animations
- ✨ **Smooth Animations** - Fade and grow effects on all elements

## 🎨 Design

- **Primary Color**: Navy Blue (#001f3f)
- **Accent Color**: Gold (#FFD700)
- **Style**: Sleek, minimal, and bubbly with rounded corners and gradient backgrounds

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mattaini-tech/cursortryout.git
cd cursortryout
```

2. Install dependencies:
```bash
npm install
```

### Running the App

#### Option 1: Using Batch Files (Windows)
Simply double-click `QUICKSTART.bat` to install and start everything automatically!

Or use individual batch files:
- `install-deps.bat` - Install dependencies (first time only)
- `start-forum.bat` - Start both backend and frontend
- `start-server.bat` - Start backend only
- `start-dev.bat` - Start frontend only

#### Option 2: Manual Start

**Start the Backend Server:**
```bash
npm run server
```

**Start the Frontend (in a new terminal):**
```bash
npm run dev
# or
npm start
```

### Access the App

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## 📖 How to Use

1. Open http://localhost:3000 in your browser
2. Type your message in the text box
3. Enter your name
4. Click "Post" to share your message
5. Click the upvote arrow ⬆️ to upvote messages you like
6. Watch as your messages appear instantly with beautiful animations!

## 🛠️ Technical Stack

### Frontend
- React 18 with TypeScript
- Material-UI (MUI) for components
- Axios for API calls
- Beautiful animations with Fade and Grow effects

### Backend
- Express.js server
- CORS enabled for cross-origin requests
- JSON file storage for persistence
- RESTful API endpoints

## 📡 API Endpoints

- `GET /api/messages` - Get all messages
- `POST /api/messages` - Post a new message
  - Body: `{ content: string, author: string }`
- `POST /api/messages/:id/upvote` - Upvote a message

## 💾 Data Structure

Messages are stored in `messages.json` with the following structure:
```json
{
  "id": "unique-id",
  "content": "message content",
  "author": "author name",
  "timestamp": "ISO timestamp",
  "upvotes": 0
}
```

## 📁 Project Structure

```
cursortryout/
├── src/
│   ├── pages/
│   │   └── Forum.tsx          # Main forum component
│   └── App.tsx                # App wrapper
├── public/
│   └── index.html             # HTML template
├── server.js                  # Express backend
├── messages.json              # Data storage (auto-created)
├── package.json               # Dependencies
├── QUICKSTART.bat             # Quick start script (Windows)
├── start-forum.bat            # Start both servers (Windows)
├── start-server.bat           # Start backend (Windows)
├── start-dev.bat              # Start frontend (Windows)
└── install-deps.bat           # Install dependencies (Windows)
```

## 🎯 Key Features Explained

### Message Posting
- Large textarea for composing messages
- Name input field for author attribution
- Beautiful navy "Post" button with gold shadow
- Messages appear at the top instantly

### Upvoting
- Click the up arrow icon on any message
- Number turns gold when upvoted
- Upvotes are saved permanently

### Safe Storage
- All messages stored in `messages.json`
- Data persists between sessions
- Automatic file creation on first run

### UI/UX Highlights
- Navy gradient backgrounds
- Gold accents and highlights
- Rounded corners (bubbly style)
- Smooth fade and grow animations
- Cards lift up on hover
- Gold avatar circles with author initials
- Professional shadows and gradients

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Reply/comment system
- [ ] Image uploads
- [ ] Categories/tags
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Emoji reactions
- [ ] User profiles
- [ ] Notifications
- [ ] Real-time updates with WebSockets

## 🐛 Troubleshooting

**PowerShell Script Execution Error:**
If you get a script execution error in PowerShell, use Command Prompt (cmd.exe) instead or run the batch files directly.

**Port Already in Use:**
- Backend: Change `PORT` in `server.js`
- Frontend: React will automatically suggest a different port

**Cannot find module 'express' or 'cors':**
Run `install-deps.bat` or manually run `npm install`

**Backend not responding:**
- Make sure the backend server is running
- Check http://localhost:3001/api/messages in your browser
- Verify `messages.json` file was created

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**mattaini-tech**
- GitHub: [@mattaini-tech](https://github.com/mattaini-tech)

## 🌟 Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React, Express, and lots of navy blue and gold!
