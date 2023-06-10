import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import HealthPic from "../photos/online-marketing-hIgeoQjS_iE-unsplash.jpg";
import EnviornmentPic from "../photos/thomas-richter-B09tL5bSQJk-unsplash.jpg";
import WorldHungerPick from "../photos/muhammad-muzamil-7S9x9US26Ow-unsplash.jpg";
import EmergResPic from "../photos/mat-napo-ejWJ3a92FEs-unsplash.jpg";
import EducationPic from "../photos/kenny-eliason-zFSo6bnZJTw-unsplash.jpg";
import WildlifePic from "../photos/sid-balachandran-_9a-3NO5KJE-unsplash.jpg";
import axios from "axios";
import { useEffect, useState} from "react";

function SelectCatPage() {
const [catagories, setCatagories] = useState([])

  useEffect(() => {
    getCatagories();
  }, []); // Empty dependency array ensures it only runs once on mount

  const getCatagories = () => {
    console.log("getting Catagores");
    axios.get("http://localhost:3000/catagories.json")
      .then(response => {
        console.log(response.data)
        setCatagories(response.data.message);
      })
      .catch(error => {
        console.error(error);
        // Handle any error that occurs during the request
      });
  };
  

  return (
    <>
      <CardContent sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Typography
          component="h2"
          variant="h5"
          sx={{ fontSize: "62px", fontWeight: "bold", color: "#2B2C42" }}
        >
          What are you most passionate about?
        </Typography>
      </CardContent>
      <Grid container spacing={1}>
      {catagories.map((category) => (
        <Grid item xs={4} key={category.id}>
          <Card
            sx={{
              backgroundColor: '#8D99AE22',
              color: '#2B2C42',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              borderRadius: '20px',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Link to={`/category/${category.id}`} underline="none" className="link">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingRight: '10px',
                    color: '#2B2C42',
                  }}
                >
                  {category.name}
                </Typography>
              </Link>
              <CardMedia
              component="img"
              sx={{
                height: '200px',
                width: '250px',
                display: 'flex',
                margin: '10px',
                borderRadius: '20px',
              }}
              src={category.picture}
              alt="category pic"
            />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
}

export default SelectCatPage;
