import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {RootState} from './src/redux/reducer';
import {darkTheme, lightTheme} from './src/style/theme';
import Bottom from './src/navigations/Bottom';

function AppInner() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Bottom />
    </ThemeProvider>
  );
}

export default AppInner;
