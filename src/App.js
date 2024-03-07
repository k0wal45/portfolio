import About from "./components/About";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar  />

        <main className="max-w-screen flex flex-col justify-center ">
          <Hero />
          <About />
          <Portfolio />
          <Project />
          <Company />
          <Contact />
        </main>

      <Footer />
    </>
  );
}

export default App;
