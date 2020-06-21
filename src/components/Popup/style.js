import { makeStyles } from '@material-ui/styles';

const breakpoint = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 };

const style = makeStyles({
  screen: {
    width: '30%',
    [`@media (max-width:${breakpoint['md']}px)`]: {
      width: '50%',
    },
    [`@media (max-width:${breakpoint['sm']}px)`]: {
      width: '60%',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButton: {
    margin: '1px 2px',
    fontWeight: 'bold',
    transform: 'translateY(-1px)',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default style;
