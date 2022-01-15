import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Post from "../Post/index";
import useStyles from "./styles";

// const useStyles = makeStyles((theme) => ({
//     container: {
//         paddingTop: theme.spacing(10),
//     }
// }));

const Feed = () => {
    const classes = useStyles();
    return (
        <Container className={classes.feed}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </Container>
    )
}

export default Feed;