import { Dimensions, Platform, StyleSheet } from 'react-native';
import { wp } from '../../../../Config/Helper/ResponsiveScreen';
const {width} = Dimensions.get('screen');

export default styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		width: wp(100),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	item: {
		width: wp(30),
		height: wp(30),
	},
	imageContainer: {
		flex: 1,
		marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
		backgroundColor: 'white',
		borderRadius: 8,
	},
	image: {
		...StyleSheet.absoluteFillObject,
		resizeMode: 'cover',
	},
	menuTxt: {
		width: '100%',
		backgroundColor: '#1b7139',
		paddingVertical: 5,
		fontSize: width / 15,
		color: 'white',
		fontFamily: 'EurostileBQ-Regular',
		textAlign: 'center',
	},
});
