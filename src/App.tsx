import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/css_in_js/globalStyle';
import { Theme } from './assets/css_in_js/theme';
import { MyWheelMenu } from './components/MyWheelMenu';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles/>
        <MyWheelMenu
          innerHoleCoverage={70}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
