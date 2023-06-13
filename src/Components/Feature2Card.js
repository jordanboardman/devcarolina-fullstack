import React, { useContext } from "react";
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
import { ShopContext } from "../context/plan-context";
import { DATA } from "../data";

// USING AS PRODUCT FOR NOW

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { addToPlan } = useContext(ShopContext);

  const { id, description, website } = props.data;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography variant="h4">{id}</Typography>

      <CardMedia
        component="img"
        height="194"
        image={props.picture}
        alt="ripple business picture"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => addToPlan(id)}>
          <AddIcon />
        </IconButton>
        <Typography>
          <b>Add to Plan</b>
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
          <Typography paragraph>{website}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Feature2Card;
