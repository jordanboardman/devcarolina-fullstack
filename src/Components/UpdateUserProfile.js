import React, { useState } from 'react';
import axios from 'axios';


const UpdateUserProfile = ({ user }) => {


  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState('null');
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio)
  const [id, setId] = useState(user.id)
  const [passion, setPassion] = useState(user.passion)
  const [location, setLocation] = useState(user.location)
  
 
  const handleEdit = () => {
    console.log("ineditnow")
    setEditMode(true);
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio);
    setId(user.id);
    setPassion(user.passion);
    setLocation(user.location);
  };

  const handleCancel = () => {
    setEditMode(false);
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio);
    setId(user.id);
    setPassion(user.passion);
    setLocation(user.location);
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
            Username:
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
          <label>
            Passion:
            <textarea value={passion} onChange={(e) => setPassion(e.target.value)} />
          </label>
          <br />
          <label>
            Location:
            <textarea value={location} onChange={(e) => setLocation(e.target.value)} />
          </label>
          <br />
    
          <button onClick={() => handleSave({ name, email, bio, id, passion, location})}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <div>
          {/* <h2>{user.name}'s Profile</h2>
          <p>Name: {user.name}</p>
          <p>Username: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <p>Passion: {user.passion}</p>
          <p>Location: {user.location}</p> */}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UpdateUserProfile;
