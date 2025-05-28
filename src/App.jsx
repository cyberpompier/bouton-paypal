import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage'; // Import the new ProfilePage
import './index.css';

function App() {
  // Simulate authentication status
  // In a real application, this would come from a global state management
  // or an authentication context after a user logs in.
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true for demonstration

  return (
    <Router>
      <div className="app-container">
        <Navbar isAuthenticated={isAuthenticated} /> {/* Pass isAuthenticated to Navbar */}
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} /> {/* Add the new route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
