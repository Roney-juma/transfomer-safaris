import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnimalCarousel from './components/AnimalCarousel';
import Tours from './components/Tours';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-safari">
      <Header />
      <main>
        <Hero />
        <AnimalCarousel />
        <Tours />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;