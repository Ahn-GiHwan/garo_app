import React, {useCallback, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import NaverMap from '../components/NaverMap';
import EachLocList from '../components/EachLocList';
import Icon from '../components/Icon';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducer';
import {View} from '../style/common';
import {useQuery} from 'react-query';
import {getBoroughInNamesFetch, getBoroughNameFetch} from '../../api';

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

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
  const {isLoading, data} = useQuery('getBoroughName', getBoroughNameFetch);
  const {isDark} = useSelector((state: RootState) => state.theme);
  const [isList, setIsList] = useState(false);

  const onIsListToggle = useCallback((): void => {
    setIsList(prev => !prev);
  }, []);

  const renderItem = useCallback(({item}) => <EachLocList item={item} />, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator color={isDark ? 'white' : 'black'} size="large" />
      </LoadingContainer>
    );
  } else {
    return (
      <Container>
        <NaverMap isList={isList} />
        <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem} />
        <ListButton onPress={onIsListToggle}>
          <Icon name={isList ? 'close' : 'list'} color={isDark ? 'white' : 'black'} size={25} />
        </ListButton>
      </Container>
    );
  }
}

export default Map;
