import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Image from "mui-image";

const card = (
  <React.Fragment>
    <CardContent sx={{ display: "flex", justifyContent: "center" }}>
      <Typography sx={{}} variant="h5" component="div">
        Oops! Looks like you've encountered an error...
      </Typography>
    </CardContent>
    <CardActions sx={{ display: "flex", justifyContent: "center" }}>
      <Link to="/" underline="none" className="link">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#E13C45", borderRadius: "40px" }}
        >
          Back to Ripple
        </Button>
      </Link>
    </CardActions>
  </React.Fragment>
);

export default function Error() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={500}
        paddingTop={5}
        paddingLeft="710px"
        paddingBottom={5}
      >
        <Image src="https://media4.giphy.com/media/Heqbbp1m3mzJe/giphy.gif?cid=ecf05e47zdfdqdb9z1hxkmwuumoe9z11cewxz8ptee36132i&rid=giphy.gif&ct=g" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minWidth: 275,
        }}
      >
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
}
