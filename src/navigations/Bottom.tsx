import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chart from '../screen/Chart';
import Map from '../screen/Map';
import Setting from '../screen/Setting';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducer';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        tabBarLabelStyle: {
          // fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: '지도',
          tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'map' : 'map-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarLabel: '차트',
          tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Bottom;
