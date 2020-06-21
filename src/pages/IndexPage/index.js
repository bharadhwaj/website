import React, { Component } from 'react';

import StartBar from '../../components/StartBar';

import MainScreen from '../../containers/MainScreen';

class IndexPage extends Component {
  render() {
    return (
      <>
        <MainScreen />
        <StartBar />
      </>
    );
  }
}

export default IndexPage;
