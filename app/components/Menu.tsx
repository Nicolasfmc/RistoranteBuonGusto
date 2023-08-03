import { StyleSheet, Text, View } from 'react-native'
import AppColors from '../utils/AppColors'

export const Menu = ({}) => {
	return (
		<View style={styles.container}>
			<Text>teste</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 55,

		position: 'absolute',
		bottom: 0,
		backgroundColor: AppColors.system._100,

		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
})