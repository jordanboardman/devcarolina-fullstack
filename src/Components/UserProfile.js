import React from "react";
import { useState, useEffect } from "react";
import EducationPic from "../photos/kenny-eliason-zFSo6bnZJTw-unsplash.jpg";
import WildlifePic from "../photos/sid-balachandran-_9a-3NO5KJE-unsplash.jpg";
import HealthPic from "../photos/online-marketing-hIgeoQjS_iE-unsplash.jpg";
import { Link } from "react-router-dom";
import UpdateUserProfile from "./UpdateUserProfile";
import UploadImage from "./UploadImage";

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

function UserProfile() {
  const [user, setUser] = useState({});
  const [nonprofits, setNonprofits] = useState([])

  const handleUserShow = () => {
    console.log("inUsershowpage");
    const user_id = window.localStorage.getItem(`user_id`);
    console.log("user_id");
    console.log(user_id);
    axios.get(`http://localhost:3000/user/${user_id}.json`).then((response) => {
      console.log(response.data)
      setUser(response.data);
      setNonprofits(response.data["my_nonprofits"]);
    })
  };

  useEffect(handleUserShow, []);

  const [post, setPost] = React.useState({
    users: [],
    isLoading: true,
    errors: null,
  });

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: "8px",
            width: "35vw",
            height: "85vh",
            marginTop: "58px",
            backgroundColor: "#B99B6B",
          },
        }}
      >
        <Paper elevation={3}>
          {/* <button onClick={handleUserData}>GetUserData</button> */}
          {/* <UpdateUserProfile user={user} setUser={setUser} /> */}

          <Box
            key={user}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#F1DBBF",
              padding: "20px",
              margin: "20px",
              borderRadius: "20px",
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
                {user["name"]}
              </Typography>
            </Box>

            <Box marginTop={5}>
              <Avatar
                sx={{
                  width: 175,
                  height: 175,
                }}
                src={user["profile_picture"]}
                alt={user["name"]}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <UploadImage user={user} setUser={setUser} />
            </Box>
            <Box marginTop={5} sx={{ display: "flex" }}>
              <Card sx={{ display: "flex", minWidth: 275 }}>
                <CardContent>
                  <Box>
                    <Typography>Username: {user["email"]}</Typography>
                  </Box>
                  <Box>
                    <Typography>bio: {user["bio"]}</Typography>
                  </Box>
                  <Box>
                    <Typography> passion: {user["passion"]}</Typography>
                  </Box>
                  <Box>
                    <Typography>location: {user["location"]}</Typography>
                  </Box>
                  <Box>
                    <Typography>
                      monthly giving: {user["monthly_donation_amount"]}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <UpdateUserProfile user={user} setUser={setUser} />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Paper>
        {/* Start of 2nd Paper for User Impact */}

        <Paper elevation={3}>
          <Box
            key={user}
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
                {user["name"]}'s Impact
              </Typography>
            </Box>
          </Box>

          <Grid container rowSpacing={1}>
            {nonprofits.map(nonprofit => (
            <Grid key={nonprofit.id} xs={4} sx={{ padding: "10px" }}>        
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
                  src={nonprofit.picture}
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
                      {nonprofit.name}
                    </Typography>
                  </Link>
                  {/* <Typography>description of company 1</Typography> */}
                </CardContent>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  );
}

export default UserProfile;
