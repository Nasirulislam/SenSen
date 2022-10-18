import axios from 'axios';
import NetworkUtils from './NetworkUtils';
import { Alert } from 'react-native';
import { ALERT_MESSAGE } from '../../Config/Helper/GlobalHelper';

const handleResponse = (url, response, meth) => {
  if (response?.status) {
    Alert.alert(
      'Invalid User',
      response?.data?.message,
      [
        {
          text: 'Okay',
        },
      ],
      { cancelable: false },
    );
  }
};

const handleCatchError = async (url, response) => {
  let { data } = response;
  let { error } = data;
  await NetworkUtils.isNetworkAvailable().then((res) => {
    if (!res && res !== null) {
      Alert.alert(
        'Error in Loading Contents',
        'Please Check your internet connection We cannot move without internet connection',
        [
          {
            text: 'Retry',
            onPress: () => {
              // isAlertShown = false;
            },
          },
        ],
        { cancelable: true },
      );
    } else {
      if (__DEV__) {
        console.log('call api error - ', url, response);
      }
      ALERT_MESSAGE({
        title: error.name,
        message: error.message,
        buttons: [{ text: 'Okay' }],
      });
    }
  });
};

export function callApi(url, type = 'get', data = {}, token = '', header = {}) {
  let reqHeader = Object.assign(header, {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    auth_token: token,
  });
  if (__DEV__) {
    console.log('URL - ', url);
  }

  if (type === 'get') {
    return axios
      .get(url, { headers: reqHeader })
      .then((response) => {
        return Promise.resolve(response);
        return handleResponse(url, response, 'get');
      })
      .catch((err) => {
        return handleCatchError(url, err);
      });
  } else if (type === 'post') {
    return axios
      .post(url, data, { headers: reqHeader })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch(async (err) => {
        let error = err.response ? err.response : err
        await handleCatchError(url, error);
        return Promise.reject(error);
      });
  } else if (type === 'patch') {
    return axios
      .patch(url, data, { headers: reqHeader })
      .then((response) => {
        return handleResponse(url, response, 'patch');
      })
      .catch((err) => {
        return handleCatchError(url, err);
      });
  }
}
