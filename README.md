# 📋 Task Management Web App

<div align="center">

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Google](https://img.shields.io/badge/Google_Login-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Calendar](https://img.shields.io/badge/Calendar-FF6B6B?style=for-the-badge&logo=calendar&logoColor=white)

*A modern, intuitive task management solution with seamless Google integration*

[🚀 Live Demo](#-live-demo) • [✨ Features](#-features) • [🛠️ Installation](#️-installation) • [📱 Usage](#-usage) • [🎨 Screenshots](#-screenshots)

</div>

---

## 🌟 Overview

**Task Management Web App** is a powerful, user-friendly application designed to help you organize, track, and manage your tasks efficiently. Built with cutting-edge React technology and integrated with Google services, it provides a seamless experience for personal and professional task management.

### 🎯 Why Choose Our Task Manager?
- **🔐 Secure Google Authentication** - Login with your Google account
- **📅 Calendar Integration** - Visualize tasks in calendar view
- **🔍 Smart Search** - Find tasks instantly with powerful search
- **📱 Responsive Design** - Works perfectly on all devices
- **🎨 Modern UI** - Clean, intuitive Material Design interface

---

## ✨ Features

### 🔑 **Authentication & Security**
- **Google OAuth Integration** - Secure login with Google accounts
- **Session Management** - Automatic session handling and logout
- **User Profile** - Access to Google profile information

### 📋 **Task Management**
- **Create Tasks** - Add new tasks with detailed information
- **Edit & Update** - Modify existing tasks on the fly
- **Delete Tasks** - Remove completed or unnecessary tasks
- **Task Categories** - Organize tasks by categories or projects
- **Priority Levels** - Set task priorities (High, Medium, Low)
- **Due Dates** - Set and track task deadlines

### 🎨 **User Interface**
- **Sidebar Navigation** - Easy access to all features
- **Material UI Components** - Beautiful, consistent design
- **Dark/Light Mode** - Toggle between themes
- **Responsive Layout** - Optimized for mobile and desktop

### 📅 **Calendar Integration**
- **Calendar View** - Visualize tasks by date
- **Monthly/Weekly Views** - Different calendar perspectives
- **Task Scheduling** - Drag and drop task scheduling
- **Event Integration** - Sync with Google Calendar

### 🔍 **Search & Filter**
- **Real-time Search** - Find tasks as you type
- **Filter Options** - Filter by status, priority, category
- **Advanced Search** - Search by keywords, dates, tags
- **Search History** - Quick access to recent searches

---

## 🚀 Live Demo

🌐 **[Try the App Live](https://shubhamkasture7.github.io/task-management-app/)**

*Experience all features without installation*

---

## 🛠️ Installation

### Prerequisites
- Node.js (v16.0 or higher)
- npm or yarn package manager
- Google API credentials (for Google Login)

### ⚡ Quick Setup

```bash
# Clone the repository
git clone https://github.com/shubhamkasture7/to-do-list.git
cd to-do-list

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your Google API credentials

# Start the development server
npm start
# or
yarn start
```

### 🔧 Environment Configuration

Create a `.env` file in the root directory:

```env
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_API_BASE_URL=http://localhost:3001
REACT_APP_CALENDAR_API_KEY=your_calendar_api_key
```

---

## 📱 Usage

### 🏃‍♂️ Getting Started

1. **🔐 Login**: Click "Sign in with Google" to authenticate
2. **📋 Create Tasks**: Use the "+" button to add new tasks
3. **📅 View Calendar**: Switch to calendar view to see tasks by date
4. **🔍 Search**: Use the search bar to find specific tasks
5. **🎨 Customize**: Toggle sidebar and themes as needed

### 🎯 Key Workflows

#### Creating a Task
```
1. Click "Add Task" button
2. Fill in task details (title, description, due date)
3. Set priority level and category
4. Click "Save Task"
```

#### Managing Tasks
```
1. View tasks in list or calendar mode
2. Click on any task to view details
3. Use edit icon to modify task
4. Mark tasks as complete with checkbox
5. Delete tasks using trash icon
```

#### Search & Filter
```
1. Use search bar for keyword search
2. Apply filters from sidebar
3. Sort by date, priority, or status
4. Clear filters to reset view
```

---

## 🎨 Screenshots

<div align="center">

### 🏠 Dashboard View
![Dashboard](https://via.placeholder.com/800x400/61DAFB/000000?text=Dashboard+View)

### 📅 Calendar View
![Calendar](https://via.placeholder.com/800x400/FF6B6B/000000?text=Calendar+View)

### 📱 Mobile View
![Mobile](https://via.placeholder.com/400x600/764ABC/000000?text=Mobile+View)

</div>

---

## 🏗️ Technical Architecture

### 🎯 **Frontend Technologies**

| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | UI Framework | 18.0+ |
| **Redux** | State Management | 8.0+ |
| **Material UI** | Component Library | 5.0+ |
| **React Router** | Navigation | 6.0+ |
| **Axios** | HTTP Client | 1.0+ |

### 🔧 **Key Dependencies**

```json
{
  "react": "^18.0.0",
  "redux": "^8.0.0",
  "@mui/material": "^5.0.0",
  "react-router-dom": "^6.0.0",
  "axios": "^1.0.0",
  "react-google-login": "^5.2.2",
  "react-big-calendar": "^1.0.0",
  "date-fns": "^2.28.0"
}
```


### 📋 Task Management Core
- **CRUD Operations** - Create, Read, Update, Delete tasks
- **Real-time Updates** - Live task status updates
- **Batch Operations** - Select and modify multiple tasks
- **Task Templates** - Pre-defined task structures

### 📅 Calendar Features
- **Multiple Views** - Month, Week, Day, Agenda views
- **Drag & Drop** - Move tasks between dates
- **Event Integration** - Google Calendar sync
- **Recurring Tasks** - Set up repeating tasks

### 🔍 Advanced Search
- **Full-text Search** - Search in all task fields
- **Filter Combinations** - Multiple filter criteria
- **Saved Searches** - Quick access to frequent searches
- **Search Analytics** - Track search patterns

---

## 🌟 Advanced Configuration

### 🎨 Theme Customization

```javascript
// src/theme/customTheme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});
```

### 🔧 Redux Configuration

```javascript
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import taskReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});
```

---

## 🔮 Roadmap

### 🎯 **Phase 1: Core Enhancements**
- [ ] **Offline Support** - PWA capabilities
- [ ] **Team Collaboration** - Share tasks with team members
- [ ] **File Attachments** - Add files to tasks
- [ ] **Task Comments** - Add notes and comments

### 🚀 **Phase 2: Advanced Features**
- [ ] **AI Task Suggestions** - Smart task recommendations
- [ ] **Time Tracking** - Built-in time tracking
- [ ] **Reporting & Analytics** - Task completion statistics
- [ ] **Integration Hub** - Connect with other tools

### 📱 **Phase 3: Mobile & More**
- [ ] **Mobile App** - React Native companion app
- [ ] **Desktop App** - Electron-based desktop version
- [ ] **Browser Extension** - Quick task capture
- [ ] **API Access** - Public API for integrations

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🛠️ **Development Setup**
```bash
# Fork the repository
git fork https://github.com/shubhamkasture7/to-do-list.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes and commit
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Create a Pull Request
```

### 📝 **Contribution Guidelines**
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

---

## 🐛 Troubleshooting

### Common Issues

**❌ Google Login Not Working**
```bash
# Check your environment variables
echo $REACT_APP_GOOGLE_CLIENT_ID

# Verify domain is registered in Google Console
```

**❌ Calendar Not Loading**
```bash
# Check Calendar API key
# Verify permissions in Google Cloud Console
```

**❌ Search Not Working**
```bash
# Clear browser cache
# Check Redux DevTools for state
```

### 📞 Getting Help
- 🐛 [Report Issues](https://github.com/shubhamkasture7/to-do-list/issues)
- 💬 [Join Discussions](https://github.com/shubhamkasture7/to-do-list/discussions)
- 📧 Email: support@taskmanager.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Task Management App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Material-UI Team** - For the beautiful components
- **Google Developers** - For the authentication APIs
- **Redux Team** - For state management solutions
- **Open Source Community** - For continuous inspiration

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/shubhamkasture7/to-do-list?style=social)
![GitHub forks](https://img.shields.io/github/forks/shubhamkasture7/to-do-list?style=social)
![GitHub issues](https://img.shields.io/github/issues/shubhamkasture7/to-do-list)
![GitHub pull requests](https://img.shields.io/github/issues-pr/shubhamkasture7/to-do-list)

</div>

---

<div align="center">

### 🌟 Star this repository if you found it helpful!

**Built with ❤️ by [Shubham Kasture](https://github.com/shubhamkasture7)**

*Making task management simple and efficient*

</div>
