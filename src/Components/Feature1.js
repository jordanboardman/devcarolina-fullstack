import React from "react";
import { Paper, Box, Typography } from "@mui/material";

function Feature1() {
  return (
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
          Avatar here
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
