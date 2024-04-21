import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealScreen from '../screens/MealScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import BarCodeScan from '../screens/BarCodeScan';
import CreateFoodScreen from '../screens/CreateFoodScreen';

const MealStack = ({navigation}) => {
    const Stack = createNativeStackNavigator();
    const screenOptions = {
      
  }
  return (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='MealScreen' component={MealScreen}/>
        <Stack.Screen name='AddFoodScreen' component={AddFoodScreen} />
        <Stack.Screen name='CreateFoodScreen' component={CreateFoodScreen} />
        <Stack.Screen name='BarCodeScan' component={BarCodeScan} />
    </Stack.Navigator>
  )
}

export default MealStack