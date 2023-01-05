import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ImageBackground } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";


const loadFonts = async () => {
    await Font.loadAsync({
        "Roboto-Bold": require("../assets/font/Roboto-Bold.ttf"),
        "Roboto-Medium": require("../assets/font/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/font/Roboto-Regular.ttf"),
    })
}
const initialState = {
    login: '',
    email: '',
    password: '',
};

const RegistrationScreen = () => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)
    const [state, setState] = useState(initialState)
    const [iasReady, setIasReady] = useState(false)

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
        )
    }

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
                <ImageBackground source={require('../assets/images/Photo_BG.png')} style={styles.imagesBackground}>
                        <View style={styles.registrationForm}>
                        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            <View>
                                <Text style={styles.registrationTitle}>Registration</Text>
                                <TextInput
                                    style={{ ...styles.registrationFormInput, marginTop: 33 }}
                                    placeholder={'enter your login'}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.login}
                                    onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
                                />
                                <TextInput
                                    style={{ ...styles.registrationFormInput, marginTop: 16 }}
                                    placeholder={'enter your email'}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.email}
                                    onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                                />
                                <TextInput
                                    style={{ ...styles.registrationFormInput, marginTop: 16 }}
                                    placeholder={'enter your password'}
                                    secureTextEntry={true}
                                    value={state.password}
                                    onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                                />
                                </View>
                            </KeyboardAvoidingView>
                        <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.registrationFormBtn}
                        onPress={submiteForm}>
                        <Text style={styles.titleBtn}>Register</Text>
                    </TouchableOpacity>
                        </View>
                </ImageBackground>
            
            </View>
            </TouchableWithoutFeedback>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imagesBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    registrationForm: {
        backgroundColor: '#FFFFFF',
        justifyContent: "flex-start",
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 16,
    },
    registrationTitle: {
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.01,
        marginTop: 92,
    },
    registrationFormInput: {
        backgroundColor: '#F6F6F6',
        width: '100%',
        paddingLeft: 16,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        height: 50,
        borderRadius: 8,
    },
    registrationFormBtn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        height: 51,
        width: '100%',
        marginTop: 43,
        justifyContent: 'center',
    },
    titleBtn: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: "#fff",
    },
})

export default RegistrationScreen;