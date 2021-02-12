import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/css_in_js/globalStyle';
import { Theme } from './assets/css_in_js/theme';
import { MyHamburgerMenu } from './components/HamburgerMenu/MyHamburgerMenu';
import { MyWheelMenu } from './components/MyWheelMenu';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles/>
        <MyHamburgerMenu/>
        <MyWheelMenu/>
      </>
    </ThemeProvider>
  );
}

export default App;
