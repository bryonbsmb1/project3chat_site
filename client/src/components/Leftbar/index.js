import { Container, Typography } from "@mui/material";
import { ArrowRight, Category } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = (props) => {
  const classes = useStyles();
  
  return ( 
    <Container className={classes.container}>
      
      {props.categories.map(category => {
        return (
          <div className={classes.item} key={category._id}>
            <ArrowRight className={classes.icon} />
            <Typography className={classes.text}>{category.category}</Typography>
          </div>
        )
      })}
    </Container>
  );
};

export default Leftbar;