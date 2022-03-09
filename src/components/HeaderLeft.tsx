import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {NativeStackParamList} from '../navigations/NativeStack';
import {RootState} from '../redux/reducer';
import Icon from './Icon';

const Container = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 15px;
`;

function HeaderLeft() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  const navigation = useNavigation<NavigationProp<NativeStackParamList>>();

  const onGoHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <Container onPress={onGoHome}>
      <Icon name="home-outline" color={isDark ? 'white' : 'black'} size={20} />
    </Container>
  );
}

export default HeaderLeft;
