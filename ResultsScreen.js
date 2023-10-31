import React, { useState, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, View, TextInput, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import RatingBar from '../components/RatingBar'
import { withNavigation } from 'react-navigation'
import yelp from '../api/yelp';

const ResultsScreen = (props) => {
    const { height } = Dimensions.get('window');
    const [results, setResults] = useState(null);
    const id = props.navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResults(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!results) {
        console.log("No reuslts yet lol");
        return null;
    }


    return (
        <View alignItems='center'>
            <Text style={styles.priceTitles}>{results.name}</Text>
            <Text style={styles.priceTitles}>{results.is_closed == true ? "Closed" : "Open"}</Text>
            <View height={500}>
                <FlatList
                    data = {results.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({item}) => {
                        return <Image style={styles.image} source={{ uri: item }}></Image>;
                    }}
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        borderColor: '#ff8c69',
        marginTop: 20,
        height: 300,
        width: 300,
        borderRadius: 20,
        alignSelf: 'center',
      },
      priceTitles: {
        fontFamily: 'Verdana',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})

export default ResultsScreen