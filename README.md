# InterVexa AI 🚀

> **AI-Powered Smart Interview Platform** - Master your interview skills with intelligent feedback and real-time analysis

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?logo=mongodb)](https://www.mongodb.com)
[![Vite](https://img.shields.io/badge/Vite-8.0-purple?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-ISC-blue)](LICENSE)

---

## 🎯 Overview

**InterVexa AI** is a cutting-edge interview preparation platform that leverages artificial intelligence to help candidates practice and master their interview skills. Get real-time feedback, detailed analytics, and personalized insights to boost your confidence and performance.

### Key Highlights
✨ **AI-Powered Interviews** - Intelligent interview simulations for HR, Technical, and more  
📊 **Advanced Analytics** - Track your progress with detailed performance metrics  
📄 **Auto-Generated Reports** - Professional PDF reports with actionable feedback  
💳 **Secure Payments** - Integrated Razorpay for seamless transactions  
🔐 **Firebase Auth** - Secure and scalable authentication  
⚡ **Real-time Feedback** - Instant AI analysis of your responses  
♻️ **Interview History** - Access all your past interviews anytime  

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with hooks and modern features
- **Vite** - Lightning-fast build tool
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Firebase** - Authentication & real-time database
- **Recharts** - Beautiful data visualization
- **jsPDF** - PDF generation
- **Axios** - HTTP client

### Backend
- **Node.js + Express** - Fast and scalable server
- **MongoDB + Mongoose** - Flexible database with ODM
- **JWT** - Secure token-based authentication
- **Razorpay** - Payment gateway integration
- **Multer** - File upload handling
- **PDF.js** - PDF processing

---

## 📋 Project Structure

```
InterVexa AI/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (Auth, Home, Interview, etc.)
│   │   ├── redux/         # Redux store & slices
│   │   ├── utils/         # Utility functions (Firebase config)
│   │   └── assets/        # Images and videos
│   ├── package.json
│   └── vite.config.js
│
└── server/                 # Node.js Backend
    ├── controllers/        # Business logic handlers
    ├── models/            # Database schemas (User, Interview, Payment)
    ├── routes/            # API endpoints
    ├── middlewares/        # Custom middleware (Auth, Multer)
    ├── services/          # External services (OpenRouter AI, Razorpay)
    ├── config/            # Configuration files (DB, Tokens)
    ├── index.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB** (local or cloud - Atlas)
- **Firebase** account
- **Razorpay** account

### Installation

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd "InterVexa AI"
```

#### 2. Setup Backend Server

```bash
cd server

# Install dependencies
npm install

# Create .env file with the following variables
echo "" > .env
```

**Add to `server/.env`:**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
OPENROUTER_API_KEY=your_openrouter_api_key
```

**Start the server:**
```bash
npm run dev      # Development (with nodemon)
# or
npm start        # Production
```

Server will run on `http://localhost:5000`

#### 3. Setup Frontend Client

```bash
cd ../client

# Install dependencies
npm install

# Create .env file
echo "" > .env.local
```

**Add to `client/.env.local`:**
```env
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

**Start the development server:**
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 💻 Available Scripts

### Client (React + Vite)
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Server (Express)
```bash
npm run dev      # Start with auto-reload (nodemon)
npm start        # Start production server
```

---

## 🌐 API Routes

### Authentication Routes (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /verify` - Verify authentication token

### User Routes (`/api/user`)
- `GET /profile` - Get user profile
- `PUT /update` - Update user information
- `GET /credits` - Get user credits/tokens
- `POST /upload-resume` - Upload resume

### Interview Routes (`/api/interview`)
- `POST /start` - Start new interview
- `POST /submit-answer` - Submit interview answer & get AI feedback
- `GET /history` - Get interview history
- `GET /:id` - Get interview details
- `POST /:id/generate-report` - Generate PDF report

### Payment Routes (`/api/payment`)
- `POST /create-order` - Create Razorpay order
- `POST /verify-payment` - Verify payment
- `GET /orders` - Get payment history

---

## 🎯 Core Features

### 1. **Interview Simulation**
- Practice interviews for different roles (HR, Technical, etc.)
- Real-time AI response analysis
- Confidence scoring system
- Instant feedback on answers

### 2. **Performance Analytics**
- Track interview progress over time
- Detailed performance metrics
- Strengths and areas for improvement
- Visual analytics with charts

### 3. **Report Generation**
- Auto-generated PDF reports
- Comprehensive feedback analysis
- Actionable recommendations
- Download and share reports

### 4. **Secure Payments**
- Integrated Razorpay payment gateway
- Multiple interview packages
- Credit-based system
- Transaction history

### 5. **User Dashboard**
- Interview history with timestamps
- Performance statistics
- Credit balance
- Profile management

---

## 🔒 Security Features

✅ **JWT Authentication** - Secure token-based authentication  
✅ **CORS Protection** - Configured for production domains  
✅ **Password Hashing** - Crypto-based secure password storage  
✅ **Firebase Security** - Additional layer of user authentication  
✅ **Environment Variables** - Sensitive data in `.env` files  

---

## 📦 Deployment

### Frontend Deployment (Vercel)
```bash
cd client
npm run build
# Connect to Vercel and deploy
```

### Backend Deployment (Render/Railway/Heroku)
```bash
cd server
# Push to git repository
# Connect to deployment platform
# Set environment variables
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | JWT signing secret | `your_secret_key_here` |
| `RAZORPAY_KEY_ID` | Razorpay merchant key | `rzp_test_xxxxx` |
| `RAZORPAY_KEY_SECRET` | Razorpay merchant secret | `xxxxx` |
| `OPENROUTER_API_KEY` | OpenRouter AI API key | `sk-xxxxx` |

---

## 🐛 Troubleshooting

### CORS Issues
- Ensure backend CORS is configured for frontend domain
- Check allowed origins in `server/index.js`

### MongoDB Connection Failed
- Verify MongoDB URI in `.env`
- Check network access in MongoDB Atlas
- Ensure IP whitelist includes your current IP

### Firebase Authentication Issues
- Verify Firebase config in `client/src/utils/firebase.js`
- Check Firebase project credentials in `.env.local`
- Enable required authentication methods in Firebase Console

### PDF Generation Issues
- Ensure jsPDF is properly installed
- Check file permissions for PDF output directory
- Verify required PDF dependencies

---

## 🌍 Live Demo

Check out the live version: **[InterVexa AI](https://inter-vexa-ai.vercel.app/)**

## 📞 Contact & Feedback

- 💌 Have questions or feedback? Feel free to reach out!
- 🐛 Found a bug? [Open an issue](https://github.com/your-repo/issues)
- ⭐ If you like this project, please star it!

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OpenRouter** - AI/LLM capabilities
- **Razorpay** - Payment processing
- **Firebase** - Authentication & database
- **Vite** - Build tool excellence
- **React Team** - Frontend framework
- **Express.js** - Backend framework

---

## 🎉 Try It Out!

**InterVexa AI** - Master Your Interviews with AI Intelligence

🔗 **Live Demo**: [https://inter-vexa-ai.vercel.app/](https://inter-vexa-ai.vercel.app/)

---

**Made with ❤️**
