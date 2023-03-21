import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
// import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#698269",
        justifyContent: "space-evenly",
      }}
    >
      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        <Typography sx={{ fontWeight: "bold" }}>
          <Link to="/" className="link">
            Home
          </Link>
        </Typography>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{}}>
      <AppBar
        component="nav"
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            backgroundColor: "#698269",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          {/* Feel free to put a Ripple Logo here */}
          <Box sx={{ display: "flex" }}></Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography sx={{ padding: "10px", fontWeight: "bold" }}>
                <Link to="/" className="link">
                  Home
                </Link>
              </Typography>

              <Button
                variant="contained"
                sx={{ backgroundColor: "#AA5656", borderRadius: "40px" }}
              >
                <Link to="/login" className="link">
                  Login
                </Link>
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#AA5656", borderRadius: "40px" }}
              >
                <Link to="/users" className="link">
                  Register
                </Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#2B2C42",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
