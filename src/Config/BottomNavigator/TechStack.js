import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Tech from '../../Screens/Components/Stacks/Tech';
import TechnicalSupport from '../../Screens/Components/TechnicalSupport';

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
      <Stack.Navigator initialRouteName="TechnicalSupport" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Tech"
          component={Tech}
          options={this._settingOption()}
        />
        <Stack.Screen name="TechnicalSupport" component={TechnicalSupport} />
      </Stack.Navigator>
    );
  }
}
