import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import NavBar from './components/Navbar/Navbar';
import ContactUs from './pages/ContactUs/ContactUs';
import Feedback from './components/Feedback/Feedback';
import BookAppointment from './pages/BookAppointment/index';
import DownloadReport from './pages/DownloadReport/index';
import Login from "./pages/Login/index";
import Register from "./pages/Register/Register";
import Payment from "./pages/Payment/index";
import FAQs from "./pages/FAQs";
import EditTest from "./pages/EditTest/editTest";
import AdminManagement from "./pages/AdminManagement";
import ExploreTests from './pages/ExploreTests';
import CartProvider from './CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/DownloadReport" element={<DownloadReport />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/FAQPage" element={<FAQs />} />
        <Route path='/ExploreTests' element={<ExploreTests />} />
        <Route path='/editTest' element={<EditTest />} />
        <Route path="/AdminManagement" element={<AdminManagement />} />
      </Routes>
    </CartProvider>
  </Router>
);



