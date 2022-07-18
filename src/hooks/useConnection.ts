import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import StatusService from '../services/StatusService';

export default async () => {
  const [connectivity, setConnectivity] = useState({connection_status: false});

  const useNet = useNetInfo();

  useEffect(() => {
    setConnectivity({connection_status: useNet.isInternetReachable});
    return () => {
      getRequestStorage(useNet);
    };
  }, [useNet]);
  return connectivity;
};
async function getRequestStorage(useNet) {
  const dataKey = '@QrCodeApp:submits';
  const data = await AsyncStorage.getItem(dataKey);
  if (!data) {
    return;
  }
  if (useNet.isInternetReachable) {
    const currentData = JSON.parse(data);

    currentData.map(async submitValue => {
      await StatusService.store({
        submitValue,
      });
    });
    await AsyncStorage.removeItem(dataKey);
  }
}
