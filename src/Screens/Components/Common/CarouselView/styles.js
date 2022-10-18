import { Dimensions, Platform, StyleSheet } from 'react-native';
import { wp, hp } from '../../../../Config/Helper/ResponsiveScreen';
const {width} = Dimensions.get('screen');

export default styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		width: wp(100),
		alignItems: 'center',
		backgroundColor: 'white',
	},
	item: {
		width: wp(20),
		height: wp(20),
	},
	imageContainer: {
		flex: 1,
		marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
		backgroundColor: 'white',
		borderRadius: 8,
	},
	logo: {
		width: width / 1.5,
		height: width / 6,
		alignSelf: 'center'
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
	sliderStyle:
	{
		width: width*0.8,
		marginTop:40, 
		height: 40,
		
		},
	ic:{display: 'flex',
		flexDirection: 'row',
		paddingHorizontal: 0,
	//	position:'absolute',
		//marginTop:hp(65),
	},
	icon1:{flex:0.5,
		alignItems: 'center',
		padding: 4,
		//paddingLeft: wp(20)
	},
	icon2:{flex: 0.5,
	    alignItems: 'center',
   		padding: 4,
		//paddingRight:wp(20)
	},
	iconimg1: {
		width: wp(20)
		   },
	
	c9: {
			  width: wp(10),
			  height: wp(10),
			  shadowColor: 'black',
			  shadowOffset: {width: 0, height: 1},
			  shadowOpacity: 0.5,
			  shadowRadius: 1,
			}
});
