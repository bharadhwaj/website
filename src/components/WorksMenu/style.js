import { makeStyles } from '@material-ui/styles';

const style = makeStyles({
  startMenuStyle: {
    left: 170,
    bottom: 50,
    position: 'relative',
    display: 'inline-block',
  },
  menu: {
    width: 200,
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      fontWeight: 'bolder',
    },
  },
});

export default style;
