import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/Homepage';
import Info from './components/info';
const stack=createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="HomePage" component={Homepage} options={{headerShown: false}} />
          <stack.Screen name="CarInfo" component={Info} options={{headerShown: false}} />
        </stack.Navigator>
      </NavigationContainer>
  );
}

