import react, { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { View, Text, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";



const CreateScreen = ({navigation}) => {
    [camera, setCamera] = useState(null);
    [photo, setPhoto] = useState('');
    [located, setLocated] = useState('');


    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Permission to access location was denied");
        }
        const location = await Location.getCurrentPositionAsync();
        const coords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
        console.log(coords);
        setLocated(coords);
        setPhoto(photo.uri)
    };

    const sendPhoto = () => {
        navigation.navigate('PostScreen', { photo })
    }


    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera}>
                {photo && <View style={styles.previePhotoContainer}>
                    <Image source={{ uri: photo }} style={{height:180, width: 180}}/> 
                </View>}
                <TouchableOpacity style={styles.buttonContainer} onPress={takePhoto}>
                    <Text style={styles.snap}>SNAP</Text>
                </TouchableOpacity>
            </Camera>
            <TouchableOpacity style={styles.sendBtn} onPress={sendPhoto}>
                    <Text style={styles.sendBtnText}>SEND PHOTO</Text>
                </TouchableOpacity>
            </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
    },
    snap: {
        color: '#fff',
    },
    previePhotoContainer: {
        position: 'absolute',
        top: 50,
        right: 10,
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: '#fff',

    },
    sendBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '33%',
        marginTop: 20,
        width: 150,
        height: 70,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
    },
    sendBtnText: {
        color: 'red',
    }
});


export default CreateScreen;