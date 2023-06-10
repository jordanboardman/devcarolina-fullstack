import React from "react";
import Feature2Card from "../components/Feature2Card";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Login } from "@mui/icons-material";


function Category() {

const [nonprofits, setNonprofits] = useState([])
const urlSegment = window.location.href.split('/').pop()


useEffect(() => {
  getNonPorfits();
}, []); // Empty dependency array ensures it only runs once on mount

const getNonPorfits = () => {
  console.log("getting Catagores");
  fetch("http://localhost:3000/nonprofits.json")
  .then (response => response.json())
  .then(data => {
      const filterNonprofits = data.message.filter(nonprofit => nonprofit.catagory_id === parseInt(urlSegment));
      setNonprofits(filterNonprofits);
    })
    .catch(error => {
      console.error('Error fetching nonprofits:', error);
    });
};



  return (
    <>

    <div>Nonprofits
      <ul>
        {nonprofits.map(nonprofit => (
          <li key={nonprofit.id}>{nonprofit.name}</li>
        ))}
      </ul>

      <b> {urlSegment}</b>
    </div>

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
          Catagory
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
        {nonprofits.map(nonprofit => (
          <Feature2Card key={nonprofit.id}
          name={nonprofit.name}
          description={nonprofit.description}
          picture={nonprofit.picture}
          website={nonprofit.website}
        />
        ))}
      </Box>
    </>
  );
}

export default Category;
