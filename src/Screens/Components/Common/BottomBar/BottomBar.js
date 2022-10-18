import React from 'react';
import {hp, wp} from '../../../../Config/Helper/ResponsiveScreen';
import Icon from 'react-native-dynamic-vector-icons';
import {colors} from '../../../../Config/Helper/styles';
import {Image, TouchableOpacity, View} from 'react-native';

const BottomBar = (props) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        padding: wp(1),
        flexDirection: 'row',
      }}>
      <Icon
        onPress={() => props.navigation.goBack()}
        // onPress={() => mainProps.navigation.navigate('FindPart')}
        name="ios-chevron-back"
        type="Ionicons"
        size={wp(18)}
        color={colors.BACK_ARROW_GREY}
        style={{top: hp(-0.7)}}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('FindPart')}>
        <Image
          source={require('../../../../Assets/images/Home_Button.png')}
          resizeMode="contain"
          style={{
            width: wp(16),
            height: wp(16),
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('FindOrPart')}>
        <Image
          source={require('../../../../Assets/images/Part_Number_Button.png')}
          resizeMode="contain"
          style={{
            width: wp(16),
            height: wp(16),
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ProductInfoGuid')}>
        <Image
          source={require('../../../../Assets/images/Product_Info_Button.png')}
          resizeMode="contain"
          style={{
            width: wp(16),
            height: wp(16),
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('TechnicalSupport')}>
        <Image
          source={require('../../../../Assets/images/Tech_Support_Button.png')}
          resizeMode="contain"
          style={{
            width: wp(16),
            height: wp(16),
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Menu')}>
        <Image
          source={require('../../../../Assets/images/Menu_Button.png')}
          resizeMode="contain"
          style={{
            width: wp(16),
            height: wp(16),
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
