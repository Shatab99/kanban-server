# 📝 Task Manager App – API Server

This is the backend server for a Kanban-style Task Manager application, built using RESTful principles. It handles user authentication and full task management functionalities (create, update, delete, and status-based filtering for tasks).

---

## 🌐 Base URL

```
http://localhost:3000/api/v1
```

💡 Store this in a variable:
```ts
const BASE_URL = "http://localhost:3000/api/v1";
```

---

## 🔐 Authentication APIs

### 🔸 Login

```
Endpoint: POST /auth/login
```

**Body:**
```json
{
  "email": "your_email@example.com",
  "password": "your_password"
}
```

**Response:**
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "name": "User Name",
    "email": "user@example.com"
  }
}
```

✅ Store both the `token` and `user` object in `localStorage`.

---

## 👤 User APIs

### 🔸 Get User Profile (GetMe)

```
Endpoint: GET /users/getme
```

**Headers:**
```
Authorization: Bearer <token>
```

---

### 🔸 Sign Up (Create New User)

```
Endpoint: POST /users/create
```

**Body:**
```json
{
  "name": "Your Name",
  "email": "your_email@example.com",
  "password": "your_password"
}
```

---

## 📋 Task APIs (Kanban System)

### 🔸 Get "To Do" Tasks

```
Endpoint: GET /tasks/get-todo-tasks
```

---

### 🔸 Get "In Progress" Tasks

```
Endpoint: GET /tasks/get-in-progress-tasks
```

---

### 🔸 Get "Completed" Tasks

```
Endpoint: GET /tasks/get-completed-tasks
```

---

### 🔸 Create a Task

```
Endpoint: POST /tasks/create-task
```

**Body:**
```json
{
  "title": "Task Title",
  "description": "Task Description",
  "priority": "High | Medium | Low",
  "status": "To Do | In Progress | Completed",
  "dueDate": "YYYY-MM-DD"
}
```

---

### 🔸 Update a Task

```
Endpoint: PUT /tasks/update-task
```

**Body:**
```json
{
  "taskId": "task_id_here",
  "title": "Optional",
  "description": "Optional",
  "priority": "Optional",
  "status": "Optional",
  "dueDate": "Optional"
}
```

---

### 🔸 Delete a Task

```
Endpoint: DELETE /tasks/delete-task/:taskId
```

---

## 🛠️ Setup Instructions

```bash
# Clone the project
git clone https://github.com/your-username/taskmanager-server.git
cd taskmanager-server

# Install dependencies
npm install

# Create environment variables
cp .env.example .env

# Run the development server
npm run dev
```

---

## 📫 Contact

If you have any questions or issues, feel free ask me , if you need connection string you can directly mail me .

```
shatabag4749@gmail.com
```

---
