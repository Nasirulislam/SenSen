import React,{useState,useEffect} from 'react';
import {View, Text, Image, PermissionsAndroid, Keyboard,TextInput,Platform} from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
// import SearchBox from '../Common/SearchBox';
// import WhiteShadowBox from '../Common/WhiteShadowBox';
// import ProductInfoListComponent from '../Common/ProductInfoListComponent';
// import {colors, SHW} from '../../../Config/Helper/sty/les';
// import {hp, wp} from '../../../Config/Helper/ResponsiveScreen';
import Button from '../../../Components/button';
import Language from '../../../Config/Language';
import Geolocation from '@react-native-community/geolocation';

const index = props => {
  /////////////
  ////////////
  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');
 
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);
 
  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');
 
        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);
 
        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);
 
        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };
  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);
 
        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);
 
        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);
 
        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
 
        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };


  ////////////////////////////
  //////////////////////////
  
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
  const handleFindNearest=()=>{
    Keyboard.dismiss()
    params['type'] = 'loc'
    params['long'] = currentLongitude ? currentLongitude : null
    params['lat'] = currentLatitude ? currentLatitude : null
    props.navigation.navigate('LocDetails', params);
    console.log(currentLongitude,currentLongitude)
  }
  const performSearch=()=>{
    Keyboard.dismiss()
    console.log(zipcode)
    params['type'] = 'zip'
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

              <Button size="small" text="Find Nearest"
              goto={handleFindNearest} />

                
            </View>
        </View>
      </View>
    </Container>
  );
};

export default index;
