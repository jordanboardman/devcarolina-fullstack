import React from "react";
import { useState, useEffect, useContext } from "react";
import UpdateUserProfile from "./UpdateUserProfile";
import UploadImage from "./UploadImage";
import { ShopContext } from "../context/plan-context";
import { DATA } from "../data";
import PlanItem from "./PlanItem";

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
  const { planItems } = useContext(ShopContext);

  // console.dir(meow.planItems);

  const handleUserShow = () => {
    console.log("inUsershowpage");
    const user_id = window.localStorage.getItem(`user_id`);
    console.log("user_id");
    console.log(user_id);
    // console.log("props")
    // console.log(user)
    axios.get(`http://localhost:3000/user/${user_id}.json`).then((response) => {
      console.log(response.data.message);
      console.log("Set User Data");
      setUser(response.data.message);
    });
  };

  useEffect(handleUserShow, []);

  const [post, setPost] = React.useState({
    users: [],
    isLoading: true,
    errors: null,
  });

  // if (!post) return null;
  function test() {
    console.log("working");
  }
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
              {/* <UploadImage user={user} setUser={setUser} /> */}
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
            <Grid xs={4} sx={{ padding: "10px" }}>
              {/* User's added cards populate here when addToPlan is clicked in Feature2Card */}
              <Box>
                {planItems.map((product) => {
                  if (planItems[product.id] !== 0) {
                    return <PlanItem data={product} />;
                  }
                  console.log(DATA);
                })}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  );
}

export default UserProfile;
