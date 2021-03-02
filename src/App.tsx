import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/css_in_js/globalStyle';
import { Theme } from './assets/css_in_js/theme';
import { MyResponsiveWheelMenu } from './components/MyResponsiveWheelMenu';
import { MyWheelMenu } from './components/MyWheelMenu';
import { MENU_OPTIONS } from './constants/coreConstants';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles/>
        <MyResponsiveWheelMenu
          innerHoleCoverage={70}
          options={MENU_OPTIONS}
          maxHamburgerSize={8}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
