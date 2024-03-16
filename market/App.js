import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import LoginFormik from './src/screens/LoginFormik';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();


const App = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='LoginFormik' component={LoginFormik} />
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Login' component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast />
        </>
    )
}

export default App

const styles = StyleSheet.create({})