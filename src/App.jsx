import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar, Top, Projects, Skills, Contact, Footer } from './containers'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
