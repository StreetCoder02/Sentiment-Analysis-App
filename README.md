# 🎯 Sentiment Analysis App

A full-stack sentiment analysis application that analyzes the emotional tone and sentiment of text content from multiple sources. Built with React, Express, and Google Cloud APIs for production-ready performance.

**Status**: In active development — local setup instructions below | **GitHub**: [StreetCoder02/Sentiment-Analysis-App](https://github.com/StreetCoder02/Sentiment-Analysis-App)

---

## ✨ Features

- 📝 **Multi-Input Support** - Analyze sentiment from:
  - Direct text input
  - File uploads (PDF, TXT, DOCX, Images with OCR)
  - URL/web page content
  - Batch processing (up to 50 texts)

- 🌐 **Multi-Language Support**
  - Automatic language detection
  - Auto-translation to English for analysis
  - Supports 15+ languages

- 🤖 **AI-Powered Insights**
  - Google Cloud Natural Language API for sentiment analysis
  - Google Gemini AI for intelligent summary generation
  - Confidence scores and detailed breakdowns

- 📊 **Batch Analysis**
  - Process multiple texts simultaneously
  - Export results as CSV for further analysis
  - Real-time progress tracking

- 👤 **Authentication**
  - Firebase authentication
  - User analytics and history tracking
  - Demo mode for testing without login

- 📱 **Responsive UI**
  - Beautiful, modern interface with Framer Motion animations
  - TailwindCSS styling
  - Radix UI components
  - Mobile-friendly design

---

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework
- **React Router 6** - SPA routing
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **TailwindCSS 3** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Component library
- **Lucide React** - Icons

### Backend
- **Express.js** - REST API server
- **Node.js** - Runtime
- **Google Cloud Natural Language API** - Sentiment analysis
- **Google Gemini AI** - AI summaries
- **Multer** - File uploads
- **Tesseract OCR** - Image text extraction

### Services
- **Firebase** - Auth, Firestore, Storage
- **Google Cloud** - NLP services
- **Netlify Functions** - Serverless deployment

---

## 📋 Prerequisites

- **Node.js** v18 or higher
- **npm** or **pnpm**
- Firebase account (for backend services)
- Google Cloud API keys (optional, for full features)

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/StreetCoder02/Sentiment-Analysis-App.git
cd Sentiment-Analysis-App
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Setup Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your API keys:
# - VITE_FIREBASE_API_KEY
# - VITE_FIREBASE_PROJECT_ID
# - GOOGLE_CLOUD_API_KEY (optional)
# - GEMINI_API_KEY (optional)
```

### 4. Start Development Server
```bash
npm run dev
```

The app will be available at:
- **Frontend**: http://localhost:5173
- **API**: http://localhost:8080

---

## 📦 Project Structure

```
Sentiment-Analysis-App/
├── client/                 # React frontend
│   ├── pages/             # Route pages (Index, BatchAnalysis, Login)
│   ├── components/        # React components
│   │   └── ui/            # Radix UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities (Firebase, Auth)
│   └── global.css         # TailwindCSS styles
├── server/                # Express API backend
│   ├── routes/            # API endpoints
│   └── utils/             # Sentiment analysis utilities
├── shared/                # Shared TypeScript interfaces
├── netlify/functions/     # Serverless functions
├── public/                # Static assets
└── package.json           # Dependencies
```

---

## 🔌 API Endpoints

### Sentiment Analysis
- `POST /api/sentiment/analyze` - Analyze single text
- `POST /api/sentiment/batch` - Analyze multiple texts
- `POST /api/sentiment/file` - Analyze uploaded file
- `POST /api/sentiment/url` - Analyze URL content
- `POST /api/sentiment/translate` - Translate text

### Demo
- `GET /api/demo` - Test endpoint
- `GET /api/ping` - Health check

---

## 🎨 Features in Detail

### Text Analysis
Enter any text and get:
- Sentiment classification (Positive/Negative/Neutral)
- Confidence scores
- Detailed breakdown of sentiment components
- AI-generated insights

### File Upload
Supports:
- **PDF** - Text extraction
- **TXT** - Plain text
- **DOCX** - Word documents
- **Images** - OCR text extraction

### URL Analysis
- Fetch and analyze web page content
- Automatic language detection
- Full sentiment analysis pipeline

### Batch Processing
- Upload CSV or text file with multiple texts
- Process up to 50 texts at once
- Export results as CSV with all details
- Real-time progress tracking

---

## 🔑 Environment Variables

Create a `.env` file in the root directory (use `.env.example` as template):

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here

# Google Cloud APIs
GOOGLE_CLOUD_API_KEY=your_api_key_here

# Gemini AI (Optional)
GEMINI_API_KEY=your_gemini_key_here

# Server Config
NODE_ENV=development
PORT=3001
```

**How to get API keys:**
- [Firebase Console](https://console.firebase.google.com)
- [Google Cloud Console](https://console.cloud.google.com)
- [Google Gemini API](https://makersuite.google.com/app/apikey)

---

## 📚 Available Commands

```bash
# Development
npm run dev              # Start dev server (client + API)
npm run dev:api         # Start API only
npm run dev:full        # Start with API and client separately

# Production
npm run build           # Build for production
npm run build:client    # Build frontend only
npm run build:server    # Build backend only
npm start               # Start production server

# Testing & Quality
npm run test            # Run tests with Vitest
npm run typecheck       # TypeScript validation
npm run format.fix      # Auto-format code

# Firebase
npm run emulators       # Start Firebase emulators
npm run setup-firebase  # Setup Firebase project

# Utilities
npm run status          # Check project status
npm run test-api        # Test API endpoints
```

---

## 🚢 Deployment

### Netlify (Recommended)
```bash
# Build
npm run build

# Deploy
# Use Netlify CLI or connect GitHub for auto-deploy
```

### Vercel
```bash
# Deploy directly via Vercel dashboard
# Connect your GitHub repository
```

### Docker
```bash
docker build -t sentiment-app .
docker run -p 8080:8080 sentiment-app
```

---

## 🔐 Security

- ✅ Environment variables for sensitive data
- ✅ No API keys in source code
- ✅ Firebase security rules for data access
- ✅ CORS protection
- ✅ Input validation and sanitization

**Important**: Never commit `.env` files to version control. Use `.env.example` as a template.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙋 Support

- 📧 Email: apsinghjp0516@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/StreetCoder02/Sentiment-Analysis-App/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/StreetCoder02/Sentiment-Analysis-App/discussions)

---

## 🎓 Learning Resources

This project demonstrates:
- Full-stack development with React and Express
- Integration with Google Cloud APIs
- Firebase authentication and database
- TypeScript best practices
- Responsive UI design with TailwindCSS
- Vite build optimization
- Sentiment analysis implementation

Perfect for:
- Portfolio projects
- Learning full-stack development
- Understanding NLP integration
- Building production-ready apps

---

## 🙏 Acknowledgments

- Google Cloud Natural Language API
- Google Gemini AI
- Firebase
- React and Vite communities
- Radix UI and TailwindCSS

---

**Made with ❤️ by Aniruddha**

⭐ If you find this project useful, please give it a star!
