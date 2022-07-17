import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';

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
      <Screen name="Overview" component={Welcome} />
    </Navigator>
  );
}
