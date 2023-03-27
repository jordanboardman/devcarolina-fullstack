import React from "react";
import { Paper, Box, Typography } from "@mui/material";
// import axios from 'axios';


function Feature1() {
//   const [userData, setUserData] = useState([])
//   const handleUserShow () => {
//     console.log('handling submitt');
//     axios.get("http://localhost:3000/users/1.json").then((response)=> {
//       console.log(response.data)
//     })
// }

  return (
    // <div>
    // <button onClick={handleProductsIndex}> Get User Data</button>
    // </div>

    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: "8px",
          width: "32vw",
          height: "80vh",
          marginTop: "58px",
          backgroundColor: "#B99B6B",
        },
      }}
    >
      <Paper elevation={3}>
        <Typography display="flex" justifyContent="center">
          Ar vatarrrrhere
        </Typography>
        <br />
        <Typography>Username</Typography>
        <br />
        <Box>
          <Paper sx={{ backgroundColor: "#F1DBBF" }}>hello</Paper>
        </Box>
      </Paper>
      <Paper elevation={3} />
      <Paper elevation={3} />
    </Box>
  );
}

export default Feature1;
