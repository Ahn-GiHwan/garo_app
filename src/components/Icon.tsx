import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Icon({name, color, size}: {name: string; color: string; size: number}) {
  return <Ionicons name={name} color={color} size={size} />;
}

export default Icon;
