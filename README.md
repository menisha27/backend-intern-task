# Backend Intern Assignment

A REST API with Authentication & Role-Based Access Control built with Node.js, Express, and MongoDB.

## Tech Stack
- Node.js + Express
- MongoDB Atlas
- JWT Authentication
- bcryptjs
- React.js (Frontend)

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/menisha27/backend-intern-task.git

### 2. Install dependencies
cd backend
npm install

### 3. Create .env file
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

### 4. Run the server
npm run dev

## API Endpoints

### Auth
- POST /api/v1/auth/register - Register user
- POST /api/v1/auth/login - Login user

### Tasks
- GET /api/v1/tasks - Get all tasks
- POST /api/v1/tasks - Create task
- PUT /api/v1/tasks/:id - Update task
- DELETE /api/v1/tasks/:id - Delete task (admin only)

## Scalability Note
- Can be split into microservices
- Redis for caching
- Docker + Kubernetes for deployment
- Load balancer for horizontal scaling