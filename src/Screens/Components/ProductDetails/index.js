/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useContext, useEffect } from 'react';
 import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
 import { Select, SelectItem } from '@ui-kitten/components';
 import { Spinner } from '@ui-kitten/components';
 
 import styles from './styles';
 
 import { PartDetailsById } from '../../../Store/Actions/PartSearchAction';
 import { getDropdownValues } from '../../../Store/Actions/PartSearchAction';
 import context from '../../../Store/Context';
 import { CommonActions } from '@react-navigation/native';
//  import ImageOverlay from "react-native-image-overlay";
 import Language from '../../../Config/Language';
 import CarouselView from '../Common/CarouselView/Carousel';
 import BottomBar from '../Common/BottomBar/BottomBar';
 import { wp } from '../../../Config/Helper/ResponsiveScreen';
 
 
 const years = [];
 
 const Index: () => React$Node = (props) => {
 
   const params = props.route.params;
   const global = useContext(context);
 
 
 
   const [carousel, setCarousel] = React.useState({
     visible: false,
     contentArray: [{ URI: "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png", 'Asset File Name': '_demo' }],
     field: 'URI',
     close: () => { },
   });
 
 
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [searchValues, setSearchValues] = useState({
     _id: params.id
   });
   useEffect(() => getData(), []);
   const getData = () => {
     setLoading(true);
     PartDetailsById(searchValues, global)
       .then(function (res) {
         setProducts(res.data);
         setLoading(false);
       }).catch(function (e) { console.log(e) })
 
   };
 
   return (
     <>
       {loading ? (<Spinner status='primary' />) : (
         <View style={styles.container}>
           <Image
             source={require('../../../Assets/images/CSA_Watermark.png')}
             resizeMode="contain"
             style={styles.watermark}
           />
           <SafeAreaView style={styles.safeview}>
             <Image
               source={require('../../../Assets/images/SENSEN_Logo.png')}
               resizeMode="contain"
               style={styles.logo}
             />
 
             <ScrollView
               style={styles.contentMain}
               contentContainerStyle={{ paddingBottom: 10 }}
               showsVerticalScrollIndicator={false}>
               <View style={styles.detailhead}>
                 <Text style={styles.productID}>{products[0]["Item Identifier"]}</Text>
                 <Text style={styles.productTitle1}>
                   
                 </Text>
               </View>
              <View style={styles.detailhead1}>
                 {/* <Text style={styles.productID}>{products[0]["Item Identifier"]}</Text> */}
                 <Text style={styles.productTitle}>
                   {products[0]["PartTerminology"]}
                 </Text>
               </View>
               
               <View style={styles.productMainContainer1}>
               <TouchableOpacity style={styles.productImg} onPress={() => setCarousel({
                   visible: true,
                   contentArray: products[0]["images"],
                   field: 'URI'
                 })}>
 
             
                   {products[0].images && products[0].images.length > 0 ?
               
                     <ImageBackground
 
                       source={{ uri: products[0]["images"][0]["URI"] }}
                     // source={require('../../../Assets/images/Noimage.png')}
                       resizeMode="contain"
                       resizeMethod="scale"
                       style={styles.productimage}
                     >
                 <Image
                       resizeMode="contain"
                       style={styles.productimage360}
                       source={{ uri: 'http://sensen-na.com/360.png'}} /> 
                       </ImageBackground>
                     :
                     <Image
                       resizeMode="contain"
                       style={styles.productimage}
                       source={require('../../../Assets/images/Noimage.png')} />
                   }
                     
                 </TouchableOpacity>
        
                 </View>
              
               
 
               <View style={styles.productMainContainer}>
                 <View style={styles.producttxt}>
                                     <Text></Text>
                   <View style={styles.bulletsview}>
                     <Text style={styles.bulletTxt}>
                       {products[0]["partDescription"][0]['Label Description']}
                       
 
                     </Text>
                     <Text style={styles.bulletTxt}>
                       {products[0]["partDescription"][0]['Long']}
                      
 
                     </Text>
                     <Text style={styles.bulletTxt}>
                       {products[0]["partDescription"][0]['Marketing Description']}
                      
                       {"\n"}
 
                     </Text>
                     {/* from below it should be full length text  */}
                     {products[0]["partDescription"].length > 0 && products[0]["partDescription"][0]['Features and Benefits'] ?
                       products[0]["partDescription"][0]['Features and Benefits'].split(';').map((tag, i) =>
                         <Text key={i} style={styles.bulletText}> ● {tag}</Text>)
                       :
                       <Text style={styles.bulletTxt}>
                         {'NA'}
                       </Text>}
                   </View>
                 </View>
 
                 {/* <TouchableOpacity style={styles.productImg} onPress={() => setCarousel({
                   visible: true,
                   contentArray: products[0]["images"],
                   field: 'URI'
                 })}>
 
 
                   {products[0].images && products[0].images.length > 0 ?
                     <Image
                       source={{ uri: products[0]["images"][0]["URI"] }}
                       resizeMode="contain"
                       style={styles.productimage}
                     />
                     :
                     <Image
                       resizeMode="contain"
                       style={styles.productimage}
                       source={require('../../../Assets/images/Noimage.png')} />
                   }
 
 
                 </TouchableOpacity> */}
               </View>
               <ProductList data={{ key1: "Adjustable", value1: products[0].details[0]["Adjustable"], key2: "Adjustable Damping", value2: products[0].details[0]["Adjustable Damping"] }} />
               <ProductList data={{ key1: "Air Adjustable", value1: products[0].details[0]["Air Adjustable"], key2: "Air Bladder", value2: products[0].details[0]["Air Bladder"] }} />
               <ProductList data={{ key1: "Air Bladder Material", value1: products[0].details[0]["Air Bladder Material"], key2: "Air Ride Suspension", value2: products[0].details[0]["Air Ride Suspension"] }} />
               <ProductList data={{ key1: "Bearing Plate Included", value1: products[0].details[0]["Bearing Plate Included"], key2: "Boot Color", value2: products[0].details[0]["Boot Color"] }} />
               <ProductList data={{ key1: "Boot Included", value1: products[0].details[0]["Boot Included"], key2: "Coil Over Springs Included", value2: products[0].details[0]["Coil Over Springs Included"] }} />
               <ProductList data={{ key1: "Coil Spring Diameter (in)", value1: products[0].details[0]["Coil Spring Diameter (in)"], key2: "Coil Spring Diameter (mm)", value2: products[0].details[0]["Coil Spring Diameter (mm)"] }} />
               <ProductList data={{ key1: "Coil Spring Included", value1: products[0].details[0]["Coil Spring Included"], key2: "Color", value2: products[0].details[0]["Color"] }} />
               <ProductList data={{ key1: "Compressed Length (in)", value1: products[0].details[0]["Compressed Length (in)"], key2: "Compressed Length (mm)", value2: products[0].details[0]["Compressed Length (mm)"] }} />
               <ProductList data={{ key1: "Construction", value1: products[0].details[0]["Construction"], key2: "Extended Length (in)", value2: products[0].details[0]["Extended Length (in)"] }} />
               <ProductList data={{ key1: "Extended Length (mm)", value1: products[0].details[0]["Extended Length (mm)"], key2: "Gas Charged", value2: products[0].details[0]["Gas Charged"] }} />
               <ProductList data={{ key1: "Heavy Duty Crimping Rings", value1: products[0].details[0]["Heavy Duty Crimping Rings"], key2: "Lower Mount Type", value2: products[0].details[0]["Lower Mount Type"] }} />
               <ProductList data={{ key1: "Lower Mounting Isolator Included", value1: products[0].details[0]["Lower Mounting Isolator Included"], key2: "New Or Remanufactured", value2: products[0].details[0]["New Or Remanufactured"] }} />
               <ProductList data={{ key1: "Outer Housing Diameter (in)", value1: products[0].details[0]["Outer Housing Diameter (in)"], key2: "Outer Housing Diameter (mm)", value2: products[0].details[0]["Outer Housing Diameter (mm)"] }} />
               <ProductList data={{ key1: "Parts Pack Included", value1: products[0].details[0]["Parts Pack Included"], key2: "Progressive Spring Rate", value2: products[0].details[0]["Progressive Spring Rate"] }} />
               <ProductList data={{ key1: "Protective Aluminum Can", value1: products[0].details[0]["Protective Aluminum Can"], key2: "Spring Included", value2: products[0].details[0]["Spring Included"] }} />
               <ProductList data={{ key1: "Spring Isolators Included", value1: products[0].details[0]["Spring Isolators Included"], key2: "Spring Rate Type", value2: products[0].details[0]["Spring Rate Type"] }} />
               <ProductList data={{ key1: "Spring Seat Included", value1: products[0].details[0]["Spring Seat Included"], key2: "Upper Mount Type", value2: products[0].details[0]["Upper Mount Type"] }} />
               <ProductList data={{ key1: "Upper Mounting Isolator Included", value1: products[0].details[0]["Upper Mounting Isolator Included"], key2: "Weight (lb)", value2: products[0].details[0]["Weight (lb)"] }} />
               <BuyerGuid data={products[0].childrens} />
               <Interchange data={products[0].interchanges} />
               <CarouselView {...carousel} close={() => setCarousel({
                 visible: false,
                 contentArray: [{ URI: "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png", 'Asset File Name': '_demo' }],
                 field: 'URI',
                 close: () => { },
               })} />
             </ScrollView>
           </SafeAreaView>
           <BottomBar {...props} />
         </View>)
       }
     </>
   );
 };
 
 const ProductList = (props) => {
   const data = props.data
   return (
     <View style={styles.productList}>
       <View style={styles.prodTable}>
         <View style={styles.tabCol1}>
           <Text numberOfLines={3} style={styles.prodDetailsTxt}>
             {data["key1"]}
           </Text>
         </View>
         <View style={styles.tabCol2}>
           <Text style={styles.prodDetailsTxt}>
             {data["value1"]}
           </Text>
         </View>
         <View style={styles.tabCol3}>
           <Text style={styles.prodDetailsTxt}>
             {data["key2"]}
           </Text>
         </View>
         <View style={styles.tabCol4}>
           <Text style={styles.prodDetailsTxt}>
             {data["value2"]}
           </Text>
         </View>
       </View>
       <View style={styles.linesaperate} />
     </View>
   );
 };
 
 const BuyerGuid = (props) => {
   let BuyerGuides;
   if (props.data && props.data.length > 0)
     BuyerGuides = JSON.parse(JSON.stringify(props.data))
   else
     BuyerGuides = []
   return (
     <View style={styles.buyerguidmain}>
       <View style={styles.buyerSelector}>
         <Text style={styles.intchangeHeading}>Buyers Guide Detail</Text>
       </View>
       <View style={styles.buyerTable}>
         <View style={styles.buyerCol}>
           <Text numberOfLines={3} style={styles.buyerHeader}>
             Make
           </Text>
         </View>
         <View style={styles.buyerCol}>
           <Text style={styles.buyerHeader}>Model</Text>
         </View>
         <View style={styles.buyerCol}>
           <Text style={styles.buyerHeader}>Qualifiers</Text>
         </View>
         <View style={styles.buyerCol}>
           <Text style={styles.buyerHeader}>Year</Text>
         </View>
       </View>
       <View style={styles.linesaperate} />
       {BuyerGuides.map((child) => (
         <>
           <View style={styles.buyerTable}>
             <View style={styles.buyerCol}>
               <Text numberOfLines={3} style={styles.buyerTxt}>
                 {child.Make}
               </Text>
             </View>
             <View style={styles.buyerCol}>
               <Text style={styles.buyerTxt}>{child.Model}</Text>
             </View>
             <View style={styles.buyerCol}>
               {child.Attributes ?
                 child.Attributes.split(';').map((tag, i) => <Text style={styles.buyerTxt} key={i}>● {tag}{i}</Text>)
                 :
                 <Text style={styles.bulletTxt}>
                   {'NA'}
                 </Text>
               }
 
             </View>
             <View style={styles.buyerCol}>
               <Text style={styles.buyerTxt}>{child.Year}</Text>
             </View>
           </View>
           <View style={styles.linesaperate} />
         </>))
       }
     </View >
   );
 };
 
 const Interchange = (props) => {
 
   let Interchange;
   if (props.data && props.data.length > 0)
     Interchange = JSON.parse(JSON.stringify(props.data))
   else
     Interchange = []
 
   return (
     <View style={styles.buyerguidmain}>
       <View style={styles.buyerSelector}>
         <Text style={styles.intchangeHeading}>Interchanges</Text>
       </View>
       <View style={styles.buyerTable}>
         <View style={styles.interchangeCol1}>
           <Text numberOfLines={3} style={styles.buyerHeader}>
             Part Number
           </Text>
         </View>
         <View style={styles.interchangeCol2}>
           <Text style={styles.buyerHeader}>Brand</Text>
         </View>
       </View>
       <View style={styles.linesaperate} />
       {Interchange.length > 0 && Interchange.map((Ic, i) => (
         <>
           <View key={i} style={styles.buyerTable}>
             <View style={styles.interchangeCol1}>
               <Text numberOfLines={3} style={styles.interchangeTxt}>
                 {Ic['Interchange Part Number']}
               </Text>
             </View>
             <View style={styles.interchangeCol2}>
               <Text style={styles.interchangeTxt}> {Ic['Interchange Target']}</Text>
             </View>
           </View>
           <View style={styles.linesaperate} />
         </>
 
       ))}
     </View>
   );
 };
 
 export default Index;
 