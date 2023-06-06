import axios from "axios";
import { useEffect } from "react";
import "../index.css";

// This code logs a user out
export function LogoutLink() {
  const handleClick = () => {
    // event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    window.location.href = "/signin";
  };

  useEffect(handleClick, []);
  return (
    <div id="logout">
      {/* <a href="#" onClick={handleClick}>
        Logout
      </a> */}
    </div>
  );
}

export default LogoutLink;
