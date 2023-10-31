import React from "react";
import { Text, StyleSheet, SafeAreaView, View, TextInput, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const SearchBar = (props) => {
    return (
        <View style={styles.main}>
            <TextInput style={styles.textInput} placeholder={'Search for a restaurant'} maxLength={20} value={props.term} onChangeText={props.onTermChange} onEndEditing={props.onTermSubmit}></TextInput>
            <TouchableOpacity
                onPress={props.onTermSubmit}
            >
                <Feather name="search" size={26} style={styles.iconStyle}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignSelf: 'center',
        width: '90%',
        height: 50,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#EBE8E2',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        padding: 12,
        fontFamily: 'Verdana',
        fontSize: 16,
        width: 300,
    },
    iconStyle: {
        color: 'black',
        marginRight: 12,
    }
})

export default SearchBar