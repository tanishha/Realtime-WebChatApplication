import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    component: {
        display: 'flex'
    },
    leftComponent: {
        width: '30%'
    },
    rightComponent: {
        width: '70%',
        height: '100%',
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)'
    }
}));

export default useStyles