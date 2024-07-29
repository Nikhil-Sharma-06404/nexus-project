# Restaurant Website

This project is a full-stack restaurant website featuring user authentication. The website allows users to browse the menu, learn about the restaurant, contact the restaurant, and register or log in to their accounts. The backend is built with Node.js and Express, and MongoDB is used for the database. The frontend is developed using React and Material-UI. The website also includes a protected route system for authenticated users and employs JWT for secure user authentication.

## Features
- User registration and login
- Protected routes for authenticated users
- Responsive design
- Interactive UI with Material-UI components
- Real-time form validation and error handling
- User-friendly navigation with a responsive navbar
- Social media integration in the footer

## Project Structure
- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Material-UI
- **Authentication**: JWT (JSON Web Token)
- **Styling**: CSS Modules, Material-UI
- **State Management**: React Context API

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB database connection string

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/restaurant-website.git
   cd restaurant-website
   npm i

2. **Create a .env file in the backend directory and add your environment variables:**
PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret

3. **Start the backend server:**
bash
Copy code
npm start


**Frontend Setup**
1. **Navigate to the frontend directory:**
cd ../frontend

2. **Start the frontend development server:**
npm start

## Access the Application
Open your browser and navigate to http://localhost:3000 to access the frontend.
The backend will be running on http://localhost:5000.