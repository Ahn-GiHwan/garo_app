import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {useAppDispatch} from '../redux';
import {RootState} from '../redux/reducer';
import themeSlice from '../redux/themeSlice';
import {SafeAreaView, Text} from '../style/common';

const Safe = styled(SafeAreaView)`
  flex: 1;
`;

const Container = styled.View`
  padding: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

const Switch = styled.Switch``;

function Setting() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  const onChangeThemeMode = useCallback(() => {
    dispatch(themeSlice.actions.setToggle());
  }, [dispatch]);

  return (
    <Safe>
      <Container>
        <Row>
          <Title>다크 모드</Title>
          <Switch value={isDark} onValueChange={onChangeThemeMode} />
        </Row>
      </Container>
    </Safe>
  );
}

export default Setting;
