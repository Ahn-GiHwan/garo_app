import React, {useCallback, useMemo, useState} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {useQuery} from 'react-query';
import Loading from '../components/Loading';
import {Text, View} from '../style/common';
import Icon from '../components/Icon';
import BoroughChart from '../components/BoroughChart';
import {getBoroughsFetch, getChartDataFetch} from '../apis/chart';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.chartBg};
`;

const Main = styled.View``;

const TitleView = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-horizontal: 10px;
  padding-bottom: 10px;
`;

const TitleText = styled(Text)`
  margin-left: 5px;
  font-size: 25px;
  font-weight: bold;
`;

const BoroughList = styled.FlatList.attrs({horizontal: true})`
  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.color};
  padding: 10px;
  padding-bottom: 20px;
  background-color: ${({theme}) => theme.bg};
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

const BoroughChartView = styled.View`
  margin-top: 100px;
  transform: ${({vertical}) => (vertical ? 'rotate(90deg)' : null)};
  border-radius: 5px;
  padding-vertical: 10px;
`;

const TransFormButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: -50px;
  border-width: 1px;
  border-radius: 20px;
  padding: 10px;
  background-color: white;
`;

function Chart() {
  const {isLoading: boroughListLoading, data: boroughList} = useQuery('getBoroughName', getBoroughsFetch);
  const {isLoading, data} = useQuery('getChartData', getChartDataFetch);
  const [selectBorough, setSelectBorough] = useState('??????');
  const [verticalMode, setVerticalMode] = useState(false);
  const showData = useMemo(() => data?.filter(item => item.title === selectBorough)[0].data, [data, selectBorough]);

  const onClickBorough = useCallback(borough => {
    setSelectBorough(borough);
  }, []);

  const onVerticalToggle = useCallback(() => {
    setVerticalMode(prev => !prev);
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

  if (boroughListLoading || isLoading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Main>
          <TitleView>
            <Icon name="location-outline" size={20} />
            <TitleText>????????????</TitleText>
          </TitleView>
          <BoroughList data={boroughList} keyExtractor={(item: any) => item.id} renderItem={renderItem} ItemSeparatorComponent={Empty} />
          <BoroughChartView vertical={verticalMode}>
            <BoroughChart showData={showData} vertical={verticalMode} />
          </BoroughChartView>
          <TransFormButton onPress={onVerticalToggle}>
            {Platform.OS === 'ios' ? (
              <Icon name={verticalMode ? 'phone-portrait-outline' : 'phone-landscape-outline'} color="black" size={20} />
            ) : (
              <Icon name={verticalMode ? 'phone-portrait-sharp' : 'phone-landscape-sharp'} color="black" size={20} />
            )}
          </TransFormButton>
        </Main>
      </Container>
    );
  }
}

export default Chart;
