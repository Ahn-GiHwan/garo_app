import React, {useEffect} from 'react';
import {Alert, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {RootState} from './src/redux/reducer';
import {darkTheme, lightTheme} from './src/style/theme';
import Bottom from './src/navigations/Bottom';
import {useAppDispatch} from './src/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeSlice from './src/redux/themeSlice';

function AppInner() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getIsDarkToStorage() {
      try {
        const result = await AsyncStorage.getItem('isDark');
        if (result !== null) {
          dispatch(themeSlice.actions.setInit(Boolean(result)));
        }
      } catch (error) {
        Alert.alert('AppInner Error');
      }
    }
    getIsDarkToStorage();
  }, [dispatch]);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Bottom />
    </ThemeProvider>
  );
}

export default AppInner;
