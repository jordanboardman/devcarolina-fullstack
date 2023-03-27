import React from "react";
import { Paper, Box, Typography, Avatar } from "@mui/material";
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
          {!post.isLoading ? (
            post.users.map((user) => {
              const { username, name, email, image } = user;
              return (
                <Box key={username}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography>{name}</Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Avatar
                      sx={{
                        width: 150,
                        height: 150,
                      }}
                      src={image}
                      alt={name}
                    />
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography>{username}</Typography>
                  </Box>
                </Box>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </Paper>
        <Paper elevation={3} />
        <Paper elevation={3} />
      </Box>
    </React.Fragment>
  );
}

export default Feature1;
