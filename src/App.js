import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
       
        <Router>
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
        {/* <About /> */}
      </div>
    </>
  );
};

export default App;
