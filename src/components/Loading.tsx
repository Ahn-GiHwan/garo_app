import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {RootState} from '../redux/reducer';
import {View} from '../style/common';

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  return (
    <LoadingContainer>
      <ActivityIndicator color={isDark ? 'white' : 'black'} size="large" />
    </LoadingContainer>
  );
}

export default Loading;
