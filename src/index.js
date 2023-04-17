import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout.js";
import Login from "./components/Login.js";
// import Register from "./components/Register.js";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import UserProfile from "./components/UserProfile";
import About from "./components/About";
import LogoutLink from "./components/LogoutLink";
import UserShow from "./components/UserShow";
import NonprofitsIndex from "./components/NonprofitIndex";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/nonprofits" element={<NonprofitsIndex />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/user" element={<UserShow />} />
          <Route path="/logout" element={<LogoutLink />} />
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
           {/* <Route path="/users" element={<Register />} /> */}
          <Route path="*" element={<Error />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
);
