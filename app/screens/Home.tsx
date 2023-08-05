import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppColors from '../utils/AppColors';
import { BottomNavigator } from '../components/BottomNavigator';
import { CardDefault } from '../components/Cards';
import { ThemeContext } from '../../configs/theme';
import { Layout } from '@ui-kitten/components';

export const Home = ({}) => {
	const themeContext = React.useContext(ThemeContext);

	return (
		<Layout style={styles.container}>
			<View style={styles.mainView}>
				<TouchableOpacity onPress={themeContext.toggleTheme} style={{ width: 100, height: 100, backgroundColor: 'red'}}/>
				<CardDefault/>
			</View>
			<BottomNavigator/>
		</Layout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	mainView: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
})