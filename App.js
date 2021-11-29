import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Styles
import style from '@styles/style';

//Pages
import Home from '@pages/Home';
import About from '@pages/About';

// Components

export default function App() {
	const navigationRef = useNavigationContainerRef();
	return (
		<NavigationContainer ref={navigationRef} headerMode={null}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: { display: 'none' }
				}}
        initialRouteName="home"
			>
				<Stack.Screen name="home" path="/">
					{(props) => <Home {...props} style={style} />}
				</Stack.Screen>
				<Stack.Screen name="about" path="/about">
					{(props) => <About {...props} style={style} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
