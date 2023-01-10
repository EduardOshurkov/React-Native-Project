import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import CreateScreen from '../Screens/main/CreateScreen';
import PostScreen from '../Screens/main/PostScreen';
import ProfileScreen from '../Screens/main/ProfileScreen';


// icons import
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoutes = (isAuth) => {
    if (!isAuth) {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen options={{ headerShown: false, }} name='Login' component={LoginScreen} />
                <AuthStack.Screen options={{ headerShown: false }} name='Registration' component={RegistrationScreen} />
            </AuthStack.Navigator>
        )
    }
    return (
        <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <MaterialCommunityIcons name="postage-stamp" size={size} color={color} />
                )
            }}
                name='PostScreen' component={PostScreen} />
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <AntDesign name="pluscircle" size={size} color={color} />
                )
            }}
                name='CreateScreen' component={CreateScreen} />
            <MainTab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
                name='ProfileScreen' component={ProfileScreen} />
        </MainTab.Navigator>
    )
};