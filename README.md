Contact Book Web Application

A React-based Contact Book web application that allows users to view, search, add, edit, and delete contacts using Firebase Firestore as the backend database. The app uses React Router for client-side routing and Firebase for data storage.

## Features

- Display all contacts sorted alphabetically by last name.
- Search contacts by first or last name.
- View detailed information for each contact.
- Add new contacts through a form.
- Edit existing contacts.
- Delete contacts with confirmation.
- Responsive and user-friendly UI.

## Technologies Used

- React 18
- React Router v6
- Firebase Firestore
- Vite (for development tooling)
- CSS Modules for styling

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn
- A Firebase project with Firestore enabled

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mtm6404-contact-book-react.git
   cd mtm6404-contact-book-react
Install dependencies:

bash
Copy
Edit
npm install
Configure Firebase:

Create a Firebase project in the Firebase Console.

Enable Firestore Database.

Populate the contacts collection with some documents.

Copy your Firebase config and update src/db.js:

js
Copy
Edit
// src/db.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
Start the development server:

bash
Copy
Edit
npm run dev
Open your browser and visit http://localhost:3000 (or the port shown in the terminal).

Project Structure
bash
Copy
Edit
src/
  components/
    ContactList.jsx      # List and search contacts
    ContactDetail.jsx    # Show individual contact details with edit/delete
    ContactForm.jsx      # Add/Edit contact form
  db.js                 # Firebase initialization and Firestore export
  App.jsx               # Main React app with routing
  index.jsx             # Entry point
  App.css               # Global styling
Usage
Navigate to the home page to see all contacts.

Use the search bar to filter contacts by name.

Click a contact name to view details.

Use "Add New Contact" to create a new contact.

In the detail view, click "Edit" to update or "Delete" to remove the contact.

Notes
All data is stored in Firebase Firestore.

The app uses React Router v6 for client-side navigation.

Only use Firebase methods and React concepts covered in the course.

License
This project is for educational purposes only.

