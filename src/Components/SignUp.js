// KEEPING ALL COMMENTED CODE UNTIL THIS WORKS

// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Box, Paper, Button } from "@mui/material";

// export function SignUp() {
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = (event) => {
//     console.log("handleing submit...");
//     event.preventDefault();
//     console.log(event.target);
//     const params = new FormData(event.target);
//     console.log(params);
//     axios
//       .post("http://localhost:3000/user.json", params)
//       .then((response) => {
//         console.log(response.data);
//         // clears form
//         event.target.reset();
//         event.preventDefault();
//         window.location.href = "/profile"; //change this to hide a model, redirect to a specific page etc.
//       })
//       .catch((error) => {
//         console.log("consoling becasuse there is an error!");
//         console.log(error.response.data.errors);
//         setErrors(error.response.data.errors);
//       });
//   };

//   return (
//     <>
//       {/* 1ST ITERATION */}
//       {/* <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           "& > :not(style)": {
//             m: 1,
//             width: "35vw",
//             height: "35vh",
//             position: "fixed",
//             top: "25%",
//           },
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "10px",
//             backgroundColor: "#F1DBBF",
//           }}
//         >
//           <form
//             onSubmit={handleSubmit}
//             margin="20px"
//             direction="column"
//             spacing={1}
//           >
//             <h3>Make a Difference</h3>
//             Name: <input name="name" type="name" />
//             <br />
//             Email: <input name="email" type="email" />
//             <br />
//             Password: <input name="password" type="password"/>
//             <br />
//             Confirm Password: <input name="password" type="password"/>
//             <br />
//             <Box display="flex">
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{ borderRadius: "20px", width: "100px", marginTop: "10px" }}
//               >
//                 Sign Up
//               </Button> */}
//       {/* Signup */}
//       {/* This shows the errors to user:  */}
//       {/* {errors.map((error) => (
//                 <Box> {error} </Box>
//               ))}
//             </Box>
//           </form>
//         </Paper>
//       </Box> */}

//       {/* 2nd ITERATION */}
//     </>
//   );
// }

// export default SignUp;

import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  // Esther's backend call
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    console.log("handleing submit...");
    event.preventDefault();
    console.log(event.target);
    const params = new FormData(event.target);
    console.log(params);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        // clears form
        event.target.reset();
        event.preventDefault();
        window.location.href = "/profile"; //change this to hide a model, redirect to a specific page etc.
      })
      .catch((error) => {
        console.log("consoling becasuse there is an error!");
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  // Not Esther's backend call
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* This shows the errors to user:  */}
      {errors.map((error) => (
        <Box> {error} </Box>
      ))}
    </ThemeProvider>
  );
}
