/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, Text, Image} from 'react-native';
 import {TouchableOpacity} from 'react-native-gesture-handler';
 import Container from '../../../Components/container';
 import styles from './styles';
 import Language from '../../../Config/Language';
 
 const Index: () => React$Node = (props) => {
   let nav = props.navigation;
 
   return (
     <>
       <Container>
         <Image
           source={require('../../../Assets/images/SENSEN_Logo.png')}
           resizeMode="contain"
           style={styles.logo}
         />
         <Text style={styles.menuTxt}>{Language.MENU}</Text>
 
         <View style={styles.iconRow}>
         <TouchableOpacity onPress={() => nav.navigate('FindPart')}>
           <Image
             source={require('../../../Assets/images/Home_Button.png')}
             resizeMode="contain"
             style={styles.icon}
           />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => nav.navigate('FindOrPart')}>
             <Image
               source={require('../../../Assets/images/Part_Number_Button.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
         </View>
 
         <View style={styles.iconRow}>
           <TouchableOpacity onPress={() => nav.navigate('ProductInfoGuid')}>
             <Image
               source={require('../../../Assets/images/Product_Info_Button.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => nav.navigate('SenSenVideoHub')}>
             <Image
               source={require('../../../Assets/images/Video_Button.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
         </View>
 
         <View style={styles.iconRow}>
           <TouchableOpacity onPress={() => nav.navigate('Troubleshoot')}>
             <Image
               source={require('../../../Assets/images/Troubleshooting_Button.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => nav.navigate('FrequentlyQuestions')}>
             <Image
               source={require('../../../Assets/images/FAQ_Button.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
         </View>
 
         <View style={styles.iconRow}>
         <TouchableOpacity onPress={() => nav.navigate('TechnicalSupport')}>
             <Image
               source={require('../../../Assets/images/Tech_Support_Button.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => nav.navigate('FindLoc')}>
             <Image
               source={require('../../../Assets/images/whereToBuy.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
         </View>
 
         <View style={styles.iconRow}>
          
             <TouchableOpacity onPress={() => nav.navigate('Settings')}>
             <Image
               source={require('../../../Assets/images/Settings_Button.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => nav.navigate('AboutUs')}>
             <Image
               source={require('../../../Assets/images/About_Us_Button.png')}
               resizeMode="contain"
               style={styles.icon}
             />
           </TouchableOpacity>
         </View>
       </Container>
       {/* <Loading/> */}
     </>
   );
 };
 
 export default Index;
 