import { makeStyles } from "@material-ui/styles";

const style = makeStyles({
  startMenuStyle: {
    position: "relative",
    display: "inline-block",
  },
  menu: {
    width: 170,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      fontWeight: "bolder",
    },
  },
  subMenuItem: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      fontWeight: "bolder",
    },
  },
  subMenuIcon: {
    position:"absolute",
    right: 15
  }
});

export default style;
