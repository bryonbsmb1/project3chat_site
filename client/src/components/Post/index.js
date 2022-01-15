import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material";
import useStyles from "./styles";

const Post = () => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                
                    <Grid xs={12}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    User
                                </Typography>
                                <Typography >
                                    This is an example post. This section is used to express your anger towards Crypto and NFTs
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