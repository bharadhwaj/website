import React from "react";
import clsx from "clsx";
import {
  Anchor,
  Button,
  Checkbox,
  Cutout,
  Divider,
  Fieldset,
  Tab,
  Tabs,
  TabBody,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import Draggable from "react-draggable";

import style from "./style";

import LogoIcon from "../../components/LogoIcon";

import { WINDOW } from "../../constants";

const Trakstar = () => {
  const classes = style();

  return (
    <Cutout>
      <Fieldset className={classes.descriptionArea}>
        <div className={classes.titleArea}>
          <h1 className={classes.title}>TRAKSTAR</h1>
          <Button square>
            <Anchor href='https://trakstar.com' target='_blank'>
              <LogoIcon image='/icons/internet.png' alt='' size={30} />
            </Anchor>
          </Button>
        </div>

        <div className={classes.titleArea}>
          <LogoIcon image='/icons/computer.png' alt='' />
          <h2 className={classes.subtitle}>Full Stack Engineer</h2>
        </div>

        <div className={classes.titleArea}>
          <h3 className={classes.subtitle}>April 2020 - Present</h3>
        </div>

        <Divider />

        <div className={classes.explanationArea}>
          <div>
            <Checkbox
              readOnly
              checked
              label='Working on integrating multiple business verticals under a singlehood.'
              value='-'
            />
          </div>
          <div>
            <Checkbox
              readOnly
              checked
              label='Building applicant tracking and performance management platform.'
              value='-'
            />
          </div>
        </div>
      </Fieldset>
    </Cutout>
  );
};

const Basis = () => {
  const classes = style();

  return (
    <Cutout>
      <Fieldset className={classes.descriptionArea}>
        <div className={classes.titleArea}>
          <h1 className={classes.title}>BASIS</h1>
          <Button square>
            <Anchor href='https://getbasis.co' target='_blank'>
              <LogoIcon image='/icons/internet.png' alt='' size={30} />
            </Anchor>
          </Button>
        </div>

        <div className={classes.titleArea}>
          <LogoIcon image='/icons/computer.png' alt='' />
          <h2 className={classes.subtitle}>Full Stack Engineer</h2>
        </div>

        <div className={classes.titleArea}>
          <h3 className={classes.subtitle}>August 2018 - March 2020</h3>
        </div>

        <Divider />

        <div className={classes.explanationArea}>
          <div>
            <Checkbox readOnly checked label='Lead Backend Engineering and Web development.' value='-' />
          </div>
          <div>
            <Checkbox readOnly checked label='Built online Direct Mutual Fund Investment Platform.' value='-' />
          </div>
          <div>
            <Checkbox readOnly checked label='Built in-app community and card based learning modules' value='-' />
          </div>
        </div>
      </Fieldset>
    </Cutout>
  );
};

const QBurst = () => {
  const classes = style();

  return (
    <Cutout>
      <Fieldset className={classes.descriptionArea}>
        <div className={classes.titleArea}>
          <h1 className={classes.title}>QBURST</h1>
          <Button square>
            <Anchor href='https://qburst.com' target='_blank'>
              <LogoIcon image='/icons/internet.png' alt='' size={30} />
            </Anchor>
          </Button>
        </div>

        <div className={classes.titleArea}>
          <LogoIcon image='/icons/computer.png' alt='' />
          <h2 className={classes.subtitle}>Full Stack Engineer</h2>
        </div>

        <div className={classes.titleArea}>
          <h3 className={classes.subtitle}>August 2016 - August 2018</h3>
        </div>

        <Divider />

        <div className={classes.explanationArea}>
          <div>
            <Checkbox readOnly checked label='Worked as full stack developer.' value='-' />
          </div>
          <div>
            <Checkbox readOnly checked label='Built Chatbots using IBM Watson and Amazon Lex.' value='-' />
          </div>
          <div>
            <Checkbox readOnly checked label='Built an open-source library Fubar Charts' value='-' />
          </div>
        </div>
      </Fieldset>
    </Cutout>
  );
};

const HashInfinity = () => {
  const classes = style();

  return (
    <Cutout>
      <Fieldset className={classes.descriptionArea}>
        <div className={classes.titleArea}>
          <h1 className={classes.title}>HASHINFINITY</h1>
        </div>

        <div className={classes.titleArea}>
          <LogoIcon image='/icons/computer.png' alt='' />
          <h2 className={classes.subtitle}>Cofounder, Engineer</h2>
        </div>

        <div className={classes.titleArea}>
          <h3 className={classes.subtitle}>June 2015 - August 2016</h3>
        </div>

        <Divider />

        <div className={classes.explanationArea}>
          <div>
            <Checkbox readOnly checked label='Built - castNcrew - LinkedIn for Advertisement Industry.' value='-' />
          </div>
          <div>
            <Checkbox readOnly checked label='Worked as Designer and Engineer.' value='-' />
          </div>
          <div>
            <Checkbox readOnly checked label='Shutdown August 2016' value='-' />
          </div>
        </div>
      </Fieldset>
    </Cutout>
  );
};

const Work = (props) => {
  const { activeTab = 1 } = props;
  if (activeTab === 1) {
    return <Trakstar />;
  }

  if (activeTab === 2) {
    return <Basis />;
  }

  if (activeTab === 3) {
    return <QBurst />;
  }

  return <HashInfinity />;
};

const ExperienceWindow = (props) => {
  const {
    activeWindow,
    isVisible,
    isMinimized,
    isMaximized,
    setExperienceWindowActive,
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
      defaultClassName={clsx(activeWindow === WINDOW.EXPERIENCE && classes.activeWindow)}
      bounds='parent'
      handle='header'
      defaultPosition={{ x: -20, y: 70 }}
    >
      <Window
        className={clsx(isMaximized ? classes.maximizedScreen : classes.minimizedScreen)}
        onClick={setExperienceWindowActive}
      >
        <header>
          <WindowHeader className={classes.headerArea}>
            <div>
              <span>experience.exe</span>
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
              Trakstar
            </Tab>
            <Tab className={clsx(activeTab === 2 && classes.boldText)} value={2}>
              Basis
            </Tab>
            <Tab className={clsx(activeTab === 3 && classes.boldText)} value={3}>
              QBurst
            </Tab>
            <Tab className={clsx(activeTab === 4 && classes.boldText)} value={4}>
              HashInfinity
            </Tab>
          </Tabs>
          <TabBody>
            <Work activeTab={activeTab} />
          </TabBody>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default ExperienceWindow;
