import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import SignedInStack from './SignedInStack';
import FlashMessage from "react-native-flash-message";
const SignedOutStack = () => {

    const Stack = createNativeStackNavigator();
    const screenOptions = {
      headerShown: false
  }

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Example'
        screenOptions={screenOptions}>
            <Stack.Screen name='SignedInStack'  component={SignedInStack} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
        <FlashMessage position="top" />
    </NavigationContainer>
    
  )
}

export default SignedOutStack