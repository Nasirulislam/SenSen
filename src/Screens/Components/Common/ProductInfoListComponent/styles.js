import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: width * 0.835,
		alignItems: 'center',
		borderRadius: 2,
		padding: 1,
		shadowColor: 'grey',
		backgroundColor: 'white',
		shadowOffset: { width: 3, height: 3 },
		shadowOpacity: 0.8,
		shadowRadius: 5,
	},
	inputBox:{
		borderRadius: 4,
		borderWidth: 3,
		marginHorizontal: 0,
		width: width * 0.8,
		borderColor: 'black',
		padding: 3,
		height: height * 0.057,
		backgroundColor: 'white',
	},
	searchBox:{
		borderRadius: 4,
		borderWidth: 3,
		// width: width * 1,
		borderColor: 'black',
		// height: width * 1,
		backgroundColor: '#1b7139',
	},
})

export default styles;
