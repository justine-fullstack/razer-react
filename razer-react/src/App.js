import './App.css';
import MainNavbar from './Components/Navbar/Navbar';
import About from './Components/About/About'
import React from 'react';
import Features from './Sections/Features/Features';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <MainNavbar />
      <About />
      <Features />
    </div>
  );
}
