// This is the new component that populates when addToPlan is clicked in the Feature2Card component.
import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ShopContext } from "../context/plan-context";
import RemoveIcon from "@mui/icons-material/Remove";

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

function PlanItem(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Here's the useContext stuff
  const { removeFromPlan } = useContext(ShopContext);

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
        {/* removeFromPlan is currently broken :-( Not sure how to fix it as of yet. */}
        <IconButton
          aria-label="add to favorites"
          onClick={() => removeFromPlan(id)}
        >
          <RemoveIcon />
        </IconButton>
        <Typography>Added!</Typography>

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

export default PlanItem;
