import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chart from '../screen/Chart';
import Map from '../screen/Map';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Chart" component={Chart} />
    </Tab.Navigator>
  );
}
