import React from 'react';
import styled from 'styled-components/native';
import {Text, View} from '../style/common';

const Container = styled.TouchableOpacity`
  justify-content: space-around;
  border-bottom-width: 1px;
  border-color: #f1efef;
  padding: 10px;
`;

const Borough = styled(Text)`
  font-size: 20px;
`;

function EachLocList({item}) {
  return (
    <Container>
      <Borough>{item.borough}</Borough>
    </Container>
  );
}

export default EachLocList;
