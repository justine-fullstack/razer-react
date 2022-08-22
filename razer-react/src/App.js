import './App.css';
import MainNavbar from './Components/Navbar/Navbar';
import About from './Components/About/About'
import React from 'react';
import Features from './Sections/Features/Features';
import Spatial from './Components/Spatial/Spatial';
import Products from './Sections/Products/Products';
import Contact from './Components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <MainNavbar />
      <About />
      <Features />
      <Spatial />
      <Products />
      <Contact />
    </div>
  );
}
