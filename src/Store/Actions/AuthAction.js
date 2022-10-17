import React from 'react';
import { callApi } from '../Service/apiCall';
import APIConstant from '../Service/apiConstants';
import { SET_APP_USER_DATA, SET_APP_LANGUAGE } from '../Constans';
import { setAsyncItem } from '../../Config/Helper/GlobalHelper';


export const LogInUser = (userData, global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.LOGIN, 'post', userData)
    .then((res) => {
      if (res.status === 200) {
        return setAsyncItem('appUserData', res.data.user).then((r) => {
          global.dispatch(SET_APP_USER_DATA, res.data.user);
          global.dispatch(SET_APP_LANGUAGE, res.data.user.language);
          return Promise.resolve(res.data);
        });
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      console.log("eeeee", e)
      return Promise.reject(e);
    });
};

export const SignUpUser = (userData, global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.SIGNUP, 'post', userData)
    .then((res) => {
      if (res.status === 200) {
        setAsyncItem('appUserData', res.data).then(() => {
          global.dispatch(SET_APP_USER_DATA, res.data);
          global.dispatch(SET_APP_LANGUAGE, res.data.language);
          return Promise.resolve(res.data);
        });
      } else if (res.error) {
        return Promise.reject(res);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};

export const SendResetPasswordEmail = (dataObj, global) => {
  return callApi(
    APIConstant.BASE_URL + APIConstant.SEND_FORGOT_PASSWORD_EMAIL,
    'post',
    dataObj,
  )
    .then((res) => {
      if (res.status === 200) {
        return Promise.resolve(res.data);
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};

export const UpdateUserInfo = (userData, global) => {
  return callApi(APIConstant.BASE_URL + APIConstant.UPDATE_USER_IFO, 'post', userData)
    .then((res) => {
      if (res.status === 200) {
        setAsyncItem('appUserData', res.data.data).then(() => {
          global.dispatch(SET_APP_USER_DATA, res.data.data);
          return Promise.resolve(res.data);
        });
      } else if (res.error) {
        return Promise.reject(res.data);
      }
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
