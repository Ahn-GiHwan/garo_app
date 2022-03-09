import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Alert, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import Icon from '../components/Icon';
import {NativeStackParamList} from '../navigations/NativeStack';
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

const Row = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f1efef;
`;

const Title = styled(Text)`
  font-size: 25px;
  font-weight: bold;
`;

const RightView = styled.View`
  align-items: center;
  width: 50px;
`;

const Switch = styled.Switch``;

const Bridge = styled.View`
  height: 20px;
`;

function Setting() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<NativeStackParamList>>();

  const onChangeThemeMode = useCallback(async () => {
    dispatch(themeSlice.actions.setToggle());
    await AsyncStorage.setItem('isDark', String(!isDark));
  }, [dispatch, isDark]);

  const onGoHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const onGoGithub = useCallback(async () => {
    try {
      await Linking.openURL('https://github.com/Ahn-GiHwan');
    } catch (error) {
      console.log(error);
      Alert.alert('error');
    }
  }, []);

  return (
    <Safe>
      <Container>
        <Row onPress={onChangeThemeMode}>
          <Title>다크 모드</Title>
          <Switch
            value={isDark}
            onValueChange={onChangeThemeMode}
            trackColor={{
              false: '#a09e9f',
              true: '#63c963',
            }}
            thumbColor="white"
          />
        </Row>
        <Bridge />
        <Row onPress={onGoHome}>
          <Title>홈으로</Title>
          <RightView>
            <Icon name="home-outline" color={isDark ? 'white' : 'black'} size={30} />
          </RightView>
        </Row>
        <Bridge />
        <Row onPress={onGoGithub}>
          <Title>개발자</Title>
          <RightView>
            <Icon name="logo-github" color={isDark ? 'white' : 'black'} size={30} />
          </RightView>
        </Row>
      </Container>
    </Safe>
  );
}

export default Setting;
