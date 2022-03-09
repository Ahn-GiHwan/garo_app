import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackParamList} from '../navigations/NativeStack';
import Icon from './Icon';

const Container = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 15px;
`;

function HeaderLeft() {
  const navigation = useNavigation<NavigationProp<NativeStackParamList>>();

  const onGoHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <Container onPress={onGoHome}>
      <Icon name="home-outline" size={20} />
    </Container>
  );
}

export default HeaderLeft;
