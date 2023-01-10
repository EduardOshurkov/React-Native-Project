import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { useRoutes } from './Route/router';
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';




const loadFonts = async () => {
    await Font.loadAsync({
        "Roboto-Bold": require("./assets/font/Roboto-Bold.ttf"),
        "Roboto-Medium": require("./assets/font/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
    })
}



export default function App() {
  const [iasReady, setIasReady] = useState(false)
  const routing = useRoutes({})

    if (!iasReady) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setIasReady(true)}
                onError={console.warn}
            />
        )
    }
  
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  )
};




//  Auth

{/* <AuthStack.Navigator>
        <AuthStack.Screen options={{headerShown: false,}} name='Login' component={LoginScreen} />
        <AuthStack.Screen options={{headerShown: false}} name='Registration' component={RegistrationScreen} />
      </AuthStack.Navigator> */}


      // MainTab
      
      // <MainTab.Navigator>
      //   <MainTab.Screen options={{headerShown: false}} name='CreateScreen' component={CreateScreen} />
      //   <MainTab.Screen options={{headerShown: false}} name='PostCreen' component={PostScreen} />
      //   <MainTab.Screen options={{headerShown: false}} name='ProfileScreen' component={ProfileScreen}/>
      // </MainTab.Navigator>