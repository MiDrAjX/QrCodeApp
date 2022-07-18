'use strict';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/core';
import useLocation from '../hooks/useLocation';
import useConnection from '../hooks/useConnection';

function Welcome() {
  const navigation = useNavigation();
  const Connection = useConnection();
  const {coords} = useLocation();
  let scanner;

  const handleBarCodeRead = async (barcode: any) => {
    await Connection;
    const {data} = barcode;
    navigation.navigate('Overview', {
      data,
      coords,
      callback: scanner.reactivate(),
    });
  };

  return (
    coords.currentLatitude && (
      <QRCodeScanner
        onRead={handleBarCodeRead}
        flashMode={RNCamera.Constants.FlashMode.torch}
        ref={node => {
          scanner = node;
        }}
      />
    )
  );
}

export default Welcome;
