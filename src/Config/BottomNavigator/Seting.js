import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Setting from '../../Screens/Components/Stacks/Setting';
import AppSetting from '../../Screens/Components/Settings';

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
      <Stack.Navigator initialRouteName="Setting" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={this._settingOption()}
        />
        <Stack.Screen name="AppSetting" component={AppSetting} />
      </Stack.Navigator>
    );
  }
}
