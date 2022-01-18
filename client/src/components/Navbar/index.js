import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    Button,
    InputBase,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
  import { makeStyles } from "@mui/styles";
  import { useState } from "react";
  import Auth from "../../utils/auth"
  import {
    Link
  } from "react-router-dom"
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      background: "#0492c2"
    },
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.open ? "flex" : "none"),
        width: "70%",
      },
    },
    input: {
      color: "white",
      marginLeft: theme.spacing(1),
    },
    cancel: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    searchButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    icons: {
      alignItems: "center",
      display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
      marginRight: theme.spacing(2),
      
    },
  }));
  
  const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            NFT Forum
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            LAMA
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search..." className={classes.input} />
            
          </div>
          <div className={classes.icons}>
           { Auth.loggedIn()? (
            <Button variant="outlined" color="inherit" onClick={Auth.logout}>
              Logout
            </Button>
           ): (

              
                <Button component={Link} to="/" variant="outlined" color="inherit">
                  Login
                </Button>
             

            
           )}
           
           

          
           
          </div>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;