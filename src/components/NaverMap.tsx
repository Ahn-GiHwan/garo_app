import React from 'react';
import {View, Dimensions, Alert} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';
import {Igeocode} from '../screen/Map';

function NaverMap({isList, geocode}: {isList: boolean; geocode: Igeocode}) {
  const latitude = geocode?.latitude;
  const longitude = geocode?.longitude;
  return (
    <NaverMapView
      style={{width: '100%', height: isList ? '60%' : '100%'}}
      zoomControl={false}
      center={{
        zoom: 14,
        latitude: latitude || 37.51,
        longitude: longitude || 126.9,
      }}>
      <Marker
        coordinate={{
          latitude,
          longitude,
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
