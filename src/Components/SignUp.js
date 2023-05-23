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

  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    console.log("handleing submit...");
    event.preventDefault();

    const params = new FormData(event.target);

    //axios call to create user
   axios
      .post("http://localhost:3000/user.json", params)
      .then((response1) => {
        console.log("Response 1:", response1.data);

       //reset form
       event.target.reset();

       axios
       .post("http://localhost:3000/sessions.json", params)
       .then((response2) => {
        console.log("Response 2:", response2.data);

        // Set authorization header and store JWT in local storage
        axios.defaults.headers.common["Authorization"] = "Bearer " + response2.data.jwt;
        localStorage.setItem("jwt", response2.data.jwt);
        localStorage.setItem("user_id", response2.data.user_id);

        const user_id = window.localStorage.getItem("user_id");

       window.location.href = "/profile"; //change this to hide a model, redirect to a specific page etc.
        })
        .catch((error) => {
          console.log("Error:", error.response);
          setErrors(["Invalid Email or Password"]);
        });
    })
    .catch((error) => {
      console.log("Error:", error.response.data.errors);
      setErrors(error.response.data.errors);
    });
};

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
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name" type="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
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
