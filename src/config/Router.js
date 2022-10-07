import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import FilledDashboard from "../pages/FilledDashboard";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ZeroDashboard from "../pages/ZeroDashboard";

const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/newdashboard" element={<ZeroDashboard />} />
          <Route exact path="/userdashboard" element={<FilledDashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
