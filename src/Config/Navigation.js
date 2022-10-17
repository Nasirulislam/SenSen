/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/Components/SplashScreen';
import SignUp from '../Screens/Components/SignUp';
import FindPart from '../Screens/Components/FindPart';
import FindOrPart from '../Screens/Components/FindOrPart';
import ProductDetails from '../Screens/Components/ProductDetails';
import AboutUs from '../Screens/Components/AboutUs';
import ProductInfoGuid from '../Screens/Components/ProductInfoGuid';
import SenSenVideoHub from '../Screens/Components/SenSenVideoHub';
import FrequentlyQuestions from '../Screens/Components/FrequentlyQuestions';
import SectionProductComponent from '../Screens/Components/SectionProductComponent';
import SearchInterchangeResultsComponent from '../Screens/Components/SearchInterchangeResultsComponent';
import Troubleshoot from '../Screens/Components/Troubleshoot';
import Settings from '../Screens/Components/Settings';
import BreakingNews from '../Screens/Components/BreakingNews';
import TechnicalSupport from '../Screens/Components/TechnicalSupport';
import SystemLogin from '../Screens/Components/Login';
import ForgotPassword from '../Screens/Components/ForgotPassword';
import Menu from '../Screens/Components/Menu';
import FindLoc from '../Screens/Components/FindLocation';
import LocDetails from '../Screens/Components/LocationDetails';
import TabNavigation from './BottomNavigator';

const Stack = createStackNavigator();

const Navigation: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <Stack.Screen name="Tab" component={TabNavigation} /> */}
        {/* <Stack.Screen name="FindPart" component={FindPart} /> */}
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="FindPart" component={FindPart} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="FindOrPart" component={FindOrPart} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ProductInfoGuid" component={ProductInfoGuid} />
        <Stack.Screen name="SenSenVideoHub" component={SenSenVideoHub} />
        <Stack.Screen name="FrequentlyQuestions" component={FrequentlyQuestions} />
        <Stack.Screen name="SectionProductComponent" component={SectionProductComponent} />
        <Stack.Screen name="SearchInterchangeResultsComponent" component={SearchInterchangeResultsComponent} />
        <Stack.Screen name="Troubleshoot" component={Troubleshoot} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="BreakingNews" component={BreakingNews} />
        <Stack.Screen name="FindLoc" component={FindLoc} />
        <Stack.Screen name="LocDetails" component={LocDetails} />
        <Stack.Screen name="TechnicalSupport" component={TechnicalSupport} />
        <Stack.Screen name="SystemLogin" component={SystemLogin} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
