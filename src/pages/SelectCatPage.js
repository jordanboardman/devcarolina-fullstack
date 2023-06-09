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

function SelectCatPage() {
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
      {/* Here are the name in the DB Catagory.create(name: "Animal")
                Catagory.create(name: "Health")
                Catagory.create(name: "Enviornment")
                Catagory.create(name: "Hunger")
                Catagory.create(name: "Emergency Response")
                Catagory.create(name: "Education") */}
      <Grid container rowSpacing={1}>
        <Grid xs={4} sx={{ padding: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#8D99AE22",
              color: "#2B2C42",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              borderRadius: "20px",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: "200px",
                width: "250px",
                display: "flex",
                margin: "10px",
                borderRadius: "20px",
              }}
              src={HealthPic}
              alt="healthpic"
            ></CardMedia>
            <CardContent>
              <Link to="/healthpage" underline="none" className="link">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingRight: "10px",
                    color: "#2B2C42",
                  }}
                >
                  Health
                </Typography>
              </Link>
              {/* <Typography>description of company 1</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{ padding: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#8D99AE22",
              color: "#2B2C42",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              borderRadius: "20px",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: "200px",
                width: "250px",
                display: "flex",
                margin: "10px",
                borderRadius: "20px",
              }}
              src={EnviornmentPic}
              alt="environment pic"
            />
            <CardContent>
              <Link to="/enviopage" underline="none" className="link">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingRight: "10px",
                    color: "#2B2C42",
                  }}
                >
                  Enviornment
                </Typography>
              </Link>
              {/* <Typography>description of company 1</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{ padding: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#8D99AE22",
              color: "#2B2C42",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              borderRadius: "20px",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: "200px",
                width: "250px",
                display: "flex",
                margin: "10px",
                borderRadius: "20px",
              }}
              src={WorldHungerPick}
              alt="world hunger pic"
            />
            <CardContent>
              <Link to="/hungerpage" underline="none" className="link">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingRight: "10px",
                    color: "#2B2C42",
                  }}
                >
                  World Hunger
                </Typography>
              </Link>
              {/* <Typography>description of company 1</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{ padding: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#8D99AE22",
              color: "#2B2C42",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              borderRadius: "20px",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: "200px",
                width: "250px",
                display: "flex",
                margin: "10px",
                borderRadius: "20px",
              }}
              src={EmergResPic}
              alt="emergency response picture"
            />
            <CardContent>
              <Link to="/emergpage" underline="none" className="link">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingRight: "10px",
                    color: "#2B2C42",
                  }}
                >
                  Emergency
                </Typography>
              </Link>
              {/* <Typography>description of company 1</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{ padding: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#8D99AE22",
              color: "#2B2C42",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              borderRadius: "20px",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: "200px",
                width: "250px",
                display: "flex",
                margin: "10px",
                borderRadius: "20px",
              }}
              src={EducationPic}
              alt="education pic"
            />
            <CardContent>
              <Link to="/edupage" underline="none" className="link">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#2B2C42",
                  }}
                >
                  Education
                </Typography>
              </Link>
              {/* <Typography>description of Company 2</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} sx={{ padding: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#8D99AE22",
              color: "#2B2C42",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              borderRadius: "20px",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: "200px",
                width: "250px",
                display: "flex",
                margin: "10px",
                borderRadius: "20px",
              }}
              src={WildlifePic}
              alt="wildlife pic"
            />
            <CardContent>
              <Link to="/wildpage" underline="none" className="link">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#2B2C42",
                  }}
                >
                  Wildlife
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default SelectCatPage;
