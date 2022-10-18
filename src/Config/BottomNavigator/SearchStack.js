import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Search from '../../Screens/Components/Stacks/Search';
import FindOrPart from '../../Screens/Components/FindOrPart';

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
      <Stack.Navigator initialRouteName="FindOrPart" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Search"
          component={Search}
          options={this._settingOption()}
        />
        <Stack.Screen name="FindOrPart" component={FindOrPart} />
      </Stack.Navigator>
    );
  }
}
