# Companies Directory – Frontend Development

A full-stack **Company Directory** application built with **React** (frontend) and **Node.js + Express + MongoDB** (backend).  
Allows users to **view, filter, search, and paginate company data**.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup & Installation](#setup--installation)

---

## Features

- List companies in **table (desktop)** or **card (mobile)** view
- **Filter** companies by `industry`, `location`, and `tech stack`
- **Sort** companies by name, industry, or location
- **Pagination** for large datasets
- Responsive UI for desktop and mobile
- RESTful API with **CRUD** operations
- Full-text search on `name`, `industry`, `description`, and `techStack`

---

## Tech Stack

### Frontend

- **React.js** - UI library
- **Tailwind CSS** - Styling
- **Axios** - API requests
- **React Hooks** - State management

### Backend

- **Node.js + Express** - Server
- **Mongoose** - ODM for MongoDB
- **Cors** - Enable cross-origin requests
- **Morgan** - HTTP request logging

---

## Folder Structure

K_RAMESH_COMPANIES_APIS/
├─ backend/
│ ├─ src/
│ │ ├─ controllers/
│ │ │ └─ companyController.js
│ │ ├─ models/
│ │ │ └─ Company.js
│ │ ├─ routes/
│ │ │ └─ companies.js
│ │ └─ utils/
│ │ └─ db.js
│ ├─ .env
│ └─ server.js
├─ frontend/
│ ├─ src/
│ │ ├─ components/
│ │ │ ├─ Navbar.js
│ │ │ ├─ CompanyList.js
│ │ │ ├─ FilterControls.js
│ │ │ └─ Pagination.js
│ │ └─ App.js
│ ├─ package.json
│ └─ ...
├─ seed/
│ ├─ seedCompanies.js (seed the data to sever)
├─ README.md

## Setup & Installation

### Backend

1. Navigate to the backend folder:

```bash
cd backend

Install dependencies:
npm install

Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the backend server:
npm start
Server runs at http://localhost:5000.

Frontend
Navigate to the frontend folder:

bash
cd frontend
Install dependencies:

Start the frontend
npm install
npm start
Frontend runs at http://localhost:3000 by default.

```
