# BioGenix

BioGenix is a comprehensive Pathology Laboratory Management System developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This system facilitates two primary user roles: Admin and Client.

Features:

**Client**
Registration and Login: Clients can register and log in to their accounts securely.
Test Selection and Appointment Booking: Clients can browse available tests, select a test, and book appointments based on the available time slots.
Payment Integration: Integration with Razorpay enables secure online payments for booked appointments.
Pathology Report Delivery: Once the test is conducted, clients will receive the pathology report via email.

**Admin**
Test Management: Admin can manage tests by creating, updating, or deleting available tests in the system.

**Technologies Used**
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Payment Gateway Integration: Razorpay API

**Getting Started**

Prerequisites:
Node.js and npm/yarn installed on your machine
MongoDB installed locally or remote connection details

Installation:
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/BioGenix.git
cd BioGenix

Install dependencies:
For Backend:

bash
Copy code
cd backend
npm install

For Frontend:

bash
Copy code
cd frontend
npm install

Set up environment variables:
Create .env files in both backend and frontend directories following the provided .env.example files.

Run the application:
For Backend:

bash
Copy code
cd backend
npm start

For Frontend:

bash
Copy code
cd frontend
npm start
Access the application in your browser at http://localhost:3000.
