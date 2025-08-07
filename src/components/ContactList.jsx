// src/components/ContactList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../db';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

import './ContactList.css'; // For styling

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const contactsCollectionRef = collection(db, 'contacts');
        const q = query(contactsCollectionRef, orderBy('lastName'), orderBy('firstName'));
        const querySnapshot = await getDocs(q);
        const contactsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setContacts(contactsData);
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setError("Failed to load contacts.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []); // Empty dependency array means this runs once on mount

  const filteredContacts = contacts.filter(contact => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  if (loading) return <div className="loading">Loading contacts...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="contact-list-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {filteredContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul className="contact-list">
          {filteredContacts.map(contact => (
            <li key={contact.id} className="contact-item">
              <Link to={`/contact/${contact.id}`}>
                {contact.lastName}, {contact.firstName}
              </Link>
              <span className="contact-email">{contact.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
