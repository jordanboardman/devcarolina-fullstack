import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Image from "mui-image";
import HandsPic from "../photos/annie-spratt-TBHOuN6URGU-unsplash (1).jpg";
import WaterPumpPic from "../photos/pexels-hamza-awan-14325722.jpg";
import HealthPic from "../photos/online-marketing-hIgeoQjS_iE-unsplash.jpg";
import EnviornmentPic from "../photos/thomas-richter-B09tL5bSQJk-unsplash.jpg";
import WorldHungerPick from "../photos/muhammad-muzamil-7S9x9US26Ow-unsplash.jpg";
import EmergResPic from "../photos/mat-napo-ejWJ3a92FEs-unsplash.jpg";
import EducationPic from "../photos/kenny-eliason-zFSo6bnZJTw-unsplash.jpg";
import WildlifePic from "../photos/sid-balachandran-_9a-3NO5KJE-unsplash.jpg";
import Feature2Card from "./Feature2Card";

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottom: "20px",
  fontSize: "39px",
}));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="person with changes in hands"
          src="public/photos/hands-with-change.jpg"
        /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <Image
            src={HandsPic}
            alt="hands"
            display="flex"
            justifyContent="center"
            showLoading={true}
          />
        </Box>

        <Box
          sx={{
            pt: 20,
            pb: 20,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#2B2C42"
              gutterBottom
            >
              <i>Spare</i> Change Can Create <i>Big Change</i>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Helping businesses and non-profits gain the yearly funding they
              deserve
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link to="/about" underline="none" className="link">
                <Button
                  size="large"
                  sx={{
                    borderRadius: "52px",
                    height: "77px",
                    width: "317px",
                    backgroundColor: "#AA5656",
                  }}
                  variant="contained"
                >
                  Learn More
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid item xs={12} md={6} sx={{ pb: 10 }}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: "19%", display: { xs: "none", sm: "block" } }}
                src={WaterPumpPic}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  component="h2"
                  variant="h5"
                  sx={{
                    fontSize: "62px",
                    fontWeight: "bold",
                    color: "#2B2C42",
                  }}
                >
                  What Is Ripple?
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Ripple is an opportunity for everyday people to donate what
                  they can to select businesses and nonprofits that are out in
                  the world doing great work. Funding is always a major issue
                  for folks who are out in the front lines trying to make a
                  difference. Give what you can every month and let the pros
                  handle the rest!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Start OUR IMPACT */}
          <CardContent
            sx={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <Typography
              component="h2"
              variant="h5"
              sx={{ fontSize: "62px", fontWeight: "bold", color: "#2B2C42" }}
            >
              Our Impact
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
                  {/* <Typography>description for company 3</Typography> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Start HOW IT WORKS */}
          <CardContent
            sx={{ flex: 1, display: "flex", justifyContent: "center", pt: 10 }}
          >
            <Typography
              component="h2"
              variant="h5"
              sx={{ fontSize: "62px", fontWeight: "bold", color: "#2B2C42" }}
            >
              How It Works
            </Typography>
          </CardContent>
          <Stack spacing={2} sx={{ pb: 18, display: "flex" }}>
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <img src="/Logos/equalizer.png" alt="" />
              Pick your favorite businesses and/or nonprofits
            </Item>
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <img src="/Logos/medal.png" alt="" />
              Add them to your list
            </Item>
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <img src="/Logos/rock.png" alt="" />
              Set your monthly amount and we'll take care of the rest!
            </Item>

            {/* Start OUR PARTNERS INCLUDE */}
            <CardContent
              sx={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{ fontSize: "62px", fontWeight: "bold", color: "#2B2C42" }}
              >
                Our Partners Include
              </Typography>
            </CardContent>

            <Grid container rowSpacing={1}>
              <Grid xs={6} sx={{ padding: "10px" }}>
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
                  <CardContent>
                    <Feature2Card
                      name="The Ocean Cleanup"
                      statement="Ingenious project led by Boyan Slat"
                      summary="The Ocean Cleanup is a nonprofit environmental engineering organization based in the Netherlands, that develops technology to extract plastic pollution from the oceans and intercept it in rivers before it can reach the ocean."
                      image="https://assets.theoceancleanup.com/app/uploads/2020/01/1911-The-Ocean-Cleanup-BoyaninAsia-DvdK-1111149-960x640.jpg"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={6} sx={{ padding: "10px" }}>
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
                  <CardContent>
                    <Feature2Card
                      name="American Red Cross"
                      statement="This tried and true Non-Profit, founded by Clara Barton, has been serving American for over 100 years"
                      summary="The American Red Cross, also known as the American National Red Cross, is a non-profit humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education in the United States."
                      image="https://www.robeson.edu/wp-content/uploads/redcross.jpg"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={6} sx={{ padding: "10px" }}>
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
                  <CardContent>
                    <Feature2Card
                      name="The Nature Conservancy"
                      statement="Essential for tackling climate change on the front lines"
                      summary="Founded in the U.S. through grassroots action in 1951, The Nature Conservancy (TNC) has grown to become one of the most effective and wide-reaching environmental organizations in the world. Thanks to more than a million members and the dedicated efforts of our diverse staff and over 400 scientists, we impact conservation in 79 countries and territories: 37 by direct conservation impact and 42 through partners."
                      image="https://cooksoncommunications.com/wp-content/uploads/Nature-C-logo.jpg"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={6} sx={{ padding: "10px" }}>
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
                  <CardContent>
                    <Feature2Card
                      name="ASPCA"
                      statement="American Society for the Prevention of Cruelty to Animals"
                      summary="The American Society for the Prevention of Cruelty to Animals is a non-profit organization dedicated to preventing animal cruelty. Based in New York City since its inception in 1866, the organization's mission is to provide effective means for the prevention of cruelty to animals throughout the United States."
                      image="https://yt3.googleusercontent.com/ytc/AGIKgqMzlPHbduSCIRihb1HKZDI-pH0q5Jvd7kTRpnkU2hI=s900-c-k-c0x00ffffff-no-rj"
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}
