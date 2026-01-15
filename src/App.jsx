import React from 'react';
import Header from './components/Header';
import LandingCarousel from './components/LandingCarousel';
import Hero from './components/Hero';
import Tours from './components/Tours';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-safari">
      <Header />
      <LandingCarousel />
      <main>
        <Hero />
        <Tours />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;