import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigator } from '../components/BottomNavigator';

export const Products = ({}) => {
	return (
		<Layout style={styles.container}>
			<BottomNavigator/>
		</Layout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})