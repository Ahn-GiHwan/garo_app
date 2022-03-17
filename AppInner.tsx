import React, {useEffect} from 'react';
import {Alert, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {RootState} from './src/redux/reducer';
import {darkTheme, lightTheme} from './src/style/theme';
import NativeStack from './src/navigations/NativeStack';
import {useAppDispatch} from './src/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeSlice from './src/redux/themeSlice';
import {QueryClient, QueryClientProvider} from 'react-query';
import usePermissions from './src/hooks/usePermissions';

const queryClient = new QueryClient();

function AppInner() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  usePermissions();

  useEffect(() => {
    async function getIsDarkToStorage() {
      try {
        const result = await AsyncStorage.getItem('isDark');
        if (result === 'false') {
          dispatch(themeSlice.actions.setInit(false));
        } else if (result === 'true') {
          dispatch(themeSlice.actions.setInit(true));
        }
      } catch (error) {
        Alert.alert('AppInner Error');
      }
    }
    getIsDarkToStorage();
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={isDark ? 'transparent' : 'white'} />
      <QueryClientProvider client={queryClient}>
        <NativeStack />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default AppInner;
