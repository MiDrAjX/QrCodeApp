'use strict';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/core';
import useLocation from '../hooks/useLocation';

function Welcome() {
  const navigation = useNavigation();
  const {coords} = useLocation();
  const handleBarCodeRead = (barcode: any) => {
    navigation.navigate('Overview', {barcode, coords});
  };
  return (
    <QRCodeScanner
      onRead={handleBarCodeRead}
      flashMode={RNCamera.Constants.FlashMode.auto}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
          on your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity
          onPress={handleBarCodeRead}
          style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>bom dia</Text>
        </TouchableOpacity>
      }
    />
  );
}

export default Welcome;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
