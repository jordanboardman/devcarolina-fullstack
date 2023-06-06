import React from "react";
import Feature2Card from "../components/Feature2Card";
import { Box, Typography } from "@mui/material";

function EmergPage() {
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
          Emergency Response
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
        <Feature2Card />
        <Feature2Card />
        <Feature2Card />
        <Feature2Card />
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
        <Feature2Card />
        <Feature2Card />
        <Feature2Card />
        <Feature2Card />
      </Box>
    </>
  );
}

export default EmergPage;
