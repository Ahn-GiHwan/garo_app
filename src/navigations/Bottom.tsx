import React from 'react';
import {Platform} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chart from '../screen/Chart';
import Map from '../screen/Map';
import Setting from '../screen/Setting';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducer';
import HeaderLeft from '../components/HeaderLeft';

export type BottomParamList = {
  Map: {name?: string};
  Chart: {name?: string};
  Setting: undefined;
};

type ParamList = {
  Bottom: {
    name?: string;
  };
};

const Tab = createBottomTabNavigator();

function Bottom() {
  const {isDark} = useSelector((state: RootState) => state.theme);
  const {
    params: {name},
  } = useRoute<RouteProp<ParamList, 'Bottom'>>();

  return (
    <Tab.Navigator
      initialRouteName={name}
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? 'black' : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : 'black',
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          height: Platform.OS === 'android' ? 70 : 79,
          backgroundColor: isDark ? 'black' : 'white',
        },
        tabBarIconStyle: {
          marginTop: Platform.OS === 'android' ? 10 : 0,
        },
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 12 : 0,
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: '지도',
          tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'map' : 'map-outline'} color={color} size={size} />,
          headerLeft: HeaderLeft,
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarLabel: '차트',
          tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color} size={size} />,
          headerLeft: HeaderLeft,
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
