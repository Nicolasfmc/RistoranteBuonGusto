import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Layout, Text } from '@ui-kitten/components';

export const CardDefault = ({}) => {
	return (
		<Card style={styles.cardDefault} status='info'>
			<Text>aa</Text>
		</Card>
	)

}

const styles = StyleSheet.create({
	cardDefault: {
		width: '50%',
		height: '25%',
		margin: 2,
	},
})