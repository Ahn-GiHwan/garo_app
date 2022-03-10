import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {useAppDispatch} from '../redux';
import {RootState} from '../redux/reducer';
import themeSlice from '../redux/themeSlice';
import Icon from './Icon';

const Container = styled.TouchableOpacity`
  justify-content: center;
  margin-right: 15px;
`;

function HeaderRight() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  const onThemeToggle = useCallback(async () => {
    dispatch(themeSlice.actions.setToggle());
    await AsyncStorage.setItem('isDark', String(!isDark));
  }, [dispatch, isDark]);

  return (
    <Container onPress={onThemeToggle}>
      <Icon name={isDark ? 'moon-outline' : 'sunny-outline'} size={20} />
    </Container>
  );
}

export default HeaderRight;
