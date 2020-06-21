import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
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

const EducationWindow = (props) => {
    const {
        setEducationWindowVisibility,
        setEducationWindowMinimize,
        setActiveWindow,
        minimizeAllExcept,
        minimizeEducationWindow,
        showEducationWindow,
        activeWindow,
    } = props;

    const classes = style();

    const [fullWindow, setFullWindow] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(1);

    return (
        <>
            {!minimizeEducationWindow && showEducationWindow && (
                <Draggable
                    defaultClassName={clsx(
                        activeWindow === utils.WINDOW_NAME.EDUCATION &&
                            classes.activeWindow
                    )}
                    bounds="parent"
                    handle="header"
                    defaultPosition={{ x: 0, y: 60 }}
                >
                    <Window
                        className={clsx(
                            fullWindow
                                ? classes.maximizedScreen
                                : classes.minimizedScreen
                        )}
                        onClick={() =>
                            setActiveWindow(utils.WINDOW_NAME.EDUCATION)
                        }
                    >
                        <header>
                            <WindowHeader className={classes.headerArea}>
                                <div>
                                    <span>education.exe</span>
                                </div>
                                <div>
                                    <Button
                                        className={classes.actionButtons}
                                        size={'sm'}
                                        square
                                        onClick={() =>
                                            setEducationWindowMinimize(
                                                !minimizeEducationWindow
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
                                                utils.WINDOW_VARIABLES.EDUCATION
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
                                            setEducationWindowVisibility(false)
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
                                    College
                                </Tab>
                                <Tab
                                    className={clsx(
                                        activeTab === 2 && classes.boldText
                                    )}
                                    value={2}
                                >
                                    Schooling
                                </Tab>
                            </Tabs>
                            {activeTab === 1 ? (
                                <TabBody>
                                    <College />
                                </TabBody>
                            ) : (
                                <TabBody>
                                    <Schooling />
                                </TabBody>
                            )}
                        </WindowContent>
                    </Window>
                </Draggable>
            )}
        </>
    );
};

const College = () => {
    const classes = style();

    return (
        <Cutout>
            <Fieldset className={classes.descriptionArea}>
                <div className={classes.titleArea}>
                    <h1 className={classes.title}>
                        NSS COLLEGE OF ENGINEERING, PALAKKAD
                    </h1>
                </div>

                <div className={classes.titleArea}>
                    <h2 className={classes.subtitle}>
                        B.Tech in Computer Science and Engineering
                    </h2>
                </div>

                <div className={classes.titleArea}>
                    <h3 className={classes.subtitle}>2012- 2016</h3>
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

const mapStateToProps = createStructuredSelector({
    activeWindow: windowSelector.getActiveWindow(),
    showEducationWindow: windowSelector.showEducationWindow(),
    minimizeEducationWindow: windowSelector.minimizeEducationWindow(),
});

const mapDispatchToProps = (dispatch) => ({
    setEducationWindowVisibility: (isVisible) => {
        return dispatch(windowAction.setEducationWindowVisibility(isVisible));
    },
    setEducationWindowMinimize: (isMinimized) => {
        return dispatch(windowAction.setEducationWindowMinimize(isMinimized));
    },
    setActiveWindow: (window) => {
        return dispatch(windowAction.setActiveWindow(window));
    },
    minimizeAllExcept: (windowName) => {
        return dispatch(windowAction.minimizeAllExcept(windowName));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationWindow);
