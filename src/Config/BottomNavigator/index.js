import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MenuStack from './MenuStack';
import Menu from '../../Screens/Components/Menu';
import PdfStack from './PdfStack';
import SearchStack from './SearchStack';
import TechStack from './TechStack';
import {hp, wp} from '../../Config/Helper/ResponsiveScreen';
import Icon from 'react-native-dynamic-vector-icons';
import {colors} from '../Helper/styles';

const Tab = createBottomTabNavigator();

const MyTabs = (mainProps: props) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        style: styles.bottomTabNavigator,
        activeTintColor: 'pink',
        inactiveTintColor: 'white',
      }}
      >
      <Tab.Screen
        name="Back"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarButton: props => {
            return (
              <TouchableOpacity {...props}>
                <Icon
                  onPress={() => mainProps.navigation.goBack()}
                  // onPress={() => mainProps.navigation.navigate('FindPart')}
                  name="ios-chevron-back"
                  type="Ionicons"
                  size={wp(18)}
                  color={colors.BACK_ARROW_GREY}
                  style={{top: hp(-3), position: 'absolute'}}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarButton: props => (
            <TouchableOpacity {...props}>
              <Image
                source={require('../../Assets/images/Home_Button.png')}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: '',
          tabBarButton: props => (
            <TouchableOpacity {...props}>
              <Image
                source={require('../../Assets/images/Part_Number_Button.png')}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={PdfStack}
        options={{
          tabBarLabel: '',
          tabBarButton: props => (
            <TouchableOpacity {...props}>
              <Image
                source={require('../../Assets/images/Product_Info_Button.png')}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Tech"
        component={TechStack}
        options={{
          tabBarLabel: '',
          tabBarButton: props => (
            <TouchableOpacity {...props}>
              <Image
                source={require('../../Assets/images/Tech_Support_Button.png')}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: '',
          tabBarButton: props => (
            // <TouchableOpacity {...props}>
              <TouchableOpacity {...props} onPress={() => mainProps.navigation.navigate('Menu')}>
              <Image
                source={require('../../Assets/images/Menu_Button.png')}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default class tabNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MyTabs navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  bottomTabNavigator: {
    top: hp(0.7),
    backgroundColor: 'rgba(0, 0, 0, 0)',
    bottom: hp(1),
    borderTopWidth: 0,
    borderWidth: 0,
  },
  tabIcon: {
    width: wp(16.7),
    height: wp(16.7),
  },
});
