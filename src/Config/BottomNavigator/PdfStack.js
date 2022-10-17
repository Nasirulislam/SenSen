import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Pdf from '../../Screens/Components/Stacks/Pdf';
import ProductInfoGuid from '../../Screens/Components/ProductInfoGuid';

export default class index extends Component {
  _settingOption() {
    return {
      title: '',
      headerStyle: {
        elevation: 0,
        height: 0,
        opacity: 0,
      },
    };
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="ProductInfoGuid" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Pdf"
          component={Pdf}
          options={this._settingOption()}
        />
        <Stack.Screen name="ProductInfoGuid" component={ProductInfoGuid} />
      </Stack.Navigator>
    );
  }
}
