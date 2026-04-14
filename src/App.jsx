import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contacts.jsx'
import Footer from './components/layout/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
      
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Separate Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
