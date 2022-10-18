import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Menu from '../../Screens/Components/Menu';
import ProductInfoGuid from '../../Screens/Components/ProductInfoGuid';
import FindOrPart from '../../Screens/Components/FindOrPart';
import TechnicalSupport from '../../Screens/Components/TechnicalSupport';
import AboutUs from '../../Screens/Components/AboutUs';
import BreakingNews from '../../Screens/Components/BreakingNews';
import FrequentlyQuestions from '../../Screens/Components/FrequentlyQuestions';
import SenSenVideoHub from '../../Screens/Components/SenSenVideoHub';
import Troubleshoot from '../../Screens/Components/Troubleshoot';
import Settings from '../../Screens/Components/Settings';

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
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ProductInfoGuid" component={ProductInfoGuid} />
        <Stack.Screen name="FindOrPart" component={FindOrPart} />
        <Stack.Screen name="TechnicalSupport" component={TechnicalSupport} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="BreakingNews" component={BreakingNews} />
        <Stack.Screen name="FrequentlyQuestions" component={FrequentlyQuestions} />
        <Stack.Screen name="SenSenVideoHub" component={SenSenVideoHub} />
        <Stack.Screen name="Troubleshoot" component={Troubleshoot} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }
}
