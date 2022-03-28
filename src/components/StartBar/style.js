import { makeStyles } from "@material-ui/styles";

const style = makeStyles({
  appbar: {
    top: "calc(100% - 45px)!important",
    zIndex: 2,
  },
  startMenuDivider: {
    marginLeft: "10px",
    marginRight: "5px",
    marginTop: "-4px",
  },
  menu: {
    display: "flex",
    alignItems: "flex-start",
  },
  startMenu: {
    display: "flex",
    flexGrow: 1,
  },
  startMenuButtons: {
    fontWeight: "bold",
  },
  clockButton: {
    display: "flex",
    fontWeight: "bold",
    marginTop: "-4px",
  },
});

export default style;
