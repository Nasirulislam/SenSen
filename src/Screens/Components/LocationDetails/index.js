import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Linking,
} from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
// import SearchBox from '../Common/SearchBox';
// import WhiteShadowBox from '../Common/WhiteShadowBox';
// import ProductInfoListComponent from '../Common/ProductInfoListComponent';
// import {colors, SHW} from '../../../Config/Helper/styles';
// import {hp, wp} from '../../../Config/Helper/ResponsiveScreen';
import Language from '../../../Config/Language';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import openMap from 'react-native-open-maps';
import {getDistance, getPreciseDistance} from 'geolib';
import constants from '../../../Store/Service/apiConstants'

// props.navigation.getParam("url")

const index = props => {
  const [storeLocs, setStoreLocs] = useState([]);
  const [seting, setSetting] = useState(false);
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const zipcode = props.route.params.zipcode;
  const scType=props.route.params.type
  scType=='zip'?( zipcode.replace(' ', '%20'),zipcode.replace('+', '%2b')):null
  //   {latitude: 31.518788113410, longitude: 74.345011290938},

  const [clientLongitude, setClientLongitude] = useState(0);
  const [clientLatitude, setclientLatitude] = useState(0);

  function distance(lat1, lat2, lon1, lon2) {
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = (lon1 * Math.PI) / 180;
    lon2 = (lon2 * Math.PI) / 180;
    lat1 = (lat1 * Math.PI) / 180;
    lat2 = (lat2 * Math.PI) / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return c * r;
  }
  const calculateDistance = vari => {
    console.log('inside calculate distance');
    console.log(vari);
    // var dis = getDistance(
    //   {latitude: , longitude: },
    //   {latitude: 31.518788113410, longitude: 74.345011290938},
    // );
    vari.forEach(store => {
      console.log('store......');
      console.log(store);
      var lat = parseFloat(store.latitude);
      var lon = parseFloat(store.longitude);
      // var cllat=parseFloat(clientLatitude)
      // var cllon=parseFloat(clientLongitude)
      if (clientLatitude == 0 || clientLongitude == 0) {
        console.log('inside here')
        // setMessage('Calculating....')
        setTimeout(() => {
          var dis = getDistance(
            {latitude: clientLatitude, longitude: clientLongitude},
            {latitude: lat, longitude: lon},
          );
          dis = dis / 1609.344;
          console.log('check for distance')
          console.log(dis)
          store.distance = dis.toFixed(2);
          
          
        }, 10000)
        console.log(clientLatitude)
        console.log(clientLongitude)
        
        // store.distance = '0';
      } else {
        var dis = getDistance(
          {latitude: clientLatitude, longitude: clientLongitude},
          {latitude: lat, longitude: lon},
        );
        dis = dis / 1609.344;

        console.log(store.name);
        console.log(lat, lon);
        store.distance = dis.toFixed(2);
        if (dis==NaN){
          setMessage("Something went wrong")
          setShow(false);
        }
        else{

          setShow(true);
        }
      }
      console.log(dis);
      // seting ==false?setSetting(true):setSetting(false)
    });
    vari.sort((s1, s2) =>
      s1.distance < s2.distance ? -1 : s1.distance > s2.distance ? 1 : 0,
    );
    console.log(vari)
   
    if(vari[0].distance===undefined){
      // setMessage('Something went wrong please try again')
    }
    else{
      setMessage('')
      setStoreLocs(vari);
    }
    // seting ==false?setSetting(true):setSetting(false)
    // alert(
    //   `Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`
    // );
  };

  const locFunc=()=>{
    setClientLongitude(parseFloat(props.route.params.long))
    setclientLatitude(parseFloat(props.route.params.lat))
  }
  const zipCodeFunc = async () => {
    const url1 = '';
    const url2 = '';
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyCeBtByJGrCl8NyHYSDvjEpKp8shsLPpPs`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      if (json) {
        if (json) {
          console.log('---------------------------');
          console.log(json);
          if (json.status == 'ZERO_RESULTS') {
            setMessage('No Result Found');
          } else {
            setMessage('');
            console.log(json.results[0].geometry.location);
            console.log('---------------------------');
            setclientLatitude(json.results[0].geometry.location.lat);
            setClientLongitude(json.results[0].geometry.location.lng);
          }

          // setStoreLocs(json)
        } else {
          console.log('not ok1');
        }
        if (index == 0) {
          console.log('not ok2');
        } else {
          console.log('not ok3');
        }
      } else {
        console.log('not ok4');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const reqFunc = async () => {
    try {
      // setLoadingPending(true);
      console.log('1');
      console.log('2');
      const response = await fetch(constants.BASE_URL+'/stores', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();

      if (json) {
        if (json) {
          calculateDistance(json);
        } else {
          console.log('not ok5');
        }
        if (index == 0) {
          console.log('not ok6');
        } else {
          console.log('not ok7');
        }
      } else {
        console.log('not ok8');
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    reqFunc();
scType=='zip'? zipCodeFunc():locFunc()
  }, [clientLongitude]);
  // useEffect(() => {

  //   calculateDistance();
  // }, [storeLocs]);

  const handlePress = (lat, lon) => {
    var url = 'https://www.google.com/maps/dir//' + lat + ',' + lon;
    // Linking.openURL('maps://app?saddr=100+101&daddr=100+102')
    console.log(url);
    Linking.openURL(url);
    // openMap({ latitude: lati, longitude: longi });
    // https://www.google.com/maps/dir//43.6894962,-79.6069964
  };
  const openWeb = url => {
    Linking.openURL(url);
    // openMap({ latitude: 31.520370, longitude: 74.358749 });
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.outside}>
        <View style={{flex: 0.5}}>
          <Text style={styles.nameStyle}> {item.name} </Text>
          <Text style={styles.detailStyle}> {item.contact} </Text>
          {/* <Text style={styles.detailStyle}>{item.op}</Text> */}
          <Text style={styles.detailStyle}> Closes {item.closeTime} </Text>
          <Text style={styles.detailStyle}> {item.type} </Text>
          <Text style={styles.distStyle}>
            
            {(item.distance)}
            {' '}miles from {scType=='zip'?zipcode : 'your location'}
          </Text>
        </View>
        <View style={{justifyContent: 'center', flex: 0.2}}>
          <TouchableOpacity onPress={() => openWeb(item.websiteUrl)}>
            <View style={{marginLeft: 10}}>
              <Icon name="earth" size={30} color="#009dff" />
            </View>
            <Text style={styles.btnColor}> WEBSITE </Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', flex: 0.3}}>
          <TouchableOpacity
            onPress={() => handlePress(item.latitude, item.longitude)}>
            <View style={{marginLeft: 20}}>
              <Icon name="directions" size={30} color="#009dff" />
            </View>
            <Text style={styles.btnColor}> DIRECTIONS </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Container {...props}>
      <View style={styles.container}>
        <Image
          source={require('../../../Assets/images/SENSEN_Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.menuTxt}> {Language.FIND_LOCAL} </Text>
        <SafeAreaView style={{backgroundColor: 'white', marginBottom: 20}}>
          <Text style={{color: 'red'}}> {message} </Text>
          {/* <Text> {clientLongitude}</Text> */}
          {show && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={storeLocs}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          )}
        </SafeAreaView>
      </View>
    </Container>
  );
};

export default index;