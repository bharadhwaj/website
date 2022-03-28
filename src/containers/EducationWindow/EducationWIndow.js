import React from "react";
import clsx from "clsx";
import { Button, Cutout, Fieldset, Tab, Tabs, TabBody, Window, WindowContent, WindowHeader } from "react95";
import Draggable from "react-draggable";

import style from "./style";

import { WINDOW } from "../../constants";

const College = () => {
  const classes = style();

  return (
    <Cutout>
      <Fieldset className={classes.descriptionArea}>
        <div className={classes.titleArea}>
          <h1 className={classes.title}>NSS COLLEGE OF ENGINEERING, PALAKKAD</h1>
        </div>

        <div className={classes.titleArea}>
          <h2 className={classes.subtitle}>B.Tech in Computer Science and Engineering</h2>
        </div>

        <div className={classes.titleArea}>
          <h3 className={classes.subtitle}>2012 - 2016</h3>
        </div>
      </Fieldset>
    </Cutout>
  );
};

const Schooling = () => {
  const classes = style();

  return (
    <Cutout>
      <Fieldset className={classes.descriptionArea}>
        <div className={classes.titleArea}>
          <h1 className={classes.title}>VIJAYAMATHA CONVENT H S S</h1>
        </div>

        <div className={classes.titleArea}>
          <h2 className={classes.subtitle}>Computer Science</h2>
        </div>

        <div className={classes.titleArea}>
          <h3 className={classes.subtitle}>2009 - 2012</h3>
        </div>
      </Fieldset>
    </Cutout>
  );
};

const EducationWindow = (props) => {
  const {
    activeWindow,
    isVisible,
    isMinimized,
    isMaximized,
    setEducationWindowActive,
    minimizeWindow,
    toggleMaximizeWindow,
    closeWindow,
  } = props;

  const classes = style();

  const [activeTab, setActiveTab] = React.useState(1);

  if (!isVisible || isMinimized) {
    return null;
  }

  return (
    <Draggable
      defaultClassName={clsx(activeWindow === WINDOW.EDUCATION && classes.activeWindow)}
      bounds='parent'
      handle='header'
      defaultPosition={{ x: 0, y: 60 }}
    >
      <Window
        className={clsx(isMaximized ? classes.maximizedScreen : classes.minimizedScreen)}
        onClick={setEducationWindowActive}
      >
        <header>
          <WindowHeader className={classes.headerArea}>
            <div>
              <span>education.exe</span>
            </div>
            <div>
              <Button className={classes.actionButtons} size={"sm"} square onClick={minimizeWindow}>
                <span>-</span>
              </Button>
              <Button className={classes.actionButtons} size={"sm"} square onClick={toggleMaximizeWindow}>
                <span>□</span>
              </Button>
              <Button className={classes.actionButtons} size={"sm"} square onClick={closeWindow}>
                <span>x</span>
              </Button>
            </div>
          </WindowHeader>
        </header>

        <WindowContent>
          <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
            <Tab className={clsx(activeTab === 1 && classes.boldText)} value={1}>
              College
            </Tab>
            <Tab className={clsx(activeTab === 2 && classes.boldText)} value={2}>
              Schooling
            </Tab>
          </Tabs>
          <TabBody>{activeTab === 1 ? <College /> : <Schooling />}</TabBody>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default EducationWindow;
