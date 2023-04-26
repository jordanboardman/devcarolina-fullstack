import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export const UploadImage = ({ user }) => {
const [selectedFile, setSelectedFile] = useState(null);
const [fileContents, setFileContents] = useState(null);
const [imageSrc, setImageSrc] = useState(null);


//this function sets "file" to the chosen file
const handleFileChange = (event) => {
  console.log(event.target.files[0])
  const file = event.target.files[0];
  setSelectedFile(file);
  setImageSrc(URL.createObjectURL(event.target.files[0]));
  console.log("imageSource")
  console.log(imageSrc)


  // this function reads the file
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setFileContents(reader.result);
  };

};

const handleProfilePictureUpload =  () => {
  const formData = new FormData();
  formData.append('user[profile_picture]', selectedFile);
  console.log("selectedFile")
  console.log(selectedFile["name"])
  console.log("formData")
  console.log(formData.append)

  fetch(`http://localhost:3000/user/${user.id}`, {
    method: 'PATCH',
    body: formData,
    credentials: 'include' // Include cookies in the request
  })
    .then(response => {
      console.log(response.data);
      // Handle the response from the server
    })
    .catch(error => {
      // Handle errors that may occur during the request
    });
};

  const handleUpdateProfile = (event) => {
    event.preventDefault();
console.log(event.target)
    axios.patch(`http://localhost:3000/user/${user.id}`, selectedFile)
.then(response => {
  // Handle successful response from server
  console.log(response.data);
  // setUpdatedUser(response.data);
})

  }
  

return (

<div>

      <label htmlFor="file-upload">Choose a file:</label>
      <input type="file" onChange={handleFileChange} />
      {imageSrc && <img src={imageSrc} alt="Uploaded file preview" />}

      {/* {fileContents && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          {selectedFile.type.startsWith('image') ? (
            <img src={fileContents} alt={selectedFile.name} />
          )  :  (
            <a href={fileContents} download={selectedFile.name}>
              Download {selectedFile.name}
            </a>
          )}
          <button onClick={handleProfilePictureUpload}>Upload</button>
        </div>
      )} */}
    </div>

);


};

export default UploadImage;


