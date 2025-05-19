import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <div className="min-h-screen bg-secondary-dark text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/micro-loans" element={<MicroLoans />} />
          <Route path="/grocery-delivery" element={<GroceryDelivery />} />
          <Route path="/digital-subscriptions" element={<DigitalSubscriptions />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;