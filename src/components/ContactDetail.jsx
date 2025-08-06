// src/components/ContactDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db, doc, getDoc, deleteDoc } from '../db';
import './ContactDetail.css'; // For styling

function ContactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, 'contacts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContact({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Contact not found.");
        }
      } catch (err) {
        console.error("Error fetching contact:", err);
        setError("Failed to load contact details.");
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]); // Re-fetch if ID changes

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await deleteDoc(doc(db, 'contacts', id));
        alert("Contact deleted successfully!");
        navigate('/'); // Redirect to home page after deletion
      } catch (err) {
        console.error("Error deleting contact:", err);
        alert("Failed to delete contact.");
      }
    }
  };

  if (loading) return <div className="loading">Loading contact details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!contact) return <div className="error">Contact data is missing.</div>; // Should not happen if error is handled

  return (
    <div className="contact-detail-container">
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p><strong>Email:</strong> {contact.email}</p>
      {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
      {contact.address && <p><strong>Address:</strong> {contact.address}</p>}
      {/* Add more fields as needed */}

      <div className="contact-actions">
        <Link to={`/edit/${contact.id}`} className="button edit-button">Edit</Link>
        <button onClick={handleDelete} className="button delete-button">Delete</button>
      </div>
    </div>
  );
}

export default ContactDetail;
