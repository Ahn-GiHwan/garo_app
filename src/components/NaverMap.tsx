import React from 'react';
import {View, Dimensions, Alert} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';

function NaverMap({isList}: {isList: boolean}) {
  return (
    <NaverMapView
      style={{width: '100%', height: isList ? '60%' : '100%'}}
      zoomControl={false}
      center={{
        zoom: 10,
        latitude: 37.51,
        longitude: 126.9,
      }}>
      <Marker
        coordinate={{
          latitude: 37.51,
          longitude: 126.9,
        }}
        onClick={() => Alert.alert('Click')}
        pinColor="red"
      />
      {/* <Path
            coordinates={[
              {
                latitude: start.latitude,
                longitude: start.longitude,
              },
              {latitude: end.latitude, longitude: end.longitude},
            ]}
          />
          <Marker coordinate={{latitude: end.latitude, longitude: end.longitude}} /> */}
    </NaverMapView>
  );
}

export default NaverMap;
