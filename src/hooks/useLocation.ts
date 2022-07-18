import {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default () => {
  const [currentLatitude, setCurrenteLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de acesso à Localização',
            message: 'Este aplicativo precisa acessar sua localização.',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert('Permissão de Localização negada');
        }
      };
      requestLocationPermission();
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLatitud = JSON.stringify(position.coords.latitude);
        const currentLongitud = JSON.stringify(position.coords.longitude);

        setCurrenteLatitude(currentLatitud);
        setCurrentLongitude(currentLongitud);
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 10},
    );
  };
  useEffect(() => {
    callLocation();
  });

  return {coords: {currentLatitude, currentLongitude}};
};
