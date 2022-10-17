/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState, useContext } from 'react';
 import {
   View,
   Text,
   Keyboard,
   SafeAreaView,
   TextInput,
   Dimensions,
   Image,
   ScrollView,
   TouchableOpacity
 } from 'react-native';
 import { Select, SelectItem } from '@ui-kitten/components';
 import Button from '../../../Components/button';
 import Language from '../../../Config/Language';
 import { ALERT_MESSAGE } from '../../../Config/Helper/GlobalHelper';
 
 
 import styles from './styles';
 import { getDropdownValues } from '../../../Store/Actions/PartSearchAction';
 import context from '../../../Store/Context';
 import Icon from 'react-native-dynamic-vector-icons';
 import { colors } from '../../../Config/Helper/styles';
 import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';
 import BottomBar from '../Common/BottomBar/BottomBar';
 
 const { width, height } = Dimensions.get('screen');
 
 const Index: () => React$Node = (props) => {
   const global = useContext(context);
   const [loading, setLoading] = useState(true);
   let params = { ref: true }
   let partNumber = null;
 
   let yearStatus = null;
   let makeStatus = null;
   let modelStatus = null;
 
   const [makes, setMakes] = React.useState([]);
   const [years, setYears] = React.useState([]);
   const [models, setModels] = React.useState([]);
 
   const [selectedMake, setSelectedMake] = React.useState(0);
   const [selectedYear, setSelectedYear] = React.useState(0);
   const [selectedModal, setSelectedModal] = React.useState(0);
 
   const displayMake = makes[selectedMake.row];
   const displayYears = years[selectedYear.row];
   const displayModal = models[selectedModal.row];
 
   useEffect(() => getData('Make'), []);
 
   useEffect(() => {
     setSelectedYear(0)
     setSelectedModal(0)
     getData('Year')
   }, [selectedMake]);
 
   useEffect(() => {
     setSelectedModal(0)
     getData('Model')
 
   }, [selectedYear]);
 
   useEffect(() => {
 
     if(displayYears && displayMake && displayModal != null){
       console.log("model was selected");
       console.log("displayModel", displayModal);
       console.log("All Dropdown options selected, automatically performing Search");
       performSearch();
     }
   }, [selectedModal]);
 
 
   const getData = (flag) => {
     var query = { felid: flag, input: {} }
     if (selectedYear) {
       query['input']['Year'] = displayYears
     }
     if (selectedMake) {
       query['input']['Make'] = displayMake
     }
     setLoading(true);
     getDropdownValues(query, global)
       .then(function (res) {
         console.log(res)
         if (res.data.felid == 'Year') {
           res.data.data.sort();
           res.data.data.reverse();
           setYears(res.data.data)
         }
         if (res.data.felid == 'Make')
           setMakes(res.data.data)
         if (res.data.felid == 'Model')
           setModels(res.data.data)
         setLoading(false);
       })
 
   };
   const renderOption = (title) => <SelectItem key={title} title={title} />;
 
   const performSearch = () => {
     params['Year'] = displayYears ? displayYears : null
     params['Make'] = displayMake ? displayMake : null
     params['Model'] = displayModal ? displayModal : null
     params['partNumber'] = partNumber ? partNumber : null
 
     // Check if part number input is filled
     if (params['partNumber'] != null)
       props.navigation.navigate('SearchInterchangeResultsComponent', params);
       
     else if (displayYears && displayMake && displayModal)
       props.navigation.navigate('SectionProductComponent', params);
     else {
       ALERT_MESSAGE({
         message: 'Please Select Year,Make,Model or partNumber',
         buttons: [{ text: 'Okay' }],
       });
 
     };
   };
 
   const handleKeyDown = (e) => {
     if(e.nativeEvent.key == "Enter"){
       // Keyboard.dismiss();
       console.log("keyDown", e.nativeEvent.key);
       console.log("partNumber", partNumber);
       // performSearch();
     }else{
       console.log("keyDown", e.nativeEvent.key);
     }
   }
 
   const onPressSearch = () => {
     console.log("partNumber", partNumber);
     if(partNumber){
       performSearch();
      
     }else{
       console.log("unfocus input");
       console.log("displayModel", displayModal);
       Keyboard.dismiss()
     }
   }
 
   const onSelectModel = (index) => {
     setSelectedModal(index)
     console.log("index", index);
     console.log("displayYears", displayYears);
     console.log("displayMake", displayMake);
     console.log("displayModel", displayModal);
   }
   
   return (
     <>
       <View style={styles.container}>
         <Image
           source={require('../../../Assets/images/CSA_Watermark.png')}
           resizeMode="contain"
           style={styles.watermark}
         />
         <SafeAreaView style={styles.safeview}>
           <ScrollView style={{ marginBottom: hp(6), width: width }}>
             <Image
               source={require('../../../Assets/images/SENSEN_Logo.png')}
               resizeMode="contain"
               style={styles.logo}
             />
             <View style={styles.controlContainer}>
               <Select
                 status={makeStatus}
                 disabled={loading}
                 placeholder={Language.CHOOSE_MAKE}
                 value={displayMake}
                 selectedIndex={selectedMake}
                 onSelect={(index) => setSelectedMake(index)}>
                 {makes.length > 0 && makes.map(renderOption)}
               </Select>
             </View>
 
             <View style={styles.controlContainer}>
               <Select
                 status={yearStatus}
                 disabled={loading}
                 placeholder={Language.CHOOSE_YEAR}
                 value={displayYears}
                 selectedIndex={selectedYear}
                 onSelect={(index) => setSelectedYear(index)}>
                 {years.length > 0 && years.map(renderOption)}
               </Select>
             </View>
 
 
             <View style={styles.controlContainer}>
               <Select
                 status={modelStatus}
                 disabled={loading}
                 placeholder={Language.CHOOSE_MODEL}
                 value={displayModal}
                 selectedIndex={selectedModal}
                 onSelect={(index) => onSelectModel(index)}>
                 {models.length > 0 && models.map(renderOption)}
               </Select>
             </View>
 
             <Text style={styles.ORtxt}>{Language.OR}</Text>
 
             <Text style={styles.refTxt}>
               {`${Language.CHOOSE_REFERENCE} / ${Language.PART} * ${Language.SEARCH}`}
             </Text>
             <TextInput placeholder={Language.SEARCH} style={styles.partInput}
               onKeyPress={(e) => handleKeyDown(e)}
               onChangeText={(text) => partNumber = text}
             />
             <Button
               size="small"
               text={Language.FIND_PART}
               goto={onPressSearch}
             />
             {/* () => nav.navigate('SectionProductComponent') */}
           </ScrollView>
         </SafeAreaView>
         <BottomBar {...props} />
       </View>
       {/* <Loading/> */}
     </>
   );
 };
 
 export default Index;
 