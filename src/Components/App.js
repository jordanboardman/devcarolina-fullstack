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
import HandsPic from "/Users/jordanboardman/Desktop/Projects/devcarolina-fullstack/src/photos/annie-spratt-TBHOuN6URGU-unsplash (1).jpg";
import WaterPumpPic from "/Users/jordanboardman/Desktop/Projects/devcarolina-fullstack/src/photos/pexels-hamza-awan-14325722.jpg";

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
          {/* End what is Rudi */}
          {/* Start who Rudi is for */}
          <CardContent
            sx={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <Typography
              component="h2"
              variant="h5"
              sx={{ fontSize: "62px", fontWeight: "bold", color: "#2B2C42" }}
            >
              Our Partners
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
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                  image=""
                  alt="music note"
                />
                <CardContent>
                  <Link to="/students" underline="none" className="link">
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
                  <Typography>description of company 1</Typography>
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
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                  image=""
                  alt="music note"
                />
                <CardContent>
                  <Link to="/students" underline="none" className="link">
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
                  <Typography>description of company 1</Typography>
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
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                  image=""
                  alt="music note"
                />
                <CardContent>
                  <Link to="/students" underline="none" className="link">
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
                  <Typography>description of company 1</Typography>
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
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                  image=""
                  alt="music note"
                />
                <CardContent>
                  <Link to="/students" underline="none" className="link">
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
                      Emergency Response
                    </Typography>
                  </Link>
                  <Typography>description of company 1</Typography>
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
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                  image="Logos/drumsticks.png"
                  alt="music note"
                />
                <CardContent>
                  <Link to="/teachers" underline="none" className="link">
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
                  <Typography>description of Company 2</Typography>
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
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                  image="Logos/stave.png"
                  alt="music note"
                />
                <CardContent>
                  <Link to="/teachers" underline="none" className="link">
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
                  <Typography>description for company 3</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          {/* end who is Rudi for */}
          {/* Start how it works */}
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
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}
