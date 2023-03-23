import React from 'react';
import { Navbar, Top, Projects, Skills, About, Contact, Footer } from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='fillheight'>
        <Top />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
