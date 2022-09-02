import "./App.css";
import MainNavbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import React, { useState } from "react";
import Features from "./Sections/Features/Features";
import Spatial from "./Components/Spatial/Spatial";
import Products from "./Sections/Products/Products";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <MainNavbar />
      <About />
      <Features />
      <Spatial />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
