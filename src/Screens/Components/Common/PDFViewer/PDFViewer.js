import React, { useRef, useState, useEffect } from 'react';
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
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
import Pdf from 'react-native-pdf';

const { width: screenWidth } = Dimensions.get('window');

const PDFViewer = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<Modal
				presentationStyle={'overFullScreen'}
				animationType={props.animationType}
				transparent={props.transparent}
				visible={props.visible}>
				<SafeAreaView style={{ ...styles.mainContainer, ...props.mainContainerStyle }}>
					<Text style={styles.menuTxt}>{props.title}</Text>
					<Pdf
						source={{ uri: props.uri, cache: true }}
						onLoadComplete={(numberOfPages, filePath) => {
							console.log(`number of pages: ${numberOfPages}`);
						}}
						onPageChanged={(page, numberOfPages) => {
							console.log(`current page: ${page}`);
						}}
						onError={(error) => {
							console.log(error);
						}}
						onPressLink={(uri) => {
							console.log(`Link presse: ${uri}`)
						}}
						style={{ marginTop: hp(2), flex: 1, width: wp(80), height: hp(50) }} />
				</SafeAreaView>
				<Icon
					onPress={props.close}
					name="closecircle"
					type="AntDesign"
					size={wp(10)}
					color={'black'}
					style={{ position: 'absolute', marginTop: hp(90), alignSelf: 'center' }}
				/>
			</Modal>
		</SafeAreaView>
	);
};

export default PDFViewer;
