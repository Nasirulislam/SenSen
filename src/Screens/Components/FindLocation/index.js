import React,{useState} from 'react';
import {View, Text, Image, Dimensions, Keyboard,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
// import SearchBox from '../Common/SearchBox';
// import WhiteShadowBox from '../Common/WhiteShadowBox';
// import ProductInfoListComponent from '../Common/ProductInfoListComponent';
// import {colors, SHW} from '../../../Config/Helper/sty/les';
// import {hp, wp} from '../../../Config/Helper/ResponsiveScreen';
import Button from '../../../Components/button';
import Language from '../../../Config/Language';

const index = props => {
  
  const [zipcode,setZipCode]=useState("")
  const [message,setMessage]=useState("")
  let params = { ref: true }
  const handleSubmit=()=>{
    if(zipcode==""){
      setMessage("*Zipcode Can't be empty")
    }
    else{
      performSearch()
    }
   
  }
  const performSearch=()=>{
    Keyboard.dismiss()
    console.log(zipcode)
    params['zipcode'] = zipcode ? zipcode : null
    props.navigation.navigate('LocDetails', params);
  }
  return (
    <Container {...props}>
      <View style={styles.container}>
        <Image
          source={require('../../../Assets/images/SENSEN_Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.menuTxt}>{Language.FIND_LOCAL}</Text>
        <View style={{alignItems: 'center'}}>
          
            <View style={styles.topView}>
             <Text style={styles.blackSmallFonts}>
                ENTER YOUR
              </Text>
              <Text style={styles.boldFont}>
              ZIP/POSTAL CODE
              </Text>
              <Text style={styles.blackSmallFonts}>
              {"TO FIND \nTHE NEAREST SENSEN® DEALER."}
              </Text>
            </View>
            <View style={styles.iptContainer}>
              <TextInput
                style={styles.inputContainer } keyboardType="text" textAlign='center' placeholder='ZIP/POSTALCODE'  onChangeText={(text) => {setZipCode(text); setMessage("")}}/> 
              {/* <TouchableOpacity style={styles.btn} activeOpacity={.7}>
                <Text style={styles.btnTxt}>SUBMIT</Text>
              </TouchableOpacity> */}
              <Text style={styles.error}>
                {message}
              </Text>
              
               <Button size="small" 
              goto={handleSubmit} />
                
            </View>
        </View>
      </View>
    </Container>
  );
};

export default index;
