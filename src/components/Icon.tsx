import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducer';

function Icon({name, color, size}: {name: string; color?: string; size: number}) {
  const {isDark} = useSelector((state: RootState) => state.theme);
  return <Ionicons name={name} color={color || isDark ? 'white' : 'black'} size={size} />;
}

export default Icon;
