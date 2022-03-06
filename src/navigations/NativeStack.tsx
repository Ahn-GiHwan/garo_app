import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';

const Stack = createNativeStackNavigator();

function NativeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default NativeStack;
