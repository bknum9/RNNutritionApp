import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MacroScreen from '../screens/MacroScreen';
import WeightScreen from '../screens/WeightScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MealStack from './MealStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const SignedInStack = ({navigation}) => {

    const screenOptions = {
      headerShown: false,
      
    }
    const Tab = createBottomTabNavigator()
    
  return (
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="MealStack" component={MealStack} options={{
          tabBarLabel: 'Food Journal' ,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="file-document-edit" color={'white'} size={30} />
          ),
          tabBarLabelStyle:{color:'white'},
          tabBarActiveBackgroundColor:'#393b3c',
          tabBarInactiveBackgroundColor:'black'
        }}/>
          <Tab.Screen name="MacroScreen" component={MacroScreen} options={{
          tabBarLabel: 'Macro',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="chart-arc" color={'white'} size={30} />
          ),
          tabBarLabelStyle:{color:'white'},
          tabBarActiveBackgroundColor:'#393b3c',
          tabBarInactiveBackgroundColor:'black'
        }}/>

          <Tab.Screen name="WeightScreen" component={WeightScreen} options={{
          tabBarLabel: 'Weight Chart',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="chart-line" color={'white'} size={30} />
          ),
          tabBarLabelStyle:{color:'white'},
          tabBarActiveBackgroundColor:'#393b3c',
          tabBarInactiveBackgroundColor:'black'
        }}/>
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={'white'} size={30}/>
            ),
            tabBarLabelStyle:{color:'white'},
            tabBarActiveBackgroundColor:'#393b3c',
            tabBarInactiveBackgroundColor:'black',
          }} />
        </Tab.Navigator>
  )
}

export default SignedInStack