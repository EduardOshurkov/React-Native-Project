import react, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";


const PostScreen = ({ route }) => {
    [post, setPost] = useState([])
    console.log('roure.params ', route.params)
    
    useEffect(() => {
        if (route.params) {
            setPost((prevState) => [...prevState, route.params])
        }
    }, [route.params])

    return (
        <View style={styles.container}>
            <FlatList
                data={post}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({ item }) => (
                <View style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
                    <Image source={{ uri: item.photo }} style={{width: 350, height: 350, marginTop: 50}}/>
                </View>
            )}
            />
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default PostScreen;