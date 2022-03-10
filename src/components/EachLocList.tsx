import React from 'react';
import styled from 'styled-components/native';
import {Text} from '../style/common';

const Container = styled.TouchableOpacity`
  justify-content: space-around;
  border-bottom-width: 1px;
  border-color: #f1efef;
  padding: 10px;
`;

const Borough = styled(Text)`
  font-size: 20px;
`;

function EachLocList({id, borough, onClickBorough}: {id: number; borough: string; onClickBorough: any}) {
  return (
    <Container key={id} onPress={() => onClickBorough(borough)}>
      <Borough>{borough}</Borough>
    </Container>
  );
}

export default EachLocList;
