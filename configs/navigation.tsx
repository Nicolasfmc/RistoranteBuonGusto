import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { Home } from '../app/screens/Home';
import { Products } from '../app/screens/Products';

type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Menu: undefined;
};

export type NavProps = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Products' component={Products}/>
    </Stack.Navigator>
  );
};

const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default AppNavigator;
