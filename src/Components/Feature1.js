import React from "react";
import { useState, useEffect } from "react";
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
  const [userData, setUserData] = useState([])
  const handleUserShow = () => {
    const user_id = window.localStorage.getItem(`user_id`)
      console.log("user_id")
      console.log(user_id)
      // console.log("props")
      // console.log(user)
      axios.get(`http://localhost:3000/user/${user_id}.json`).then(response =>
      {console.log(response.data.message);
        console.log("Set User Data");
        setUserData(response.data.message);
      })
  }
  
  useEffect(handleUserShow, [])

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
                    {userData["name"]}
                    </Typography>
                  </Box>

                  <Box marginTop={5}>
                    <Avatar
                      sx={{
                        width: 175,
                        height: 175,
                      }}
                      src={userData["profile_picture"]}
                      alt={userData["name"]}
                    />
                  </Box>
                  <Box marginTop={5}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Box>
                          <Typography>Username: {userData["email"]}</Typography>
                        </Box>
                        <Box>
                          <Typography>bio: {userData["bio"]}</Typography>
                        </Box>
                        <Box>
                          <Typography> passion: {userData["passion"]}</Typography>
                        </Box>
                        <Box>
                          <Typography>location: {userData["location"]}</Typography>
                        </Box>
                        <Box>
                          <Typography>monthly giving: {userData["monthly_donation_amount"]}</Typography>
                        </Box>
                        <Box>
                          <Typography> my_links: {userData["links"]}</Typography>
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
        <Paper elevation={3} />
      </Box>
    </React.Fragment>
  );
}

export default Feature1;
