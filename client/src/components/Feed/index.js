import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Post from "../Post/index";
import useStyles from "./styles";

// const useStyles = makeStyles((theme) => ({
//     container: {
//         paddingTop: theme.spacing(10),
//     }
// }));

const Feed = (props) => {
    console.log(props.posts);
    const classes = useStyles();
    return (
        <Container className={classes.feed}>
        {props.posts.map(post => {
            return (
                <Post data={post} key={post._id}/>
            )
            
        })}
        </Container>
    )
}

export default Feed;