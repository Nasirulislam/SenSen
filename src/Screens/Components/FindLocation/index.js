import React,{useState,useEffect} from 'react';
import {View, Text, Image, PermissionsAndroid, Keyboard,TextInput,Platform,Alert} from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
import { PERMISSIONS, request } from "react-native-permissions";
import Button from '../../../Components/button';
import Language from '../../../Config/Language';
import Geolocation from '@react-native-community/geolocation';

const index = props => {
  //useState hook to store coordinates and other variables
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
 
  // whenever component will mount application will ask for locaation permission if not given and get current coordinates
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

  // variable to store zipcode and error message
  const [zipcode,setZipCode]=useState("")
  const [message,setMessage]=useState("")
  let params = { ref: true }
  
  //function handler for search by zipcode
  const handleSubmit=()=>{
    if(zipcode==""){
      setMessage("*Zipcode Can't be empty")
    }
    else{
      performSearch()
    }
   
  }

  //function handler to search by nearest location
  const handleFindNearest=()=>{
    //generating alert if location permission is not enabled.
    if(currentLongitude==''){
      Alert.alert(
                      "Warning!",
                      "Please grant location permission to use this feature.",
                      [
                        {
                          text:"ok",
                          style:"ok",
                        },
                      ],
                      {
                        cancelable:true,
                      }
                    )
    }
    else{
      //ketboard dismissal on submit
      Keyboard.dismiss()
      params['type'] = 'loc'
      params['long'] = currentLongitude ? currentLongitude : null
      params['lat'] = currentLatitude ? currentLatitude : null
      //location router
      props.navigation.navigate('LocDetails', params);
      console.log(currentLongitude,currentLongitude)
    }
  }
  
  //zipcode router
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
