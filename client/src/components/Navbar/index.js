import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
  import { makeStyles } from "@mui/styles";
  import { useState } from "react";
  
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
          
            <Badge badgeContent={12} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={34} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar
              alt="User"
              src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_4x3t_992.jpg"
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;