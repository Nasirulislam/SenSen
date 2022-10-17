/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import context from '../Store/Context';
let ContextLet = context;
const App: () => React$Node = (props) => {
  const global = React.useContext(context);

  return (
    <>
      <Text>asdasa{global.data.username}</Text>
      <Text>asdasa{global.data.usernumber}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
