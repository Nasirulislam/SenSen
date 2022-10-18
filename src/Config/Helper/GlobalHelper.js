import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ALERT_MESSAGE = ({title = 'SenSen', message, buttons}) => {
  Alert.alert(title, message, buttons, {cancelable: false});
};

export const setAsyncItem = async (key, value) => {
  try {
    return await AsyncStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value),
    );
  } catch (e) {
    console.log('ASYNC SET ERROR', e);
  }
};

export const getAsyncItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log('ASYNC GET ERROR', e);
  }
};

export const removeAsyncItem = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('ASYNC REMOVE ERROR', e);
  }
};

export const clearAsync = async (key) => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('ASYNC CLEAR ERROR', e);
  }
};
