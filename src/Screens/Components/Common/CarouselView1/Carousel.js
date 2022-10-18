import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
	View,
	Dimensions,
	SafeAreaView,
	Image, Modal, Text
} from 'react-native';
import { hp, wp } from '../../../../Config/Helper/ResponsiveScreen';
import styles from './styles';
import Icon from 'react-native-dynamic-vector-icons';
import Language from '../../../../Config/Language';
import Slider from '@react-native-community/slider';
import _ from 'lodash';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';
import { ScrollView } from 'react-native-gesture-handler';

const { width: screenWidth } = Dimensions.get('window');

const CarouselView1 = (props) => {

	const [selectedImage, setSelectedImage] = useState(0);
	const [imagearray, setImageArray] = useState(props.contentArray);
	const carouselRef = useRef(null);

	 useEffect(() => {
		filterImages(props.contentArray)
	 }, [props.contentArray]);

	const goForward = () => {
		carouselRef.current.snapToNext();
	};

	const changeCarasole=(index)=>{
		console.log('indexindex',index)
		if(imagearray.length!=index)
		{
			setSelectedImage(index)

		}

	}

	const filterImages=async(images)=>{

		console.log('imagess====>>>>>>>',images)
		console.log('selecion====>>>>>>>',selectedImage)
		if(images.length==1)
		{
			setImageArray(images)
			return;
		}
		//let tempArray=  await images.filter(item => item['URI'].includes("cloudfront"))
		let tempArray=  images;
		await tempArray.map((img,index)=>{
			if(img['Asset File Name'].includes("_"))
			{
				var myString = img['Asset File Name'].substr(img['Asset File Name'].indexOf("_") + 1).split('.')[0]
				tempArray[index]['Asset File Name']=myString;
			}
			
		})
		console.log('tempArray',tempArray)
		var byindex = await tempArray.slice(0);
		await byindex.sort(function(a,b) {
			return a['Asset File Name'] - b['Asset File Name'];
		});
		console.log('by date:');
		byindex.map((pop,index)=>{
			if(pop['Type Code'] == "P04")
			{
				byindex.slice(index,1)
			}
		})
		console.log(byindex);	
		if(byindex.length>1)
		{
			let FINAL_FILTER =  await byindex.filter(item => item['Asset File Name'].length<3)
			console.log('FINAL_FILTER',FINAL_FILTER)
			setImageArray(FINAL_FILTER)
		}
	}
//	let tempArray=  props.contentArray.filter(item => item['URI'].includes("_"))

const { width, height } = Dimensions.get('window')
const images = _.reverse([
  {uri: imagearray[0].URI},
  {uri: imagearray[1].URI},
  {uri: imagearray[2].URI},
  {uri: imagearray[3].URI},
  {uri: imagearray[4].URI},
  {uri: imagearray[5].URI},
  {uri: imagearray[6].URI},
  {uri: imagearray[7].URI},
  {uri: imagearray[8].URI},
  {uri: imagearray[9].URI},

])
console.log(images)


	return (
		<View style={{ flex: 1 }}>
      <Image360Viewer srcset={images} width={wp(100)} height={wp(100)} />
    				</View>
		// <SafeAreaView style={styles.container}>
		// 	<Modal
						
				
		// 		>
					
		// 		<SafeAreaView style={{ ...styles.mainContainer, ...props.mainContainerStyle }}>
		// 			<Text style={styles.menuTxt}>{'PRODUCT'}</Text>
				
					
		// 			</SafeAreaView>
					
		// 			{/* {props.contentArray.length > 0 ?
		// 				<Image
		// 					source={{ uri: imagearray[selectedImage].URI }}
		// 					resizeMode='contain'
		// 					style={{
		// 						top: hp(3),
		// 						alignSelf: 'center',
		// 						width: wp(90),
		// 						height: wp(120),
		// 						borderRadius: 8,
		// 					}}
		// 				/>
		// 				:
		// 				<Image
		// 					style={{
		// 						top: hp(10),
		// 						alignSelf: 'center',
		// 						width: wp(80),
		// 						height: wp(80),
		// 						borderRadius: 8,
		// 					}}
		// 					resizeMode='contain'
		// 					source={require('../../../../Assets/images/Noimage.png')} />
		// 			}

		// 			<Slider
		// 				step={1}
		// 				value={selectedImage}
		// 				style={styles.sliderStyle}
		// 				onValueChange={(index) => changeCarasole(index)}
		// 				minimumValue={0}
		// 				maximumValue={imagearray.length}
		// 				minimumTrackTintColor="gray"
		// 				maximumTrackTintColor="#000000"
		// 			/> */}


				
		// 		<Icon
		// 			onPress={()=>{
		// 				//setSelectedImage(0);
		// 				props.close()
		// 			}}
		// 			name="closecircle"
		// 			type="AntDesign"
		// 			size={wp(10)}
		// 			color={'black'}
		// 			style={{ position: 'absolute', marginTop: hp(90), alignSelf: 'center' }}
		// 		/>
		// 	</Modal>
		// </SafeAreaView>
	);
};

export default CarouselView1;
