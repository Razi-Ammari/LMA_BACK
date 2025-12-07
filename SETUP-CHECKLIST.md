# LMA DocGuide Backend - Setup Checklist

## ✅ Completed
- [x] Project structure created
- [x] Dependencies installed
- [x] MongoDB connection configured
- [x] User model with bcrypt password hashing
- [x] Authentication routes (signup, login, logout)
- [x] JWT authentication middleware
- [x] Protected assistant routes
- [x] Main server file with CORS and security

## 🔧 Next Steps - TODO

### 1. Configure MongoDB Atlas
- [ ] Create a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)
- [ ] Create a new cluster (free tier available)
- [ ] Create a database user with password
- [ ] Whitelist your IP address (or use 0.0.0.0/0 for development)
- [ ] Get your connection string
- [ ] Update `MONGODB_URI` in `.env` file

Example connection string:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 2. Generate Secure JWT Secret
Run this command to generate a secure random secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Copy the output and update `JWT_SECRET` in `.env`

### 3. Test the Backend
Start the server:
```bash
npm run dev
```

You should see:
```
✅ MongoDB connected
✅ Server running on port 5000
```

### 4. Test Authentication
Use the cURL commands from README.md or use Postman/Insomnia to test:
1. Signup a new user
2. Login with credentials
3. Send a message to the assistant (with cookie from login)

### 5. Integrate with Frontend
- [ ] Copy `frontend-integration-example.js` content to your React project
- [ ] Update API_BASE_URL if needed
- [ ] Implement signup/login pages using the API functions
- [ ] Create protected routes for authenticated users
- [ ] Build the AI chat interface

### 6. Add AI Integration
In `src/routes/assistant.routes.js`, replace the placeholder with:

**Option A: OpenAI**
```javascript
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: "You are a helpful loan application assistant." },
    { role: "user", content: message }
  ],
});
const reply = completion.choices[0].message.content;
```

**Option B: Other LLM**
- Anthropic Claude
- Google Gemini
- Local models (Ollama, etc.)

### 7. Optional Enhancements
- [ ] Create Conversation model to store chat history
- [ ] Add file upload functionality for loan documents
- [ ] Implement rate limiting
- [ ] Add input validation with express-validator
- [ ] Add logging with winston or morgan
- [ ] Set up automated tests with Jest
- [ ] Add API documentation with Swagger
- [ ] Set up production environment variables
- [ ] Configure deployment (Heroku, Railway, Render, etc.)

## 🚀 Quick Start Command
```bash
# After configuring .env file:
npm run dev
```

## 📝 Important Notes

1. **Security**: Never commit `.env` file to git (already in .gitignore)
2. **CORS**: Update the frontend origin in `src/index.js` if not using `http://localhost:5173`
3. **Production**: Set `secure: true` in cookie options when deploying with HTTPS
4. **Database**: The database name is set to "lma_docguide" in `src/config/db.js`

## 🆘 Troubleshooting

**MongoDB Connection Failed**
- Check your connection string format
- Verify database user credentials
- Ensure IP is whitelisted in MongoDB Atlas
- Check network connectivity

**CORS Errors**
- Update the origin in `src/index.js` to match your frontend URL
- Ensure `credentials: true` is set in both backend and frontend

**JWT Token Issues**
- Verify JWT_SECRET is set in .env
- Check that cookies are being sent with requests
- Clear browser cookies and try again

## 📚 Resources
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)
- [Express.js Documentation](https://expressjs.com/)
- [JWT Best Practices](https://jwt.io/introduction)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
