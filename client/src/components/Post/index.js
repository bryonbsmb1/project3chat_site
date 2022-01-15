import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material";
import useStyles from "./styles";

const Post = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                
                    <Grid xs={12}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    { props.data.authorID && props.data.authorID.name}
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    {props.data.title}
                                </Typography>
                                <Typography >
                                    {props.data.content}
                                </Typography>
                                <Typography variant="h7">
                                    {props.data.categoryID && props.data.categoryID.category}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                Like
                                </Button>
                                <Button size="small" color="primary">
                                Comment
                                </Button>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                
                </Grid>
            </Container>
    )
}

export default Post;