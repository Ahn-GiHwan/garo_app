import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {RootState} from '../redux/reducer';
import {View} from '../style/common';

const LoadingContainer = styled(View)`
  ${({blur}) => blur && StyleSheet.absoluteFill};
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({blur, theme}) => (blur ? 'rgba(1, 1, 1, 0.5)' : theme.bg)};
`;

function Loading({blur}: {blur?: boolean}) {
  const {isDark} = useSelector((state: RootState) => state.theme);
  return (
    <LoadingContainer blur={blur}>
      <ActivityIndicator color={isDark ? 'white' : 'black'} size="large" />
    </LoadingContainer>
  );
}

export default Loading;
