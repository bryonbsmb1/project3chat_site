import { Container, Typography, InputBase, Button } from "@mui/material";
import { Mail, RestaurantRounded } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import Post from "../Post";


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

const Rightbar = (props) => {
    const classes = useStyles();
    
    const [title, setTitle] = useState('');
    const [content, setConent] = useState('');
    const [category, setCategory] = useState('');

    const handleInputChange = (event) => {
        console.log(event.target);
        if (event.target.name === "title") {
            setTitle(event.target.value);
        }
        if (event.target.name === "content") {
            setConent(event.target.value);
        }
        if (event.target.name === "category") {
            setCategory(event.target.value);
        }
    };


    return(
        <Container className={classes.container}>
            <Container className={classes.textBox}>
            
                <TextField 
                    label="Title" 
                    variant="outlined" 
                    fullWidth 
                    value={title}
                    onChange={handleInputChange}
                    name="title"
                />
                <br/>
                <br/>
                <TextareaAutosize
                    
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="What's happening?"
                    style={{ width: '100%' }}
                    name="content"
                    value={content}
                    onChange={handleInputChange}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                    >
                    
                    {props.categories.map(category => {
                        return (
                            <MenuItem value={category._id} key={category._id}>{category.category}</MenuItem>
                        )
                    })}
                    </Select>
                </FormControl>

            </Container>
            <Button onClick={Post.create}>
            <AddIcon className={classes.add}/>
            </Button>
        
        </Container>
    );
};

export default Rightbar;