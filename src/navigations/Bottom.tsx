import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chart from '../screen/Chart';
import Map from '../screen/Map';
import Setting from '../screen/Setting';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducer';

const Tab = createBottomTabNavigator();

function Bottom() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? 'black' : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : 'black',
        },
        tabBarStyle: {
          backgroundColor: isDark ? 'black' : 'white',
        },
      }}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Chart" component={Chart} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default Bottom;
