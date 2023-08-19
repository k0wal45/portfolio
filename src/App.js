import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar  />

        <main className="max-w-screen flex flex-col justify-center ">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>

      <Footer />
    </>
  );
}

export default App;
