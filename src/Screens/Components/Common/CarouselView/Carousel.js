import React, {useRef, useState, useEffect} from 'react';
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {View, Dimensions, SafeAreaView, Image, Modal, Text} from 'react-native';
import {hp, wp} from '../../../../Config/Helper/ResponsiveScreen';
import styles from './styles';
import Icon from 'react-native-dynamic-vector-icons';
import Language from '../../../../Config/Language';
import Slider from '@react-native-community/slider';
import ImageZoom from 'react-native-image-pan-zoom';
import {NoFlickerImage} from '../../../../Components/no-flicker-image';
import FastImage from 'react-native-fast-image';

const {width: screenWidth} = Dimensions.get('window');

const CarouselView = props => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imagearray, setImageArray] = useState(props.contentArray);
  const carouselRef = useRef(null);

  useEffect(() => {
    filterImages(props.contentArray);
  }, [props.contentArray]);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const changeCarasole = index => {
    console.log('indexindex', index);
    if (imagearray.length != index) {
      setSelectedImage(index);
    }
  };

  const filterImages = async images => {
    console.log('imagess====>>>>>>>', images);
    console.log('selecion====>>>>>>>', selectedImage);
    if (images.length == 1) {
      setImageArray(images);
      return;
    }
    //let tempArray=  await images.filter(item => item['URI'].includes("cloudfront"))
    let tempArray = images;
    await tempArray.map((img, index) => {
      if (img['Asset File Name'].includes('_')) {
        var myString = img['Asset File Name']
          .substr(img['Asset File Name'].indexOf('_') + 1)
          .split('.')[0];
        tempArray[index]['Asset File Name'] = myString;
      }
    });
    console.log('tempArray', tempArray);
    var byindex = await tempArray.slice(0);
    await byindex.sort(function (a, b) {
      return a['Asset File Name'] - b['Asset File Name'];
    });
    console.log('by date:');
    byindex.map((pop, index) => {
      if (pop['Type Code'] == 'P04') {
        byindex.slice(index, 1);
      }
    });
    console.log(byindex);
    if (byindex.length > 1) {
      let FINAL_FILTER = await byindex.filter(
        item => item['Asset File Name'].length < 3,
      );
      console.log('FINAL_FILTER', FINAL_FILTER);
      setImageArray(FINAL_FILTER);
    }
  };
  let tempArray = props.contentArray.filter(item => item['URI'].includes('_'));
  console.log([props.contentArray]);
  console.log([tempArray]);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        presentationStyle={'overFullScreen'}
        animationType={props.animationType}
        transparent={props.transparent}
        visible={props.visible}>
        <SafeAreaView
          style={{...styles.mainContainer, ...props.mainContainerStyle}}>
          <Image
            source={require('../../../../Assets/images/SENSEN_Logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          {/* <Text style={styles.menuTxt}>{'PRODUCT'}</Text> */}

          {props.contentArray.length > 0 ? (
            <ImageZoom
              cropWidth={wp(96)}
              cropHeight={wp(130)}
              imageWidth={wp(90)}
              imageHeight={wp(120)}>
              {imagearray.map((img, index) => (
                <FastImage
                  style={{
                    width: wp(90),
                    height: wp(120),
                    top: hp(1),
                    alignSelf: 'center',
					display:selectedImage===index?'flex':'none'
                  }}
                  source={{uri: img.URI}}
                  resizeMode={FastImage.resizeMode.contain}
                />
              ))}
            </ImageZoom>
          ) : (
            // <Image
            // 	source={{ uri: imagearray[selectedImage].URI }}
            // 	resizeMode='contain'
            // 	style={{
            // 		top: hp(3),
            // 		alignSelf: 'center',
            // 		width: wp(90),
            // 		height: wp(120),
            // 		borderRadius: 8,
            // 	}}
            // />s
            <Image
              style={{
                top: hp(10),
                alignSelf: 'center',
                width: wp(80),
                height: wp(80),
                borderRadius: 8,
              }}
              resizeMode="contain"
              source={require('../../../../Assets/images/Noimage.png')}
            />
          )}

          <Slider
            step={1}
            value={selectedImage}
            style={styles.sliderStyle}
            onValueChange={index => changeCarasole(index)}
            minimumValue={0}
            maximumValue={imagearray.length}
            minimumTrackTintColor="#1b7139"
            thumbTintColor="#1b7139"
            //	thumbStyle={{ height: 40, width: 40, backgroundColor: 'transparent' }}
            //	thumbImage={require('../../../../Assets/images/sli.png')}
            //	thumbImage={require('../../../../Assets/images/thumb.png')}
          />

          {/* <Carousel
						onSnapToItem={(currentIndex) => setSelectedImage(currentIndex)}
						inactiveSlideScale={1}
						inactiveSlideOpacity={1}
						value={3}
						containerCustomStyle={{
							marginTop: hp(1),
							paddingLeft: wp(5),
							alignSelf: 'center'
						}}
						ref={carouselRef}
						sliderWidth={wp(1)}
						sliderHeight={screenWidth}
						itemWidth={wp(1)}
						data={props.contentArray}
						renderItem={renderItem}
						hasParallaxImages={true}
					 //loop={true}
					/> */}

          {/* <Image
                    	 resizeMode="contain"
						 style = {{width: wp(20), position:"absolute", alignSelf:'flex-end'}}
                     	 source={require('../../../../Assets/images/pinch.png')} />  */}
          <Image
            resizeMode="contain"
            style={{
              width: wp(20),
              position: 'absolute',
              alignSelf: 'flex-start',
              marginTop: hp(60),
              marginLeft: 15,
            }}
            source={require('../../../../Assets/images/360th.png')}
          />
          <Image
            resizeMode="contain"
            style={{
              width: wp(20),
              position: 'absolute',
              alignSelf: 'flex-end',
              marginTop: hp(60),
            }}
            source={require('../../../../Assets/images/pin2.png')}
          />
        </SafeAreaView>

        <Icon
          onPress={() => {
            setSelectedImage(0);
            props.close();
          }}
          name="closecircle"
          type="AntDesign"
          size={wp(10)}
          color={'black'}
          style={{position: 'absolute', marginTop: hp(90), alignSelf: 'center'}}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default CarouselView;
