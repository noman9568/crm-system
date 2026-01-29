# Customer Relationship Management (CRM) / HRMS System

A role-based CRM/HRMS web application designed to manage users, departments, and organizational access efficiently. The system supports hierarchical roles and secure workflows, similar to real-world enterprise admin panels.

---

## Features

- Role-based access control with **Super Admin** and **Admin**
- Department creation and management
- User management with status control (active/inactive)
- Secure authentication and authorization using JWT
- Protected routes for admin dashboards
- Dynamic tables and real-time UI updates

---

## Tech Stack

### Frontend
- React.js
- Redux
- Tailwind CSS
- React Router
- Framer Motion (for UI animations)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## Roles & Permissions

### Super Admin
- Create and manage departments
- View and manage all users
- Assign users to departments
- Control admin access

### Admin
- View users within assigned departments
- Manage user status
- Limited administrative privileges

---

## Project Structure

crm-project/
│
├── frontend/ # React application
├── backend/ # Node.js + Express REST APIs
├── .gitignore
└── README.md

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB (local or cloud)
- Git

---

### Backend Setup
```bash
cd backend
npm install
npm run dev
