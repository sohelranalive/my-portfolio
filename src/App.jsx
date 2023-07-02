import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
// import { Element } from 'react-scroll'


function App() {

  // const location = useLocation();

  // useEffect(() => {
  //   const sectionId = location.hash.substring(1); // Remove the leading '#' from the hash
  //   if (sectionId) {
  //     scrollToSection(sectionId);
  //   }
  // }, [location]);

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  useEffect(() => {
    const handleHashChange = () => {
      const sectionId = window.location.hash.substring(1);
      if (sectionId) {
        scrollToSection(sectionId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </>
    // <Router>
    //   <Navbar />
    //   <Banner />
    //   <Routes>
    //     <Route path="/about" element={<Element name="about"><About /></Element>} />
    //     <Route path="/projects" element={<Element name="project"><Projects /></Element>} />
    //   </Routes>
    //   <Footer />
    //   <ScrollToTop />
    // </Router>
  )
}

export default App
