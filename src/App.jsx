import React from "react";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Introduce from "./Templates/Introduce";
import RoutePages from "./Router/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <RoutePages />
          <Toaster />
        </Layout>
      </Router>
    </>
  );
};

export default App;
