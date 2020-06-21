import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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
} from 'react95';
import Draggable from 'react-draggable';

import style from './style';

import LogoIcon from '../../components/LogoIcon';

import { windowAction } from '../../actions';
import { utils } from '../../constants';
import { windowSelector } from '../../selectors';

const ExperienceWindow = (props) => {
    const {
        setExperienceWindowVisibility,
        setExperienceWindowMinimize,
        setActiveWindow,
        minimizeAllExcept,
        minimizeExperienceWindow,
        showExperienceWindow,
        activeWindow,
    } = props;

    const classes = style();

    const [fullWindow, setFullWindow] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(1);

    return (
        <>
            {!minimizeExperienceWindow && showExperienceWindow && (
                <Draggable
                    defaultClassName={clsx(
                        activeWindow === utils.WINDOW_NAME.EXPERIENCE &&
                            classes.activeWindow
                    )}
                    bounds="parent"
                    handle="header"
                    defaultPosition={{ x: -20, y: 70 }}
                >
                    <Window
                        className={clsx(
                            fullWindow
                                ? classes.maximizedScreen
                                : classes.minimizedScreen
                        )}
                        onClick={() =>
                            setActiveWindow(utils.WINDOW_NAME.EXPERIENCE)
                        }
                    >
                        <header>
                            <WindowHeader className={classes.headerArea}>
                                <div>
                                    <span>experience.exe</span>
                                </div>
                                <div>
                                    <Button
                                        className={classes.actionButtons}
                                        size={'sm'}
                                        square
                                        onClick={() =>
                                            setExperienceWindowMinimize(
                                                !minimizeExperienceWindow
                                            )
                                        }
                                    >
                                        <span>-</span>
                                    </Button>
                                    <Button
                                        className={classes.actionButtons}
                                        size={'sm'}
                                        square
                                        onClick={() => {
                                            minimizeAllExcept(
                                                utils.WINDOW_VARIABLES
                                                    .EXPERIENCE
                                            );
                                            setFullWindow(!fullWindow);
                                            return;
                                        }}
                                    >
                                        <span>□</span>
                                    </Button>
                                    <Button
                                        className={classes.actionButtons}
                                        size={'sm'}
                                        square
                                        onClick={() =>
                                            setExperienceWindowVisibility(false)
                                        }
                                    >
                                        <span>x</span>
                                    </Button>
                                </div>
                            </WindowHeader>
                        </header>

                        <WindowContent>
                            <Tabs
                                value={activeTab}
                                onChange={(value) => setActiveTab(value)}
                            >
                                <Tab
                                    className={clsx(
                                        activeTab === 1 && classes.boldText
                                    )}
                                    value={1}
                                >
                                    Recruiterbox
                                </Tab>
                                <Tab
                                    className={clsx(
                                        activeTab === 2 && classes.boldText
                                    )}
                                    value={2}
                                >
                                    Basis
                                </Tab>
                                <Tab
                                    className={clsx(
                                        activeTab === 3 && classes.boldText
                                    )}
                                    value={3}
                                >
                                    QBurst
                                </Tab>
                                <Tab
                                    className={clsx(
                                        activeTab === 4 && classes.boldText
                                    )}
                                    value={4}
                                >
                                    HashInfinity
                                </Tab>
                            </Tabs>
                            {activeTab === 1 ? (
                                <TabBody>
                                    <Recruiterbox />
                                </TabBody>
                            ) : activeTab === 2 ? (
                                <TabBody>
                                    <Basis />
                                </TabBody>
                            ) : activeTab === 3 ? (
                                <TabBody>
                                    <QBurst />
                                </TabBody>
                            ) : (
                                <TabBody>
                                    <HashInfinity />
                                </TabBody>
                            )}
                        </WindowContent>
                    </Window>
                </Draggable>
            )}
        </>
    );
};

const Recruiterbox = () => {
    const classes = style();

    return (
        <Cutout>
            <Fieldset className={classes.descriptionArea}>
                <div className={classes.titleArea}>
                    <h1 className={classes.title}>Applied Training</h1>
                    <Button square>
                        <Anchor href="https://appliedtraining.com/" target="_blank">
                            <LogoIcon image="/icons/internet.png" alt="" size={30} />
                        </Anchor>
                    </Button>
                </div>

                <div className={classes.titleArea}>
                    <LogoIcon image="/icons/computer.png" alt="" />
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
                            label="Working on integrating multiple business verticals under a singlehood."
                            value="-"
                        />
                    </div>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Building applicant tracking and performance management platform."
                            value="-"
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
                        <Anchor href="https://getbasis.co" target="_blank">
                            <LogoIcon image="/icons/internet.png" alt="" size={30} />
                        </Anchor>
                    </Button>
                </div>

                <div className={classes.titleArea}>
                    <LogoIcon image="/icons/computer.png" alt="" />
                    <h2 className={classes.subtitle}>Full Stack Engineer</h2>
                </div>

                <div className={classes.titleArea}>
                    <h3 className={classes.subtitle}>
                        August 2018 - March 2020
                    </h3>
                </div>

                <Divider />

                <div className={classes.explanationArea}>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Lead Backend Engineering and Web development."
                            value="-"
                        />
                    </div>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Built online Direct Mutual Fund Investment Platform."
                            value="-"
                        />
                    </div>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Built in-app community and card based learning modules"
                            value="-"
                        />
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
                        <Anchor href="https://qburst.com" target="_blank">
                            <LogoIcon image="/icons/internet.png" alt="" size={30} />
                        </Anchor>
                    </Button>
                </div>

                <div className={classes.titleArea}>
                    <LogoIcon image="/icons/computer.png" alt="" />
                    <h2 className={classes.subtitle}>Full Stack Engineer</h2>
                </div>

                <div className={classes.titleArea}>
                    <h3 className={classes.subtitle}>
                        August 2016 - August 2018
                    </h3>
                </div>

                <Divider />

                <div className={classes.explanationArea}>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Worked as full stack developer."
                            value="-"
                        />
                    </div>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Built Chatbots using IBM Watson and Amazon Lex."
                            value="-"
                        />
                    </div>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Built an open-source library Fubar Charts"
                            value="-"
                        />
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
                    <LogoIcon image="/icons/computer.png" alt="" />
                    <h2 className={classes.subtitle}>Cofounder, Engineer</h2>
                </div>

                <div className={classes.titleArea}>
                    <h3 className={classes.subtitle}>
                        June 2015 - August 2016
                    </h3>
                </div>

                <Divider />

                <div className={classes.explanationArea}>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Built - castNcrew - LinkedIn for Advertisement Industry."
                            value="-"
                        />
                    </div>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Worked as Designer and Engineer."
                            value="-"
                        />
                    </div>
                    <div>
                        <Checkbox
                            readOnly
                            checked
                            label="Shutdown August 2016"
                            value="-"
                        />
                    </div>
                </div>
            </Fieldset>
        </Cutout>
    );
};

const mapStateToProps = createStructuredSelector({
    activeWindow: windowSelector.getActiveWindow(),
    showExperienceWindow: windowSelector.showExperienceWindow(),
    minimizeExperienceWindow: windowSelector.minimizeExperienceWindow(),
});

const mapDispatchToProps = (dispatch) => ({
    setExperienceWindowVisibility: (isVisible) => {
        return dispatch(windowAction.setExperienceWindowVisibility(isVisible));
    },
    setExperienceWindowMinimize: (isMinimized) => {
        return dispatch(windowAction.setExperienceWindowMinimize(isMinimized));
    },
    setActiveWindow: (window) => {
        return dispatch(windowAction.setActiveWindow(window));
    },
    minimizeAllExcept: (windowName) => {
        return dispatch(windowAction.minimizeAllExcept(windowName));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceWindow);
