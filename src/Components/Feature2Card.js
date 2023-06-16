import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from 'axios';
import {useState} from 'react'
// GET call to the backend here

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Feature2Card(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [nonprofits, setNonprofits]= useState([])
  const [buttonText, setButtonText]= useState("Add To Plan")

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToPlan= () => {
    const user_id = window.localStorage.getItem(`user_id`);
    axios.patch(`http://localhost:3000/user/${user_id}`, {my_new_nonprofit: props.id})
 .then(response => {
      console.log(response.data);
      setButtonText('Added!')
 })
  .catch(error => {
    console.error('Error updating profile', error);
  });


  };



  return (
    <Card sx={{ maxWidth: 345 }} style={{padding: "2em"}}>
      <Typography variant="h4">{props.name}</Typography>

      <CardMedia
        component="img"
        height="194"
        image={props.picture}
        alt="ripple business picture"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* Here's where the GET request fuction will be called */}
        <IconButton aria-label="add to favorites">
          <AddIcon onClick={addToPlan} />
        </IconButton>
        <Typography>
          <b>{buttonText}</b>
        </Typography>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.website}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Feature2Card;
