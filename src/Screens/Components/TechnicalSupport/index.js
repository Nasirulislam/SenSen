import React from 'react';
import {View, Text, Image, Dimensions, FlatList} from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
// import SearchBox from '../Common/SearchBox';
import WhiteShadowBox from '../Common/WhiteShadowBox';
// import ProductInfoListComponent from '../Common/ProductInfoListComponent';
import {colors, SHW} from '../../../Config/Helper/styles';
import {hp, wp} from '../../../Config/Helper/ResponsiveScreen';
import Language from '../../../Config/Language';

const index = props => {
  return (
    <Container {...props}>
      <View style={styles.container}>
        <Image
          source={require('../../../Assets/images/SENSEN_Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.menuTxt}>{Language.TECHNICAL_SUPPORT}</Text>
        <View style={{alignItems: 'center'}}>
          <WhiteShadowBox boxStyle={{top: hp(2)}}>
            <View>
              <Text style={styles.blackSmallFonts}>
                {"QUESTIONS? \nWE'R HERE TO HELP."}
              </Text>
              <Text style={styles.greenBigFonts}>{'877-395-0213'}</Text>
            </View>
          </WhiteShadowBox>
          <WhiteShadowBox boxStyle={{top: hp(4)}}>
            <View>
              <Text
                style={{...styles.blackSmallFonts, color: colors.SYSTEM_GREEN}}>
                {'BUSINESS HOURS:'}
              </Text>
              <Text style={styles.blackSmallFonts}>
                {'MONDAY- FRIDAY\n8:30 AM - 5:00 PM EST'}
              </Text>
            </View>
          </WhiteShadowBox>
        </View>
      </View>
    </Container>
  );
};

export default index;
