import React from "react";
import { useState, useEffect } from "react";
import EducationPic from "../photos/kenny-eliason-zFSo6bnZJTw-unsplash.jpg";
import WildlifePic from "../photos/sid-balachandran-_9a-3NO5KJE-unsplash.jpg";
import HealthPic from "../photos/online-marketing-hIgeoQjS_iE-unsplash.jpg";
import { Link } from "react-router-dom";
import {
  Paper,
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Grid,
  CardMedia,
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
          fname: `${user.name.first}`,
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
            height: "50vh",
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
        {/* Start of 2nd Paper for User Impact */}

        <Paper elevation={3}>
          {!post.isLoading ? (
            post.users.map((user) => {
              const { username, fname } = user;
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
                    {userData["name"]}'s Impact
                    </Typography>
                  </Box>
                </Box>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          <Grid container rowSpacing={1}>
            <Grid xs={4} sx={{ padding: "10px" }}>
              <Card
                sx={{
                  backgroundColor: "#8D99AE22",
                  color: "#2B2C42",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  borderRadius: "20px",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "200px",
                    width: "250px",
                    display: "flex",
                    margin: "10px",
                    borderRadius: "20px",
                  }}
                  src={HealthPic}
                  alt="healthpic"
                ></CardMedia>
                <CardContent>
                  <Link to="/students" underline="none" className="link">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingRight: "10px",
                        color: "#2B2C42",
                      }}
                    >
                      Health
                    </Typography>
                  </Link>
                  {/* <Typography>description of company 1</Typography> */}
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={4} sx={{ padding: "10px" }}>
              <Card
                sx={{
                  backgroundColor: "#8D99AE22",
                  color: "#2B2C42",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  borderRadius: "20px",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "200px",
                    width: "250px",
                    display: "flex",
                    margin: "10px",
                    borderRadius: "20px",
                  }}
                  src={EducationPic}
                  alt="education pic"
                />
                <CardContent>
                  <Link to="/teachers" underline="none" className="link">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#2B2C42",
                      }}
                    >
                      Education
                    </Typography>
                  </Link>
                  {/* <Typography>description of Company 2</Typography> */}
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={4} sx={{ padding: "10px" }}>
              <Card
                sx={{
                  backgroundColor: "#8D99AE22",
                  color: "#2B2C42",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  borderRadius: "20px",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "200px",
                    width: "250px",
                    display: "flex",
                    margin: "10px",
                    borderRadius: "20px",
                  }}
                  src={WildlifePic}
                  alt="wildlife pic"
                />
                <CardContent>
                  <Link to="/teachers" underline="none" className="link">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#2B2C42",
                      }}
                    >
                      Wildlife
                    </Typography>
                  </Link>
                  {/* <Typography>description for company 3</Typography> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  );
}

export default Feature1;
