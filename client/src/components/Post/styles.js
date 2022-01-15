import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8,0,6),
        backgroundColor: theme.palette.background.paper,
    },
    icon: {
        marginRight: '20px',
    }, 
    button: {

    },
    cardGrid: {
        padding: '40px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles;