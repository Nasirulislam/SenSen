import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from '../../Screens/Components/Stacks/Home';
import FindPart from '../../Screens/Components/FindPart';
import SectionProductComponent from '../../Screens/Components/SectionProductComponent';
import ProductDetails from '../../Screens/Components/ProductDetails';

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
      <Stack.Navigator initialRouteName="FindPart" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={this._settingOption()}
        />
        <Stack.Screen name="FindPart" component={FindPart} />
        <Stack.Screen name="SectionProductComponent" component={SectionProductComponent} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    );
  }
}
