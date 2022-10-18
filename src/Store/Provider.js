/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Context from '../Store/Context';
import Navigation from '../Config/Navigation';
import InitialState from './Initialstate.json';
import Constants from './Constans';
import StringOfLang from '../Config/Language';
const { CHANGE_USERNAME, CHANGE_NUMBER, SET_USER, SET_APP_LANGUAGE } = Constants;

const Provider: () => React$Node = () => {
  const [global, setGlobal] = React.useState(InitialState);

  const dispatch = (Key, value) => {
    switch (Key) {
      case CHANGE_USERNAME:
        setGlobal((global) => {
          return { ...global, username: value };
        });
        break;
      case CHANGE_NUMBER:
        setGlobal((global) => {
          return { ...global, usernumber: value };
        });
        break;
      case SET_USER:
        setGlobal((global) => {
          return { ...global, appUser: value };
        });
        break;
      case SET_APP_LANGUAGE:
        setGlobal((global) => {
          StringOfLang.setLanguage(value);
          return { ...global, appLanguage: value };
        });
        break;
    }
  };
  return (
    <>
      <Context.Provider value={{ data: global, dispatch }}>
        <Navigation />
      </Context.Provider>
    </>
  );
};

export default Provider;
