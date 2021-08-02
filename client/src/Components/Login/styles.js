import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    component: {
        display: 'flex'
    },
    dialog: {
        padding: '65px 0 56px 56px',
    },
    img: {
        margin: '50px 0 0 50px',
        height: 264,
        width: 264,
            },
    title: {
        fontSize: 32,
        marginTop: 100,
        marginLeft:30,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:" bold"  
    },
 }));


export default useStyles