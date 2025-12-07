# LMA DocGuide Backend API

Backend API for LMA DocGuide - An AI-powered loan application assistant.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and update with your values:

```env
MONGODB_URI="your_mongodb_atlas_connection_string"
JWT_SECRET="a_long_random_secret_here"
PORT=5000
```

### 3. Run the Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## 📁 Project Structure

```
src/
├── config/
│   └── db.js              # MongoDB connection
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── models/
│   └── User.js            # User model with bcrypt
├── routes/
│   ├── auth.routes.js     # Signup, Login, Logout
│   └── assistant.routes.js # AI assistant endpoints
└── index.js               # Main server file
```

## 🔐 API Endpoints

### Authentication
- **POST** `/api/auth/signup` - Create a new user
- **POST** `/api/auth/login` - Login user
- **POST** `/api/auth/logout` - Logout user

### AI Assistant (Protected)
- **POST** `/api/assistant/message` - Send message to AI assistant
- **GET** `/api/assistant/history` - Get conversation history

## 🧪 Testing with cURL

### Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123","role":"officer"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Send Message to Assistant (requires login)
```bash
curl -X POST http://localhost:5000/api/assistant/message \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"message":"What documents do I need for a loan?"}'
```

## 🔧 Next Steps

1. **Update MongoDB URI**: Replace the placeholder in `.env` with your actual MongoDB Atlas connection string
2. **Generate JWT Secret**: Use a secure random string for `JWT_SECRET`
3. **Integrate AI**: Add OpenAI or other LLM integration in `assistant.routes.js`
4. **Add Conversation Model**: Create a model to store chat history
5. **Update CORS**: Change the frontend origin in `index.js` if needed

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing
- **cookie-parser** - Parse cookies
- **helmet** - Security headers

## 🛡️ Security Features

- Passwords hashed with bcrypt
- JWT tokens stored in httpOnly cookies
- Helmet for security headers
- Protected routes with auth middleware
- CORS configured for specific origin