import { Container, Typography, InputBase } from "@mui/material";
import { Mail } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        border: "1px solid #ece7e7",
        position: "sticky"
    }, 
    textBox: {
        height: "50vh",
        width: "20vh",
        border: "1px solid #ece7e7",

    },
    add: {
        color: "#0492c2"
    },
    input: {
        paddingTop: "10px",
        
    }

}))

const Rightbar = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <Container className={classes.textBox}>
            
            <InputBase placeholder="What's happening?" className={classes.input} />

            </Container>
            <AddIcon className={classes.add}/>
        
        </Container>
    );
};

export default Rightbar;