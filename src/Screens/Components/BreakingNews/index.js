import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
import SearchBox from '../Common/SearchBox';
import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';
import { colors, HW, SHW } from '../../../Config/Helper/styles';
import DropDown from '../../Components/Common/DropDown';
import Icon from 'react-native-dynamic-vector-icons';
import ImageSlider from 'react-native-image-slider';
import BnewsView from '../Common/BnewsView';
import { SetSlidingImages } from '../../../Store/Actions/ProductActions';
import { getCategories, SearchNews } from '../../../Store/Actions/brackingAction';
import context from '../../../Store/Context';
const { width, height } = Dimensions.get('screen');
import Language from '../../../Config/Language';

const index = props => {
  const global = useContext(context);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = React.useState([]);
  const [Categories, setCategories] = React.useState([]);
  let [searchText, setSearchText] = React.useState('');
  let [News, setNews] = React.useState([]);


  let [catOptionVisible, setCatOptionVisible] = useState(false);
  let [selectedCat, setSelectedCat] = useState(null);

  let [filterOptionVisible, setFilterOptionVisible] = useState(false);
  let [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => getSliderData('news'), []);
  useEffect(() => getCategoryData(), []);
  useEffect(() => getNewsData(), [selectedCat]);


  const getSliderData = (flag) => {
    var query = { type: flag }
    setLoading(true);
    SetSlidingImages(query, global)
      .then(function (res) {
        setImages([...images, ...res.images]);
        setLoading(false);
      })
  };
  const getCategoryData = () => {
    setLoading(true);
    getCategories(global)
      .then(function (res) {
        setCategories([...Categories, ...res.data]);
        setLoading(false);
      })
  };
  const getNewsData = () => {
    let searchData = { titletext: searchText, category: selectedCat && selectedCat.value ? selectedCat.value : null }
    setLoading(true);
    SearchNews(searchData, global)
      .then(function (res) {
        setNews(res.data);
        setLoading(false);
      })
  };

  const onTextChange = (val) => {
    setSearchText(val);
    getNewsData();
  }
  const onEmptyMag = (val) => {
    if (val == '')
      onTextChange(val);
  }
  return (
    <Container {...props}>
      <View style={styles.container}>
        <Image
          source={require('../../../Assets/images/SENSEN_Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.menuTxt}>{Language.BREAKING_NEWS}</Text>
        <ImageSlider
          autoPlayWithInterval={3500}
          images={images}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={{ width: width }}>
              <Image
                resizeMode="stretch"
                source={{ uri: item }}
                style={{ height: hp(25) }}
              />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.dotMain}>
              {images.map((image, buttonIndex) => (
                <TouchableOpacity
                  onPress={() => move(buttonIndex)}
                  style={[
                    styles.dotStyle,
                    {
                      backgroundColor:
                        position === buttonIndex ? 'black' : 'white',
                    },
                  ]}
                />
              ))}
            </View>
          )}
        />
        <View style={{ alignItems: 'center', top: hp(2) }}>
          <View style={styles.catSearchContainer}>
                <SearchBox
              onPressMag={(val) => { onTextChange(val) }}
              onEmptyMag={(val) => { onEmptyMag(val) }}
              placeholder={Language.SEARCH}
              style={{ ...HW(6, 76) }}
              containerStyle={{
                // top: height * 0.01,
              //  width: wp(50),
                alignSelf: 'flex-end',
              }}
              magStyle={{ ...SHW(14) }}
            />
          </View>
          <View style={styles.catSearchContainer1}>
            <DropDown
              value={selectedCat}
              optionArray={Categories}
              optionVisible={catOptionVisible}
              onPressDropDown={() => setCatOptionVisible(!catOptionVisible)}
              onPressOption={value => {
                setSelectedCat(value);
                setCatOptionVisible(false);
              }}
              
              type={'WhiteTextBoxList'}
              selectionBoxStyle={{ top: hp(5)}}
              label={Language.CATEGORIES}
              containerStyle={{ ...HW(8, 90) }}
              rightComponent={
                <Icon
                  style={{ right: wp(-10) }}
                  type={'MaterialIcons'}
                  name={'keyboard-arrow-down'}
                  color={'white'}
                  size={wp(7)}
                />
              }
            />
           
          </View>
          <View style={styles.listStyle}>
            <FlatList
              
              style={{ paddingHorizontal: 10 }}
              data={News}
              renderItem={({ item }) => (
             <BnewsView 

                  item={item}
                />
              )}
              ItemSeparatorComponent={() => (
                <View style={{ height: height * 0.03 }} />
              )}
          
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default index;
