import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './components/About';
import HomePage from './components/Home';
import Bananas from './components/bananas';
import Pomegranates from './components/Pomegranates';
import BananaPowder from './components/BananaPowder';
import MoringaPowder from './components/MoringaPowder';
import GreenChilli from './components/GreenChilli';
import Onion from './components/Onion';
import Tomato from './components/Tomato';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Use 'element' prop instead of 'component' */}
        <Route path="/bananas" element={<Bananas/>}/>
        <Route path="/pomogranates" element={<Pomegranates />}/>

        <Route path="/bananapowder" element={<BananaPowder />}/>

        <Route path="/moringapowder" element={<MoringaPowder />}/>

        <Route path="/greenchilli" element={<GreenChilli />}/>

        <Route path="/onion" element={<Onion />}/>

        <Route path="/tomato" element={<Tomato />}/>
        <Route path="/contact" element={<Contact />}/>

        <Route path="/about" element={<AboutPage />} /> {/* Use 'element' prop instead of 'component' */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;