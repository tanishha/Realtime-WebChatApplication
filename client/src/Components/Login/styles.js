import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    component: {
    },
    dialog: {
        display: "block",
        marginTop: '19%',
        marginLeft:"40%",
        width:"200%"
    },
    img: {
        margin: '50px 50px',
        height: "auto",
        width: "auto",
        alignItems:"center"
            },
    title: {
        fontSize: "2em",
        marginTop: 100,
        marginLeft:30,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:" bold"  
    },
    
 }));


export default useStyles