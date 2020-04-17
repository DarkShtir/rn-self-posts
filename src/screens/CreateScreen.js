import React, { useState, useRef } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { addPost } from '../store/actions/post';
import { PhotoPicker } from '../components/PhotoPicker';

export const CreateScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const imgRef = useRef();

	const saveHandler = () => {
		const post = {
			date: new Date().toJSON(),
			text: text,
			img: imgRef.current,
			booked: false,
		};
		dispatch(addPost(post));
		navigation.navigate('Main');
	};

	const PhotoPickHandler = (uri) => {
		imgRef.current = uri;
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
					<PhotoPicker onPick={PhotoPickHandler} />
					<Button
						title='Create post'
						color={THEME.MAIN_COLOR}
						onPress={saveHandler}
						disabled={!text}
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
