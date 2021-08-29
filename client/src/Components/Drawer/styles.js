import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    background: '#00bfa5',
    height: 97,
    color: '#FFFFFF',
    display: 'flex',
    '& > *': {
      marginTop: 'auto',
      padding: 15,
      fontWeight: 600
    }
  },
  component: {
    background: '#ededed',
    height: '85%'
  }
}));

export default useStyles