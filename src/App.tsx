import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MicroLoans from './pages/MicroLoans';
import GroceryDelivery from './pages/GroceryDelivery';
import DigitalSubscriptions from './pages/DigitalSubscriptions';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-secondary-dark text-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/micro-loans" element={
              <ProtectedRoute>
                <MicroLoans />
              </ProtectedRoute>
            } />
            <Route path="/grocery-delivery" element={
              <ProtectedRoute>
                <GroceryDelivery />
              </ProtectedRoute>
            } />
            <Route path="/digital-subscriptions" element={
              <ProtectedRoute>
                <DigitalSubscriptions />
              </ProtectedRoute>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;