import React from "react";
import Feature2Card from "../components/Feature2Card";
import { Box, Typography } from "@mui/material";
import { DATA } from "../data";

function EduPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            marginTop: "10px",
            backgroundColor: "#AA5656",
            borderRadius: "25px",
            padding: "10px",
            color: "#F1DBBF",
          }}
          variant="h2"
        >
          Support
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
          margin: "20px",
          backgroundColor: "#B99B6B",
          borderRadius: "20px",
        }}
      >
        {/* Here's where I mapped through the objects in the data.js file as a dummy API */}
        {/* {DATA.map((product) => (
          <Feature2Card data={product} />
        ))} */}
      </Box>
    </>
  );
}

export default EduPage;
