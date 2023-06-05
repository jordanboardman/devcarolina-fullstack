import axios from "axios";
import { useState, useEffect } from "react";

export function UserShow () {
  
  const [userData, setUserData] = useState([])

  const handleUserShow = () => {
  const user_id = window.localStorage.getItem(`user_id`)
    console.log("user_id")
    console.log(user_id)
    // console.log("props")
    // console.log(user)
    axios.get(`http://localhost:3000/user/${user_id}.json`).then(response =>
    {console.log(response.data.message);
      console.log("Set User Data");
      setUserData(response.data.message);
    })
}

useEffect(handleUserShow, [])

return(
  <div>
  Name: {userData["name"]}
  <br/>
 Email: {userData["email"]}
  <br/>
 bio: {userData["bio"]}
  <br/>
 passion: {userData["passion"]}
  <br/>
 profile_picture: {userData["profile_picture"]}
  <br/>
 location: {userData["location"]}
  <br/>
 {/* my_links: {userData["links"]} */}
  {/* <br/> */}
 monthly giving: {userData["monthly_donation_amount"]}
  </div>
 )

}



export default UserShow;