import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}) => theme.bg};
`;

export const View = styled.View`
  background-color: ${({theme}) => theme.bg};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.color};
`;
