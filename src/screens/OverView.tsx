import React from 'react';
import {Text, View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../routes/stack.routes';

function OverView() {
  const route = useRoute<RouteProp<RootStackParamList, 'Overview'>>();
  const {barcode, coords} = route.params;
  return (
    <View>
      <Text>{coords.currentLongitude}</Text>
      <Text>{coords.currentLatitude}</Text>
    </View>
  );
}

export default OverView;
