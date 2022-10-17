/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import {IndexPath, Layout, Select, SelectItem} from '@ui-kitten/components';
import context from '../Store/Context';
import Constants from '../Store/Constans';
import stringofLang from '../Config/Language';
const {CHANGE_USERNAME, CHANGE_NUMBER} = Constants;

let ContextLet = context;
const App: () => React$Node = (props) => {
  const global = React.useContext(context);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  React.useEffect(() => {}, []);
  const changeName = () => {
    global.dispatch(CHANGE_USERNAME, 'testuser');
  };
  const changeNumber = () => {
    global.dispatch(CHANGE_NUMBER, 2344);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <Button title="change in English" onPress={() => changeName()} />
        <Button title="change in French" onPress={() => changeNumber()} />
        <Text style={{textAlign: 'center'}}>{stringofLang.first} Sensen</Text>

        <View style={{flex: 1, backgroundColor: 'green', flexDirection: 'row'}}>
          <Layout style={styles.container} level="1">
            <Select
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}>
              <SelectItem title="Option 1" />
              <SelectItem title="Option 2" />
              <SelectItem title="Option 3" />
            </Select>
          </Layout>

          <Layout style={styles.container} level="1">
            <Select
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}>
              <SelectItem title="Option 1" />
              <SelectItem title="Option 2" />
              <SelectItem title="Option 3" />
            </Select>
          </Layout>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    width: '50%',
  },
});

export default App;
