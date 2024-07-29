import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Toaster } from 'react-hot-toast';
import './App.css'; // Import the App.css for global styles

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
