import React from "react";
import Layout from "./Layout/Layout";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/about">About</Route>
        <Route path="/portfolio">POrtfolio</Route>
        <Route path="/contact"> Contact</Route>
      </Layout>
    </Router>
  );
}

export default App;
