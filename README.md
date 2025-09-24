# 📋 TaskQuest - Your Productivity Companion

A modern, responsive web application for task management with Firebase authentication and real-time data visualization. Stay organized and boost your productivity with an intuitive, user-friendly interface.
Link to deployed site:(https://task-quest-task-manager.vercel.app/)

## 🚀 Features

### ✨ Core Functionality
- **User Authentication** - Secure sign up/sign in with Firebase Auth
- **Task Management** - Add, complete, and delete tasks with ease
- **Data Visualization** - Interactive charts showing productivity stats
- **Real-time Updates** - Instant UI updates without page refreshes

### 📱 User Experience
- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Accessibility** - ARIA labels and semantic HTML for screen readers
- **Progressive Enhancement** - Works without JavaScript for basic functionality

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Modern JavaScript with modules
- **Chart.js** - Interactive data visualization

### Backend & Services
- **Firebase Authentication** - User management and security
- **Firebase Config** - Project configuration and API keys
- **LocalStorage** - Client-side data persistence

### Development Tools
- **Git** - Version control
- **GitHub** - Code hosting and collaboration
- **Environment Variables** - Secure configuration management

## 📁 Project Structure

```
taskquest/
├── 📄 index.html              # Landing page
├── 🔐 login.html              # Sign in page
├── 📝 signup.html             # Registration page
├── 📊 dashboard.html          # Main task dashboard
├── 📞 contact.html            # Contact form
├── 📁 config/
│   ├── 🔑 env.js             # Environment variables (not committed)
│   └── 📋 env.example.js     # Environment template
├── 📁 css/
│   └── 🎨 style.css          # Custom styles (if external)
├── 🚫 .gitignore             # Git ignore rules
├── 📖 README.md              # This file
└── 🌍 .env                   # Environment variables (not committed)
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Firebase project with Authentication enabled
- Basic knowledge of HTML/CSS/JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/taskquest.git
   cd taskquest
   ```

2. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication with Email/Password
   - Copy your Firebase configuration

3. **Configure environment variables**
   ```bash
   # Create config directory
   mkdir config
   
   # Copy environment template
   cp config/env.example.js config/env.js
   
   # Edit config/env.js with your Firebase keys
   nano config/env.js
   ```

4. **Update Firebase configuration**
   Edit `config/env.js` with your Firebase project details:
   ```javascript
   window.ENV = {
     FIREBASE_API_KEY: "your-api-key-here",
     FIREBASE_AUTH_DOMAIN: "your-project.firebaseapp.com",
     FIREBASE_PROJECT_ID: "your-project-id",
     // ... other config values
   };
   ```

5. **Serve the files**
   - **Option A**: Open `index.html` directly in your browser
   - **Option B**: Use a local server:
     ```bash
     # Using Python
     python -m http.server 3000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:3000
     ```

6. **Access the application**
   Open `http://localhost:3000` in your browser

## 🔧 Configuration

### Firebase Setup

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Click "Add project" and follow the setup wizard

2. **Enable Authentication**
   ```
   Firebase Console → Authentication → Sign-in method → Email/Password → Enable
   ```

3. **Get Configuration**
   ```
   Firebase Console → Project Settings → General → Your apps → Web app → SDK setup and configuration
   ```

4. **Security Rules** (Optional but recommended)
   ```javascript
   // Firestore Security Rules
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/{document=**} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

### Environment Variables

Create `config/env.js` with your Firebase configuration:

```javascript
// config/env.js - DO NOT COMMIT TO GIT!
window.ENV = {
  FIREBASE_API_KEY: "AIzaSyC...",
  FIREBASE_AUTH_DOMAIN: "your-project.firebaseapp.com",
  FIREBASE_PROJECT_ID: "your-project-id",
  FIREBASE_STORAGE_BUCKET: "your-project.firebasestorage.app",
  FIREBASE_MESSAGING_SENDER_ID: "123456789",
  FIREBASE_APP_ID: "1:123456789:web:abcdef123456",
  FIREBASE_MEASUREMENT_ID: "G-XXXXXXXXXX"
};
```

## 📱 Responsive Design



### Features
- **Mobile-First CSS** - Optimized for mobile devices
- **Touch-Friendly** - Large buttons and touch targets
- **Flexible Layouts** - Adapts to any screen size
- **Optimized Typography** - Readable fonts across devices

## 🔐 Security Best Practices

### Environment Protection
```bash
# Files that should NEVER be committed
config/env.js          # Contains real API keys
.env                   # Environment variables
firebase-config.js     # Firebase secrets
```

### Firebase Security
- User data is isolated per authenticated user
- API keys are restricted to specific domains
- Authentication required for all user actions

## 🎨 Customization

### Styling
- Edit CSS variables in `<style>` tags for easy theme changes
- Responsive breakpoints can be adjusted in media queries
- Colors and fonts can be customized via CSS custom properties

### Features
- Add new task categories in the JavaScript task management logic
- Extend Chart.js configuration for additional chart types
- Implement additional Firebase services (Firestore, Cloud Functions)

## 📊 Performance

### Optimization Features
- **Lazy Loading** - Charts and heavy content load when needed
- **Efficient DOM Updates** - Minimal re-renders for better performance
- **Compressed Assets** - Optimized images and minified code
- **CDN Resources** - External libraries loaded from CDN

### Best Practices
- Semantic HTML for better SEO
- Accessible design with proper ARIA labels
- Progressive enhancement approach
- Mobile-first responsive design

### Upcoming Features
- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Task Categories** - Organize tasks by category/project
- [ ] **Due Dates** - Add deadlines and reminders
- [ ] **Export/Import** - Backup and restore task data
- [ ] **Collaboration** - Share tasks with other users
- [ ] **Mobile App** - Native iOS and Android applications

### Technical Improvements
- [ ] **PWA Support** - Install as progressive web app
- [ ] **Offline Mode** - Work without internet connection
- [ ] **Push Notifications** - Task reminders and updates
- [ ] **Advanced Charts** - More detailed productivity analytics
- [ ] **Database Migration** - Move from localStorage to Firestore



