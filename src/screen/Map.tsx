import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import NaverMap from '../components/NaverMap';
import EachLocList from '../components/EachLocList';
import Icon from '../components/Icon';
import {View} from '../style/common';
import {useQuery} from 'react-query';
import Loading from '../components/Loading';
import {getBoroughsFetch, getBoroughsGeocodeFetch} from '../apis/map';
import {Alert} from 'react-native';

const Container = styled(View)`
  flex: 1;
`;

const FlatList = styled.FlatList`
  flex: 1;
  border-top-width: 5px;
  border-color: gray;
`;

const ListButton = styled.Pressable`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 7px;
  border-width: 2px;
  border-radius: 50px;
  border-color: gray;
  background-color: ${({theme}) => theme.bg};
`;

function Map() {
  const {isLoading, data} = useQuery('getChartBoroughs', getBoroughsFetch);
  const [isList, setIsList] = useState(false);
  const [geocode, setGeocode] = useState(null);
  const [loading, setLoading] = useState(false);

  const onIsListToggle = useCallback((): void => {
    setIsList(prev => !prev);
  }, []);

  const onClickBorough = useCallback(async borough => {
    setLoading(true);
    try {
      const result = await getBoroughsGeocodeFetch(borough);
      setGeocode(result);
    } catch (error) {
      Alert.alert('에러', 'geocode불러오기 에러');
    } finally {
      setLoading(false);
    }
  }, []);

  const renderItem = useCallback(
    ({item: {id, borough}}) => <EachLocList id={id} borough={borough} onClickBorough={onClickBorough} />,
    [onClickBorough],
  );

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <NaverMap isList={isList} geocode={geocode} />
        <FlatList data={data} keyExtractor={(item: any) => item.id} renderItem={renderItem} />
        <ListButton onPress={onIsListToggle}>
          <Icon name={isList ? 'close' : 'list'} size={25} />
        </ListButton>
        {loading && <Loading blur={loading} />}
      </Container>
    );
  }
}

export default Map;
