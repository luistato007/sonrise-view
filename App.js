import * as React from 'react';
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
  return ( 
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Clinica Dental Sonrise" component = {HomeScreen} /> 
        <Stack.Screen name="AboutScreen" component = {AboutScreen} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  );
}


