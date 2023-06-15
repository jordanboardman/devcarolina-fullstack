import React from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { Typography } from '@mui/material';
import { Button } from '@mui/material';
// import Icon from '@mui/material/Icon';
import './Styles/styles.css';

function UploadImage({user}) {
  const [profilePicture, setProfilePicture] = useState(user.profile_picture);
  const [clicked, setClicked] = useState(true);

  function handleProfilePictureChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      setProfilePicture(event.target.result);
    };
    reader.readAsDataURL(file);
    setClicked(false)
    }

    function handleProfileUpdate() {
      axios.patch(`http://localhost:3000/user/${user.id}`, { profile_picture: profilePicture })
        .then(response => {
          console.log('Profile updated successfully');
        })
        .catch(error => {
          console.error('Error updating profile', error);
        });
        window.location.href= "/profile"
  }

  return (
    <div> 

    {clicked ?
    <div className="custom-file-upload">
      <label htmlFor="profile-picture"></label>
      <input
        type="file"
        id="profile-picture"
        name="profile-picture"
        accept="image/*"
        onChange={handleProfilePictureChange}
      /> 
      </div>
      : 
      <div>
      {/* <img src={profilePicture} alt="Profile" height="150px"/> */}
      <Button variant="outlined"  size="small" onClick={handleProfileUpdate}>Update Profile</Button>
    </div>}
    {/* <div>
      <img src={profilePicture} alt="Profile" height="150px"/>
    </div> */}
    </div>
    );
}
export default UploadImage;

