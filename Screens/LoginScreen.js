import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ImageBackground } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";


const loadFonts = async () => {
    await Font.loadAsync({
        "Roboto-Bold": require("../assets/font/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../assets/font/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/font/Roboto-Regular.ttf"),
    });
};

const initialState = {
    email: '',
    password: '',
}


const LoginScreen = () => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)
    const [state, setState] = useState(initialState)
    const [iasReady, setIasReady] = useState(false);

    const keyboardHide = () => {
        setIsShowKeyboard(false),
        Keyboard.dismiss()
    }

    const submiteForm = () => {
        setState(initialState);
        keyboardHide();
        console.log(state)
    }

 if (!iasReady) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setIasReady(true)}
                onError={console.warn}
            />
        );
    }

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <ImageBackground style={styles.imageBackground} source={require('../assets/images/Photo_BG.png')}>
                <View style={styles.loginForm}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <Text style={styles.loginTitle}>LOG IN</Text>
                        <TextInput style={styles.loginInput}
                            value={state.email}
                            onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            onFocus={() => setIsShowKeyboard(true)}
                        />
                        <TextInput
                            value={state.password}
                            onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                            style={{...styles.loginInput, marginTop: 16 }}
                            secureTextEntry={true}
                            placeholder={'Password'}
                            onFocus={() => setIsShowKeyboard(true)}
                            />
                       </KeyboardAvoidingView> 
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.loginFormBtn}
                        onPress={submiteForm}>
                        <Text style={styles.btnTitle}>SIGN IN</Text>
                            </TouchableOpacity>  
                        </View>
                    
            </ImageBackground>
            </TouchableWithoutFeedback>
    )
};


const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    loginForm: {
        flex: 1,
        backgroundColor: "#fff",
        maxHeight: 489,
        width: '100%',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
    },
    loginTitle: {
        fontFamily: 'Roboto-Bold',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 33,
    },
    loginInput: {
        backgroundColor: '#F6F6F6',
        marginHorizontal: 16,
        paddingLeft: 16,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        height: 50,
        borderRadius: 8,
    },
    loginFormBtn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        height: 51,
        marginHorizontal: 16,
        marginTop: 43,
        justifyContent: 'center',
    },
    btnTitle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: "#fff",
    }
});

export default LoginScreen;