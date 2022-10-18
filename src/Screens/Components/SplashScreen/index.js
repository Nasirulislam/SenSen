import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import context from '../../../Store/Context';
import {getAsyncItem} from '../../../Config/Helper/GlobalHelper';
import {CommonActions} from '@react-navigation/native';

const Index: () => React$Node = (props) => {
  const global = useContext(context);
  const {data} = global;
  const {username, appUserData} = data;

  React.useEffect(() => {
    setTimeout(() => {
      getAsyncItem('appUserData').then((res) => {
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: res ? 'FindPart' : 'FindPart'}],
          }),
        );
      });
    }, 500);
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Sensen</Text>
        <LottieView
          source={require('../../../Anim/gear.json')}
          autoPlay
          loop
          style={{width: 90, height: 90, marginTop: 30}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Index;
