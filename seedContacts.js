// seedContacts.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzbWyeJrYCLaOZufXR555T-m0iukPz8NI",
  authDomain: "mtm6404-contact-book-rea-fcd17.firebaseapp.com",
  projectId: "mtm6404-contact-book-rea-fcd17",
  storageBucket: "mtm6404-contact-book-rea-fcd17.firebasestorage.app",
  messagingSenderId: "25224252824",
  appId: "1:25224252824:web:ce118b64bcd842ada96fed",
  measurementId: "G-8RXEK1G1KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedContacts() {
  const contacts = [
    {
      firstName: "Alice",
      lastName: "Anderson",
      email: "alice.anderson@example.com",
      phone: "555-1234",
      address: "123 Apple St, Wonderland"
    },
    {
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      phone: "555-5678",
      address: "456 Banana Ave, Fruitville"
    },
    {
      firstName: "Charlie",
      lastName: "Clark",
      email: "charlie.clark@example.com",
      phone: "555-8765",
      address: "789 Cherry Blvd, Sweet City"
    }
  ];

  try {
    for (const contact of contacts) {
      const docRef = await addDoc(collection(db, "contacts"), contact);
      console.log(`Added contact with ID: ${docRef.id}`);
    }
    console.log("All contacts added successfully!");
  } catch (err) {
    console.error("Error adding contacts:", err);
  }
}

seedContacts();
