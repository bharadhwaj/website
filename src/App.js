import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { themes } from 'react95';

import reduxStore from './utils/store';
import GlobalStyle from './utils/style';

import IndexPage from './pages/IndexPage';

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <GlobalStyle />
        <ThemeProvider theme={themes.default}>
          <>
            <IndexPage />
          </>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
