import axios from "axios";
import "../index.css";

// This code logs a user out
export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div id="logout">
      <a href="#" onClick={handleClick}>
        Logout
      </a>
    </div>
  );
}

export default LogoutLink;
