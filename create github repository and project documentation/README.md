# EduLearn – Online Course Management Platform

## 📌 Project Title
**EduLearn: A Web-Based Course Management and Learning Platform**

## 🎯 Problem Statement
Educational institutions and independent instructors often struggle to manage courses, track student progress, and communicate updates efficiently using scattered tools (spreadsheets, email, WhatsApp groups). Students, in turn, lack a single place to register for courses, track their learning, and receive timely updates.

**EduLearn** solves this by providing a unified web platform where instructors can create and manage courses, students can register and track progress through a personalized dashboard, and both parties stay connected through a built-in notification system.

## 👥 Target Users
| User Type | Needs |
|---|---|
| **Students** | Easy registration/login, browse & enroll in courses, track progress on a dashboard, receive notifications about deadlines/updates |
| **Instructors** | Create/manage courses and content, view enrolled students, send announcements |
| **Admins** | Oversee users and courses, moderate content, manage platform-wide settings |

## ✨ Features
- 🔐 **User Registration & Login** – secure signup/login with role-based access (Student / Instructor / Admin)
- 📊 **Dashboard** – personalized view of enrolled/created courses, progress, and activity
- 📚 **Course Management** – create, edit, delete courses; add modules/lessons; upload materials
- 🔔 **Notifications** – real-time or email alerts for enrollments, deadlines, and announcements
- 🔎 **Course Discovery** – search and filter available courses
- 📈 **Progress Tracking** – track completion status per course/module
- ⚙️ **Admin Panel** – user and content moderation

## 🛠️ Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React.js, HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Authentication | JWT (JSON Web Tokens) |
| Notifications | Node-cron / Email (Nodemailer) |
| Version Control | Git & GitHub |

## 📂 Folder Structure
```
edulearn/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level views (Login, Dashboard, Courses, etc.)
│   │   ├── services/       # API calls (axios)
│   │   └── assets/         # Images, icons, styles
│   └── package.json
├── server/                  # Node/Express backend
│   ├── controllers/        # Route logic
│   ├── models/             # MySQL data models
│   ├── routes/             # API route definitions
│   ├── middleware/         # Auth & error-handling middleware
│   ├── config/             # DB & environment config
│   └── package.json
├── docs/                    # Additional project documentation
├── .gitignore
└── README.md
```

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- MySQL Server
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/edulearn.git
cd edulearn
```

### 2. Backend Setup
```bash
cd server
npm install
# create a .env file with DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET
npm start
```

### 3. Frontend Setup
```bash
cd client
npm install
npm start
```

### 4. Access the App
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 🗺️ Roadmap
- [ ] User authentication (JWT)
- [ ] Course CRUD APIs
- [ ] Dashboard UI
- [ ] Notification system
- [ ] Deployment (Render/Vercel)

## 📄 License
This project is for academic purposes.
