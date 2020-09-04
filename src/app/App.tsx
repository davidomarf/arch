import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";

const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact>
          <Home />
        </Route>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
