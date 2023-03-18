import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Error from "./components/Error";
import Feature1 from "./components/Feature1";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
          <Route path="/feature1" element={<Feature1 />} />
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
);
