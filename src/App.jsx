// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import ContactForm from './components/ContactForm';
import './App.css'; // For basic styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Contact Book</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add New Contact</Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/add" element={<ContactForm />} />
            <Route path="/edit/:id" element={<ContactForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
