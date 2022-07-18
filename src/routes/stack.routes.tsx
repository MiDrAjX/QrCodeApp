import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import OverView from '../screens/OverView';

export type RootStackParamList = {
  Welcome: () => {};
  Overview: {
    data: string;
    coords: {currentLongitude: string; currentLatitude: string};
    callback: () => {};
  };
};

const {Navigator, Screen} = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        title: 'Leitor Codigo de barras/QrCode',
        headerStyle: {
          backgroundColor: '#0038A8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Overview" component={OverView} />
    </Navigator>
  );
}
