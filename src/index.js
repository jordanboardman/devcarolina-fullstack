import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "./Components/layout/BaseLayout.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import SignUp from "./Components/SignUp";
import Error from "./Components/Error";
import Feature1 from "./Components/Feature1";
import About from "./Components/About";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Register />} />
          <Route path="*" element={<Error />} />
          <Route path="/feature1" element={<Feature1 />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
);
