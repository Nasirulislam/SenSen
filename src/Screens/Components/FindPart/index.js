import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Select, SelectItem } from '@ui-kitten/components';
import ImageSlider from 'react-native-image-slider';
import Button from '../../../Components/button';
import Language from '../../../Config/Language';
import { ALERT_MESSAGE } from '../../../Config/Helper/GlobalHelper';

import styles from './styles';
import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';
import { clearAsync } from '../../../Config/Helper/GlobalHelper';
import { CommonActions } from '@react-navigation/native';
import { SetSlidingImages } from '../../../Store/Actions/ProductActions';
import { getDropdownValues } from '../../../Store/Actions/PartSearchAction';
import context from '../../../Store/Context';
import Icon from 'react-native-dynamic-vector-icons';
import { colors } from '../../../Config/Helper/styles';
import BottomBar from '../Common/BottomBar/BottomBar';

const { width, height } = Dimensions.get('screen');


const FindPart: () => React$Node = (props) => {
  const global = useContext(context);
  const [loading, setLoading] = useState(true);
  let params = {ref: true }
  let partNumber = null;

  let yearStatus = null;
  let makeStatus = null;
  let modelStatus = null;
////////////////////////////////////
  const [makes, setMakes] = useState([]);
  const [years, setYears] = useState([]);
  const [models, setModels] = useState([]);

  const [selectedMake, setSelectedMake] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedModal, setSelectedModal] = useState(0);

  const [images, setImages] = useState([]);
///////////////////////////////////////////
  // let displayMake = makes[selectedMake.row];
  // let displayYears = years[selectedYear.row];
  // let displayModal = models[selectedModal.row];
  const displayMake = makes[selectedMake.row];
  const displayYears = years[selectedYear.row];
  const displayModal = models[selectedModal.row];

  useEffect(() => getSliderData('dashboard'), []);
  // useEffect(() => getData('Make'), []);
  // useEffect(() => {
  //   setSelectedYear(0)
  //   setSelectedModal(0)
  //   displayYears = undefined
  //   getData('Year')
  // }, [selectedMake]);
  // useEffect(() => {
  //   setSelectedModal(0)
  //   if (selectedYear !== 0)
  //   getData('Model')
  // }, [selectedYear]);
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

  const getSliderData = (flag) => {
    var query = { type: flag }
    setLoading(true);
    SetSlidingImages(query, global)
      .then(function (res) {
        setImages([...images, ...res.images]);
        setLoading(false);
      })
  };

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

  // const onPressSearch = () => {
  //   params['Year'] = displayYears ? displayYears : null
  //   params['Make'] = displayMake ? displayMake : null
  //   params['Model'] = displayModal ? displayModal : null
  //   params['partNumber'] = partNumber ? partNumber : null

  //   if ((displayYears && displayMake && displayModal) || (partNumber))
  //     props.navigation.navigate('SectionProductComponent', params);
  //   else {
  //     ALERT_MESSAGE({
  //       message: 'Please Select Year,Make,Model',
  //       buttons: [{ text: 'Okay' }],
  //     });
  //   }
  // };

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
     // Keyboard.dismiss();
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
        <View
          style={{ width: width, height: height / 3.3, backgroundColor: 'pink' }}>
          <ImageSlider
            autoPlayWithInterval={5000}
            images={images}
            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View key={index} style={{ width: width }}>
                <Image
                  resizeMode="stretch"
                  source={{ uri: item }}
                  style={styles.bannerImg}
                />
              </View>
            )}
            customButtons={(position, move) => (
              <View style={styles.dotMain}>
                {images.map((image, index) => {
                  return (
                    <View style={styles.dotStyle} />
                    // <Text style={position === index && styles.buttonSelected}>
                    //   {index + 1}
                    // </Text>
                  );
                })}
              </View>
            )}
          />
        </View>

        <SafeAreaView style={styles.safeview}>
          <ScrollView style={{ marginBottom: hp(6) }} showsVerticalScrollIndicator={false}>
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
                onSelect={(index) => setSelectedModal(index)}>
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
            <Button size="small" text={Language.FIND_PART} goto={onPressSearch} />
            {/* <Button
              viewStyle={{ top: hp(-5) }}
              size={'small'}
              text={Language.LOG_OUT}
              goto={() => {
                clearAsync().then((res) => {
                  props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: 'SystemLogin' }],
                    }),
                  );
                });
              }}
            /> */}
          </ScrollView>
        </SafeAreaView>
        <BottomBar {...props} />
      </View>
      {/* <Loading/> */}
    </>
  );
};

export default FindPart;
