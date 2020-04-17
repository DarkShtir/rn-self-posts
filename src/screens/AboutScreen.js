import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { StyleSheet, Text, View } from 'react-native';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = () => {
	return (
		<View style={styles.center}>
			<Text>This is best application for your post!</Text>
			<Text>
				Version: <Text style={styles.version}>1.0.0</Text>
			</Text>
		</View>
	);
};

AboutScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: 'About Application',
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item
				title='Toggle Drawer'
				iconName='ios-menu'
				onPress={() => navigation.toggleDrawer()}
			/>
		</HeaderButtons>
	),
});

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	version: {
		fontFamily: 'open-bold',
	},
});
