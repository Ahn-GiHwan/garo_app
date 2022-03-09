import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Bottom from './Bottom';

export type NativeStackParamList = {
  Home: undefined;
  Bottom: {name: string};
};

const Stack = createNativeStackNavigator();

function NativeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bottom" component={Bottom} />
    </Stack.Navigator>
  );
}

export default NativeStack;
