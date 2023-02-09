import React from 'react';
import { Navbar, Top, Projects, Skills, Contact, Footer } from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='fillheight'>
        <Top />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
