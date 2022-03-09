import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {useQuery} from 'react-query';
import {getBoroughNameFetch} from '../../api';
import Loading from '../components/Loading';
import {Text, View} from '../style/common';
import Icon from '../components/Icon';

const Container = styled(View)`
  flex: 1;
  padding: 10px;
`;

const Main = styled.View``;

const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
`;

const TitleText = styled(Text)`
  margin-left: 5px;
  font-size: 25px;
  font-weight: bold;
`;

const BoroughList = styled.FlatList.attrs({horizontal: true})`
  padding-bottom: 7px;
  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.color};
`;

const BoroughView = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({theme}) => theme.color};
  padding: 5px;
  background-color: ${({select, theme}) => (select ? theme.color : theme.bg)};
`;

const Empty = styled.View`
  width: 7px;
`;

const BoroughText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${({select, theme}) => (select ? theme.bg : theme.color)};
`;

function Chart() {
  const {isLoading, data} = useQuery('getBoroughName', getBoroughNameFetch);
  const [selectBorough, setSelectBorough] = useState('강남구');

  const onClickBorough = useCallback(borough => {
    setSelectBorough(borough);
  }, []);

  const renderItem = useCallback(
    ({item: {id, borough}}) => (
      <BoroughView select={selectBorough === borough} onPress={() => onClickBorough(borough)}>
        <BoroughText key={id} select={selectBorough === borough}>
          {borough}
        </BoroughText>
      </BoroughView>
    ),
    [onClickBorough, selectBorough],
  );

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Main>
          <TitleView>
            <Icon name="location-outline" size={20} />
            <TitleText>지역선택</TitleText>
          </TitleView>
          <BoroughList data={data} keyExtractor={(item: any) => item.id} renderItem={renderItem} ItemSeparatorComponent={Empty} />
        </Main>
      </Container>
    );
  }
}

export default Chart;
