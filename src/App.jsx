import React from "react";
import { useEffect } from "react";
import {
  Navbar,
  Top,
  Projects,
  Skills,
  About,
  Contact,
  Footer,
} from "./containers";
import "./App.css";
import "animate.css";

import "react-tooltip/dist/react-tooltip.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main className="fillheight container">
        <Top />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
