import React, { useState } from 'react';
import axios from 'axios';


const UpdateUserProfile = ({ user }) => {


  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState('null');
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio)
  const [id, setId] = useState(user.id)
  
 
  const handleEdit = () => {
    console.log("ineditnow")
    setEditMode(true);
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio);
    setId(user.id);
  };

  const handleCancel = () => {
    setEditMode(false);
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio);
    setId(user.id);
  };

  const handleSave = (user) => {
    console.log("In Save");
    // setUpdatedUser(user);
    console.log(user);
    axios.patch(`http://localhost:3000/user/${user.id}`, user)
    .then(response => {
      // Handle successful response from server
      console.log(response.data);
      setUpdatedUser(response.data);
    })
    window.location.href= "/profile"
    .catch(error => {
      // Handle error response from server
      console.error(error);
    });
    setEditMode(false);

  };

  const handleConfirm = () => {
    // Make an API call to update user profile data with updatedUser
    fetch(`/api/users/${user.id}`, {
      method: "GET",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the user object with the updatedUser data
        // setUser(data);
        setUpdatedUser(null);
      })
      .catch((error) => {
        console.error("Error:", error);
      });


      // Here, we're making a PUT request to the server with the updated user data. Once the request is successful, we update the user state with the updated user data, and reset the updatedUser state to null. We're also handling errors in case the API call fails.
  };
  
  

  return (
    <div>
      {editMode ? (
        <form>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Bio:
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </label>
          <br />
          <button onClick={() => handleSave({ name, email, bio, id})}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <div>
          <h2>{user.name}'s Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
      {updatedUser && (
        <div>
          <p>Confirm changes to your profile:</p>
          <p>Name: {updatedUser.name}</p>
          <p>Email: {updatedUser.email}</p>
          <p>Bio: {updatedUser.bio}</p>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UpdateUserProfile;
