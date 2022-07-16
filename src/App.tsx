import React from 'react';
import {StatusBar} from 'react-native';

import Welcome from './screens/Welcome';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0038A8" />
      <Welcome />
    </>
  );
}
