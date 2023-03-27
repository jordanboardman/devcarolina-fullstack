import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    console.log("handleing submit...");
    event.preventDefault();
    console.log(event.target);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        // clears form
        event.target.reset();
      })
      .catch((error) => {
        console.log("consoling becasuse there is an error!");
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: "50vw",
            height: "50vh",
            position: "fixed",
            top: "25%",
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {/* Signup */}
          {/* This shows the errors to user:  */}
          {errors.map((error) => (
            <Box> {error} </Box>
          ))}
          <Stack
            onSubmit={handleSubmit}
            margin="20px"
            direction="column"
            spacing={1}
          >
            <Typography variant="h3">Make a Difference</Typography>

            <TextField id="filled-basic" label="Name" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Password" variant="filled" />
            <br />
            <TextField
              id="filled-basic"
              label="Confirm Password"
              variant="filled"
            />
            <br />
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}

export default SignUp;
