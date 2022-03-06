import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chart from '../screen/Chart';
import Home from '../screen/Home';
import Map from '../screen/Map';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Chart" component={Chart} />
    </Stack.Navigator>
  );
}
