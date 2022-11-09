import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../app/screens/Home/HomeScreen';
import AddDeliveryScreen from '../app/screens/AddDelivery/AddDeliveryScreen';
import AddAddressScreen from '../app/screens/AddAddress/AddAddressScreen';
import RestoDetailScreen from '../app/screens/RestoDetail/RestoDetailScreen';
import SearchRestoScreen from '../app/screens/SearchResto/SearchRestoScreen';
import { Resto } from '../interfaces/interfaces';

export type StackParamList = {
  Home: undefined;
  AddDelivery: undefined;
  AddAddress: undefined;
  SearchResto: undefined;
  RestoDetail: {
    resto: Resto;
  };
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
        <Stack.Screen name="RestoDetail" component={RestoDetailScreen} />
        <Stack.Screen name="SearchResto" component={SearchRestoScreen} />
        <Stack.Screen name="AddDelivery" component={AddDeliveryScreen} />
        <Stack.Screen name="AddAddress" component={AddAddressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
