import React from "react";
import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";

function Feature1() {
  const [post, setPost] = React.useState({
    users: [],
    isLoading: true,
    errors: null,
  });

  React.useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results")
      .then((response) =>
        response.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.large}`,
        }))
      )
      .then((users) => {
        setPost({
          users,
          isLoading: false,
        });
      })
      .catch((error) => setPost({ error, isLoading: false }));
  }, []);

  if (!post) return null;

  return (
    <React.Fragment>
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
          {/* <button onClick={handleUserData}>GetUserData</button> */}

          {!post.isLoading ? (
            post.users.map((user) => {
              const { username, name, email, image } = user;
              return (
                <Box
                  key={username}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  marginTop={5}
                >
                  <Box
                    sx={{
                      backgroundColor: "#AA5656",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    <Typography color="white" variant="h3">
                      {name}
                    </Typography>
                  </Box>

                  <Box marginTop={5}>
                    <Avatar
                      sx={{
                        width: 175,
                        height: 175,
                      }}
                      src={image}
                      alt={name}
                    />
                  </Box>
                  <Box marginTop={5}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Box>
                          <Typography>Username: {username}</Typography>
                        </Box>
                        <Box>
                          <Typography>Contact: {email}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </Paper>
        <Paper elevation={3} />
      </Box>
    </React.Fragment>
  );
}

export default Feature1;
