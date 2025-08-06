// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, collection, addDoc, doc, getDoc, updateDoc } from '../db';
import './ContactForm.css'; // For styling

function ContactForm() {
  const { id } = useParams(); // Will be undefined for new contact
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '', // Optional
    address: '', // Optional
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      const fetchContactForEdit = async () => {
        try {
          setLoading(true);
          const docRef = doc(db, 'contacts', id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setFormData(docSnap.data());
          } else {
            setError("Contact not found for editing.");
          }
        } catch (err) {
          console.error("Error fetching contact for edit:", err);
          setError("Failed to load contact for editing.");
        } finally {
          setLoading(false);
        }
      };
      fetchContactForEdit();
    } else {
      setLoading(false); // No loading needed for new contact form
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const contactRef = doc(db, 'contacts', id);
        await updateDoc(contactRef, formData);
        alert("Contact updated successfully!");
      } else {
        const contactsCollectionRef = collection(db, 'contacts');
        const docRef = await addDoc(contactsCollectionRef, formData);
        alert("Contact added successfully!");
        navigate(`/contact/${docRef.id}`); // Navigate to new contact's detail page
        return; // Exit to prevent navigating to current ID for new contact
      }
      navigate(`/contact/${id}`); // Navigate to updated contact's detail page
    } catch (err) {
      console.error("Error saving contact:", err);
      alert("Failed to save contact.");
    }
  };

  if (loading) return <div className="loading">Loading form...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="contact-form-container">
      <h2>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone (Optional):</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address (Optional):</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="button submit-button">
          {isEditing ? 'Update Contact' : 'Add Contact'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
