import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../app/screens/Home/HomeScreen';
import AddDeliveryScreen from '../app/screens/AddDelivery/AddDeliveryScreen';

export type StackParamList = {
  Home: undefined;
  AddDelivery: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddDelivery" component={AddDeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
