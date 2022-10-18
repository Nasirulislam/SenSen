/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   View,
   Text,
   SafeAreaView,
   Dimensions,
   Image,
   ScrollView,
 } from 'react-native';
 import ImageSlider from 'react-native-image-slider';
 import Language from '../../../Config/Language';
 
 const { width, height } = Dimensions.get('screen');
 import styles from './styles';
 import BottomBar from '../Common/BottomBar/BottomBar';
 import { hp } from '../../../Config/Helper/ResponsiveScreen';
 const images = [];
 
 const Index: () => React$Node = props => {
   return (
     <>
       <View style={styles.container}>
         <Image
           source={require('../../../Assets/images/CSA_Watermark.png')}
           resizeMode="contain"
           style={styles.watermark}
         />
         <View
           style={{ width: width, height: height / 3.3, backgroundColor: 'pink' }}>
           <ImageSlider
             autoPlayWithInterval={3500}
             images={["https://sensen-public.s3.amazonaws.com/about-us-banner/about-us-banner-1.jpg"]}
           />
         </View>
 
         <Text style={styles.aboutHeading}>{Language.ABOUT_US}</Text>
         <SafeAreaView style={styles.safeview}>
           <ScrollView style={{ height: hp(54) }} showsVerticalScrollIndicator={false}>
             <Text style={styles.aboutTxt}>
               SenSen North America is a Specialist in Ride Control manufacturing since 1985.
             </Text>
             <Text style={styles.aboutTxt}>
               SenSen’s family of products include Complete Strut Assemblies, Bare Struts & Shocks, and Air Suspension. SenSen has one of the most complete lines in the industry with over 960 Complete Strut Assemblies, and 1300+ Shocks and Bare Struts. With a commitment to Quality, Value, and Safety, SenSen products are ISO & Intertek Quality Certified. SenSen partnership with DMA Sales, LLC providing Product Engineering Design/Development, Manufacturing, Marketing, Supply Chain, and Distribution based in the United States. With over 365,000 m² distribution in North America, SenSen has the parts you trust and need.
             </Text>
             <Text style={styles.aboutTxt}>
               At SenSen, where quality meets affordability, the advantages are numerous…
               </Text>
 
               <Text style={styles.aboutTxt}>
               ➡	OE Supplier
               </Text> 
               <Text style={styles.aboutTxt}>
               ➡	Premium Components
               </Text> 
               <Text style={styles.aboutTxt}>
               ➡	Limited Lifetime Warranty
               </Text> 
               <Text style={styles.aboutTxt}>
               ➡	World-Class Customer Service
               </Text> 
               <Text style={styles.aboutTxt}>
               ➡	Marketing Support
               </Text> 
               <Text style={styles.aboutTxt}>
               ➡	Live Technical Support
               </Text>
 
               <Text style={styles.aboutTxt}>
               If you have any question, please contact us, we are glad to help, we value our customers!
               Live Support: 877-395-0213
               Business Hours:
               Monday – Friday
               8:30 AM – 5:00 EST
               </Text>
 
             <Image
               source={require('../../../Assets/images/Warranty.png')}
               resizeMode="contain"
               style={styles.warranty}
             />
           </ScrollView>
         </SafeAreaView>
         <BottomBar {...props} />
       </View>
       {/* <Loading/> */}
     </>
   );
 };
 
 export default Index;
 