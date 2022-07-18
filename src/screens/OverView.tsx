import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../routes/stack.routes';
import StatusService from '../services/StatusService';
import useConnection from '../hooks/useConnection';

function OverView() {
  const [checked, setChecked] = useState('Entregue');
  const dataKey = '@QrCodeApp:submits';
  const Connection = useConnection();
  const route = useRoute<RouteProp<RootStackParamList, 'Overview'>>();
  const {data, coords, callback} = route.params;
  const submitValue = {...coords, data, checked, date: new Date()};
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!(await Connection).connection_status) {
      Alert.alert(
        'Não há conexão com internet sua solicitação vai ser enviada quando houver internet',
      );
      return handleAsyncSubmit();
    }

    const request = await StatusService.store({
      submitValue,
    });

    if (!request.ok) {
      Alert.alert(
        'Houve um problema com a solicitação, ela ficará guardada na memoria até que seja possivel realizar',
      );
      return handleAsyncSubmit();
    }
    navigation.navigate('Welcome', () => callback);
  };

  const handleAsyncSubmit = async () => {
    try {
      const request = await AsyncStorage.getItem(dataKey);
      const currentData = request ? JSON.parse(request) : [];

      const dataFormated = [...currentData, submitValue];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated));
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Welcome', () => callback);
  };

  return (
    <View>
      <View style={styles.viewRow}>
        <Text>Entregue</Text>
        <RadioButton
          value="Entregue"
          status={checked === 'Entregue' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Entregue')}
        />
      </View>
      <View style={styles.viewRow}>
        <Text>Ausente</Text>
        <RadioButton
          value="Ausente"
          status={checked === 'Ausente' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Ausente')}
        />
      </View>
      <View style={styles.viewRow}>
        <Text>Extravio</Text>
        <RadioButton
          value="Extravio"
          status={checked === 'Extravio' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Extravio')}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Submeter</Text>
      </TouchableOpacity>
    </View>
  );
}

export default OverView;

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    backgroundColor: 'blue',
    margin: 6,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
