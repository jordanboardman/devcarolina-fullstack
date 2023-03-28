import axios from "axios";
import { useState, useEffect } from "react";



export function UserShow() {
  
  const [userData, setUserData] = useState([])

  
const handleUserShow = () => {
  axios.get("http://localhost:3000/users/1.json").then(response =>
  {console.log(response.data);
    console.log("Set User Data");
    setUserData(response.data);
  })

  
}

useEffect(handleUserShow, [])

return(
  <div>
  <button onClick={handleUserShow}>
   User Data

  </button>
  </div>
 )

}



export default UserShow;