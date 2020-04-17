import React, { useState } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	Button,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { addPost } from '../store/actions/post';

export const CreateScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	const img =
		'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg';

	const saveHandler = () => {
		const post = {
			date: new Date().toJSON(),
			text: text,
			img: img,
			booked: false,
		};
		dispatch(addPost(post));
		navigation.navigate('Main');
	};

	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
				<View style={styles.wrapper}>
					<Text style={styles.title}>Create new Post</Text>
					<TextInput
						style={styles.textArea}
						placeholder='Input posts text'
						value={text}
						onChangeText={setText}
						multiline
					/>
					<Image
						style={{ width: '100%', height: 200, marginBottom: 10 }}
						source={{
							uri: img,
						}}
					/>
					<Button
						title='Create post'
						color={THEME.MAIN_COLOR}
						onPress={saveHandler}
					/>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
};

CreateScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: 'Create Post',
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
	wrapper: {
		padding: 10,
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'open-regular',
		marginVertical: 10,
	},
	textArea: {
		padding: 10,
		marginBottom: 10,
	},
});
