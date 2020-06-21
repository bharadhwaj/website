import { makeStyles } from '@material-ui/styles';

const breakpoint = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 };

const style = makeStyles({
    minimizedScreen: {
        width: '40%',
        [`@media (max-width:${breakpoint['md']}px)`]: {
            width: '60%',
        },
        [`@media (max-width:${breakpoint['sm']}px)`]: {
            width: '70%',
        },
    },
    activeWindow: {
        zIndex: 1,
    },
    maximizedScreen: {
        width: '100%',
        height: '100%',
        transform: 'translate(0px, 0px)!important',
    },
    headerArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'move',
    },
    actionButtons: {
        margin: '1px 2px',
        fontWeight: 'bold',
        transform: 'translateY(-1px)',
    },
    boldText: {
        fontWeight: 600,
    },
    descriptionArea: {
        marginLeft: '5px',
        marginBottom: '5px',
    },
    titleArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        marginRight: 20,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 600,
    },
    explanationArea: {
        marginTop: 10,
        display: 'block',
        marginLeft: '10%',
        marginRight: '10%',
    },
});

export default style;
