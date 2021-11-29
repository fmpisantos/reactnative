import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home(props) {
	return (
		<View style={props.style.container}>
			<Button onPress={() => props.navigation.navigate('about')} title="Go to About" />
			<Text style={props.style.center}>Home Page!</Text>
		</View>
	);
}
