import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Alert, Linking} from 'react-native';
import styled from 'styled-components/native';
import Icon from '../components/Icon';
import {NativeStackParamList} from '../navigations/NativeStack';
import {SafeAreaView} from '../style/common';

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Main = styled.View`
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 50%;
  border-radius: 10px;
  padding: 10px;
  padding-top: 70px;
  background-color: #eee;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

const IconButton = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 10px;
  border-color: ${({color}) => color || 'black'};
  padding: 10px;
`;

const DownloadButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const DownloadButtonText = styled.Text`
  color: black;
`;

function Home() {
  const navigation = useNavigation<NavigationProp<NativeStackParamList>>();

  const onDownloadLink = useCallback(async () => {
    try {
      await Linking.openURL('http://data.seoul.go.kr/dataList/OA-15069/F/1/datasetView.do');
    } catch (error) {
      console.log(error);
      Alert.alert('error');
    }
  }, []);

  const onGoMap = useCallback(() => {
    navigation.navigate('Bottom', {name: 'Map'});
  }, [navigation]);

  const onGoChart = useCallback(() => {
    navigation.navigate('Bottom', {name: 'Chart'});
  }, [navigation]);

  return (
    <Container>
      <Main>
        <Title>서울시 가로휴지통</Title>
        <Icons>
          <IconButton color="orange" onPress={onGoMap}>
            <Icon name="map-sharp" color="black" size={35} />
          </IconButton>
          <IconButton color="skyblue" onPress={onGoChart}>
            <Icon name="stats-chart" color="black" size={35} />
          </IconButton>
        </Icons>
        <DownloadButton onPress={onDownloadLink}>
          <Icon name="md-document-attach-outline" color="green" size={30} />
          <DownloadButtonText>파일 다운로드</DownloadButtonText>
        </DownloadButton>
      </Main>
    </Container>
  );
}

export default Home;
