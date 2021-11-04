import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/pages/login';
import ResetPasswd from './src/pages/resetPasswd';
import Register from './src/pages/register';
import mainAdopter from './src/pages/adopter/main';
import mainNGO from './src/pages/NGO/main';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswd"
          component={ResetPasswd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainPageAdopter"
          component={mainAdopter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainPageNGO"
          component={mainNGO}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Tabs() {
  <Tab.Navigator>
    <Tab.Screen name="Animal Perdido" component=""/>
    <Tab.Screen name="Favoritos" component=""/>
    <Tab.Screen name="Principal" component=""/>
    <Tab.Screen name="Chat" component=""/>
    <Tab.Screen name="Perfil" component=""/>
  </Tab.Navigator>
}