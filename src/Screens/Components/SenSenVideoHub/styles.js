import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	logo: {
		width: width / 1.5,
		height: width / 6,
		alignSelf: 'center'
	},
	menuTxt:{
		backgroundColor: '#1b7139',
		paddingVertical:5,
		fontSize:width/15,
		color:'white',
		fontFamily: 'EurostileBQ-Regular',
		textAlign:'center'
	},
	controlContainer: {
		right: width * 0.08,
		alignSelf: 'flex-end',
		width: width * 0.3,
		marginTop: height * 0.02,
		borderRadius: 2,
		padding: 3,
		backgroundColor: 'black',
	},
})

export default styles;
