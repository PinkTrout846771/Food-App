import React from "react";
import { Text, StyleSheet, SafeAreaView, View, TextInput, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons/faStarHalfStroke'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
// ★☆

const RatingBar = (props) => {
    let text1 = ''
    let text2 = ''
    let iconSize = 36
    if (props.rating % 1 == 0) {
        iconSize = -1
    }

    if (props.rating == 0.5) {
        text2 = '☆☆☆☆'
    }
    else if (props.rating == 1) {
        text1 = '★'
        text2 = '☆☆☆☆'
    }
    else if (props.rating == 1.5) {
        text1 = '★'
        text2 = '☆☆☆'
    }
    else if (props.rating == 2) {
        text1 = '★★'
        text2 = '☆☆☆'
    }
    else if (props.rating == 2.5) {
        text1 = '★★'
        text2 = '☆☆'
    }
    else if (props.rating == 3) {
        text1 = '★★★'
        text2 = '☆☆'
    }
    else if (props.rating == 3.5) {
        text1 = '★★★'
        text2 = '☆'
    }
    else if (props.rating == 4) {
        text1 = '★★★★'
        text2 = '☆'
    }
    else if (props.rating == 4.5) {
        text1 = '★★★★'
        text2 = ''
    }
    else if (props.rating == 5) {
        text1 = '★★★★★'
        text2 = ''
    }

    return (
        <View style={styles.main}>
            <Text style={styles.text}>{text1}</Text>
            <FontAwesomeIcon size={iconSize} color={'orange'} icon={faStarHalfStroke} />
            <Text style={styles.text}>{text2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        //backgroundColor: 'red',
        marginTop: 20,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 36,
        color: 'orange',
        fontWeight: 'bold',
    }
})

export default RatingBar