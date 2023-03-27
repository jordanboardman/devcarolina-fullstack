import axios from "axios";


// This code logs a user out 
export function LogoutLink(){

  const handleClick = (event) => {
    event.preventDefault();
  delete axios.defaults.headers.common["Authorization"];
localStorage.removeItem("jwt");
window.location.href = "/";
 };

 return(
  <a href="#" onClick={handleClick}>
    Logout
  </a>
 )
}

export default LogoutLink;

