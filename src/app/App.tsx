import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Layout>
    </Router>
  );
}

export default App;
