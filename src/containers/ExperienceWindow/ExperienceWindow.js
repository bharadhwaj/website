import React from "react";
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

import LogoIcon from "../../components/LogoIcon";

import { WINDOW } from "../../constants";

const PubX = () => {
  return (
    <Cutout>
      <Fieldset className='m-2'>
        <div className='flex flex-col items-center'>
          <span className='flex mb-5'>
            <h1 className='font-extrabold text-2xl mr-3'>PUBX</h1>
            <Button square>
              <Anchor href='https://pubx.ai' target='_blank'>
                <LogoIcon image='/icons/internet.png' alt='' size={30} />
              </Anchor>
            </Button>
          </span>

          <span className='flex items-center mb-5'>
            <LogoIcon image='/icons/computer.png' alt='' />
            <span className='ml-3 font-bold text-lg'>Full Stack Engineer</span>
          </span>

          <span className='font-semibold mb-5'>December 2021 - December 2022</span>
        </div>

        <Divider />

        <div className='mt-3'>
          <Checkbox
            readOnly
            checked
            label='Worked on an ad-tech platform to increase revenue of a website owner'
            value='-'
          />
          <br />
          <Checkbox readOnly checked label='Owned frontend and backend of the application.' value='-' />
        </div>
      </Fieldset>
    </Cutout>
  );
};

const Trakstar = () => {
  return (
    <Cutout>
      <Fieldset className='m-2'>
        <div className='flex flex-col items-center'>
          <span className='flex mb-5'>
            <h1 className='font-extrabold text-2xl mr-3'>TRAKSTAR</h1>
            <Button square>
              <Anchor href='https://trakstar.com' target='_blank'>
                <LogoIcon image='/icons/internet.png' alt='' size={30} />
              </Anchor>
            </Button>
          </span>

          <span className='flex items-center mb-5'>
            <LogoIcon image='/icons/computer.png' alt='' />
            <span className='ml-3 font-bold text-lg'>Full Stack Engineer</span>
          </span>

          <span className='font-semibold mb-5'>April 2020 - December 2021</span>
        </div>

        <Divider />

        <div className='mt-3'>
          <Checkbox
            readOnly
            checked
            label='Worked on integrating multiple business verticals under a singlehood.'
            value='-'
          />
          <br />
          <Checkbox readOnly checked label='Built applicant tracking and performance management platform.' value='-' />
        </div>
      </Fieldset>
    </Cutout>
  );
};

const Basis = () => {
  return (
    <Cutout>
      <Fieldset className='m-2'>
        <div className='flex flex-col items-center'>
          <span className='flex mb-5'>
            <h1 className='font-extrabold text-2xl mr-3'>BASIS</h1>
            <Button square>
              <Anchor href='https://getbasis.co' target='_blank'>
                <LogoIcon image='/icons/internet.png' alt='' size={30} />
              </Anchor>
            </Button>
          </span>

          <span className='flex items-center mb-5'>
            <LogoIcon image='/icons/computer.png' alt='' />
            <span className='ml-3 font-bold text-lg'>Full Stack Engineer</span>
          </span>

          <span className='font-semibold mb-5'>August 2018 - March 2020</span>
        </div>

        <Divider />

        <div className='mt-3'>
          <Checkbox readOnly checked label='Lead Backend Engineering and Web development.' value='-' />
          <br />
          <Checkbox readOnly checked label='Built online Direct Mutual Fund Investment Platform.' value='-' />
          <br />
          <Checkbox readOnly checked label='Built in-app community and card based learning modules' value='-' />
        </div>
      </Fieldset>
    </Cutout>
  );
};

const QBurst = () => {
  return (
    <Cutout>
      <Fieldset className='m-2'>
        <div className='flex flex-col items-center'>
          <span className='flex mb-5'>
            <h1 className='font-extrabold text-2xl mr-3'>QBURST</h1>
            <Button square>
              <Anchor href='https://qburst.com' target='_blank'>
                <LogoIcon image='/icons/internet.png' alt='' size={30} />
              </Anchor>
            </Button>
          </span>

          <span className='flex items-center mb-5'>
            <LogoIcon image='/icons/computer.png' alt='' />
            <span className='ml-3 font-bold text-lg'>Full Stack Engineer & Chatbot Developer</span>
          </span>

          <span className='font-semibold mb-5'>August 2016 - August 2018</span>
        </div>

        <Divider />

        <div className='mt-3'>
          <Checkbox readOnly checked label='Worked as full stack developer on React.js and Node.js.' value='-' />
          <br />
          <Checkbox readOnly checked label='Built Chatbots using IBM Watson and Amazon Lex' value='-' />
          <br />
          <Checkbox readOnly checked label='Built an open-source library Fubar Charts' value='-' />
        </div>
      </Fieldset>
    </Cutout>
  );
};

const HashInfinity = () => {
  return (
    <Cutout>
      <Fieldset className='m-2'>
        <div className='flex flex-col items-center'>
          <span className='flex mb-5'>
            <h1 className='font-extrabold text-2xl'>HASHINFINITY LLC</h1>
          </span>

          <span className='flex items-center mb-5'>
            <LogoIcon image='/icons/computer.png' alt='' />
            <span className='ml-3 font-bold text-lg'>Co-founder, Engineer</span>
          </span>

          <span className='font-semibold mb-5'>June 2015 - August 2016</span>
        </div>

        <Divider />

        <div className='mt-3'>
          <Checkbox readOnly checked label='Built "castNcrew" - LinkedIn for Advertisement Industry.' value='-' />
          <br />
          <Checkbox readOnly checked label='Worked as Designer and Engineer.' value='-' />
          <br />
          <Checkbox readOnly checked label='Shutdown August 2016.' value='-' />
        </div>
      </Fieldset>
    </Cutout>
  );
};

const Work = (props) => {
  const { activeTab = 1 } = props;
  if (activeTab === 2) {
    return <PubX />;
  }

  if (activeTab === 3) {
    return <Trakstar />;
  }

  if (activeTab === 4) {
    return <Basis />;
  }

  if (activeTab === 5) {
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

  const [activeTab, setActiveTab] = React.useState(2);

  if (!isVisible || isMinimized) {
    return null;
  }

  const maximizedWindowClassName = "min-h-[calc(100vh-47px)] min-w-full";
  const normalWindowClassName = "h-[50%] md:w-[60%] w-[90%]";

  return (
    <Draggable
      bounds='parent'
      handle='header'
      defaultPosition={{ x: 0, y: 70 }}
      position={isMaximized && { x: 0, y: 0 }}
    >
      <Window
        className={`font-monospace overflow-y-scroll md:overflow-y-hidden ${
          isMaximized ? maximizedWindowClassName : normalWindowClassName
        } ${activeWindow === WINDOW.EXPERIENCE ? "z-10" : "z-1"}`}
        onClick={setExperienceWindowActive}
      >
        <header>
          <WindowHeader className='flex items-center justify-between cursor-move'>
            <div>
              <span>experience.exe</span>
            </div>
            <div className='font-sans'>
              <Button
                className='-ml-0.5 -mb-0.5 font-bold z-20 bg-zinc-300'
                size={"sm"}
                square
                onClick={minimizeWindow}
              >
                <span>-</span>
              </Button>
              <Button
                className='-ml-0.5 -mb-0.5 font-extrabold z-20 bg-zinc-300'
                size={"sm"}
                square
                onClick={toggleMaximizeWindow}
              >
                <span>□</span>
              </Button>
              <Button className='-ml-0.5 -mb-0.5 font-sans z-20 bg-zinc-300' size={"sm"} square onClick={closeWindow}>
                <span>x</span>
              </Button>
            </div>
          </WindowHeader>
        </header>

        <WindowContent>
          <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
            <Tab className={activeTab === 2 && "font-bold"} value={2}>
              pubX
            </Tab>
            <Tab className={activeTab === 3 && "font-bold"} value={3}>
              Trakstar
            </Tab>
            <Tab className={activeTab === 4 && "font-bold"} value={4}>
              Basis
            </Tab>
            <Tab className={activeTab === 5 && "font-bold"} value={5}>
              QBurst
            </Tab>
            <Tab className={activeTab === 6 && "font-bold"} value={6}>
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
