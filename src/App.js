import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { About, Admin, ContactUs, Home, Login } from './pages';
import { Footer, Navbar } from './components';

// free api url https://movie-database-alternative.p.rapidapi.com/

function App() {
  return (
    <Router >
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
