import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, Typography } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import ReactModal from 'react-modal';
import TextField from "@mui/material/TextField";
import UploadImage from './UploadImage';
import Feature2Card from './Feature2Card';

const UpdateUserProfile = ({ user }) => {


  // const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState('null');
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio)
  const [id, setId] = useState(user.id)
  const [passion, setPassion] = useState(user.passion)
  const [location, setLocation] = useState(user.location)
  const [modalOpen, setModalOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(user.profile_picture);

  const modalContentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px', // Adjust the width as needed
    background: 'white',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };
 
  const handleEdit = () => {
    console.log("ineditnow")
    // setEditMode(true);
    setModalOpen(true)
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio);
    setId(user.id);
    setPassion(user.passion);
    setLocation(user.location);
    setProfilePicture(user.profile_picture)
  };

  const handleCancel = () => {
    // setEditMode(false);
    setModalOpen(false)
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio);
    setId(user.id);
    setPassion(user.passion);
    setLocation(user.location);
    setProfilePicture(user.profile_picture)
  };

  const handleSave = (user) => {
    console.log("In Save");
    // setUpdatedUser(user);
    console.log(user);
    axios.patch(`http://localhost:3000/user/${user.id}`, user)
    .then(response => {
      // Handle successful response from server
      // console.log(response.data);
      setUpdatedUser(response.data);
    })
    // window.location.href= "/profile"
    // .catch (error => {
    //   // Handle error response from server
    //   console.error(error);
    // });
    // setEditMode(false);
    setModalOpen(false)
  };
  
  return (
    <div>

<button onClick={handleEdit}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
   >
      <ModeEditIcon 
      />
    </button>

    
 {modalOpen && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={modalContentStyles}>
        <form>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>  
          <Typography align="right">Name:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
            fullWidth
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
         
          <br />
          <Grid item xs={4}>  
          <Typography align="right">Location:</Typography>
          </Grid>

          <Grid item xs={8}>
            <TextField
            fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </Grid>
         
          <br />
          <Grid item xs={4}>  
          <Typography align="right">Bio:</Typography>
          </Grid>

          <Grid item xs={8}>
            <TextField
            fullWidth
             value={bio} onChange={(e) => setBio(e.target.value)} />
          </Grid>

          <br />
          <Grid item xs={4}>  
          <Typography align="right">Passion:</Typography>
          </Grid>
                <Grid item xs={8}>
            <TextField
            fullWidth
             value={passion} onChange={(e) => setPassion(e.target.value)} />
            </Grid>
          </Grid>
          <br />
          <Grid item xs={4}>  
          <Typography align="right"> </Typography>
          <UploadImage user={user} value={profilePicture} onChange={(e) => setProfilePicture(e.target.result)} />
          </Grid>
        
          <Button onClick={() => handleSave({ name, email, bio, id, passion, location, profilePicture})}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </form>
        </div>
      </div>
    )}  
        </div>
  
  );
};

export default UpdateUserProfile ;
