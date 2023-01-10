import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import CreateScreen from '../Screens/main/CreateScreen';
import PostScreen from '../Screens/main/PostScreen';
import ProfileScreen from '../Screens/main/ProfileScreen';


const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoutes = (isAuth) => {
  if (!isAuth) {
    return (
    <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false, }} name='Login' component={LoginScreen} />
        <AuthStack.Screen options={{ headerShown: false }} name='Registration' component={RegistrationScreen} />
      </AuthStack.Navigator>
  )}
  return (
    <MainTab.Navigator tabBarOptions={{showLabel: false}}>
      <MainTab.Screen options={{ headerShown: false }} name='CreateScreen' component={CreateScreen} />
      <MainTab.Screen options={{ headerShown: false }} name='PostCreen' component={PostScreen} />
      <MainTab.Screen options={{ headerShown: false }} name='ProfileScreen' component={ProfileScreen} />
    </MainTab.Navigator>
  )
};