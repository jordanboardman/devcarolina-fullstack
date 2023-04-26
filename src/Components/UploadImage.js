import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function UploadImage({user}) {
  const [profilePicture, setProfilePicture] = useState(user.profile_picture);

  function handleProfilePictureChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      setProfilePicture(event.target.result);
    };
    // console.log("event.target.result")
    // console.log(event.target.result)
    // console.log("profilePicture")
    // console.log(profilePicture)
    reader.readAsDataURL(file);
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
      <h2>User Profile</h2>
      <div>
        <label htmlFor="profile-picture">Profile Picture:</label>
        <input
          type="file"
          id="profile-picture"
          name="profile-picture"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
      </div>
      <div>
        <img src={profilePicture} alt="Profile" />
      </div>
      <button onClick={handleProfileUpdate}>Update Profile</button>
    </div>
  );
}

export default UploadImage;


