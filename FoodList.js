import React from "react";
import { Text, StyleSheet, SafeAreaView, View, TextInput, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import RatingBar from '../components/RatingBar'
import { withNavigation } from 'react-navigation'

const FoodList = (props) => {
    const { width } = Dimensions.get('window');

    return (
        <View alignItems='center'>
            <Text style={styles.priceTitles}>{props.title}</Text>
            <FlatList
                ref={props.reference}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                decelerationRate = { 0 }
                snapToInterval = { width }
                scrollsToTop = { true }
                snapToAlignment = {'center'}
                data={props.results}
                keyExtractor = { ( results ) => results.id }
                renderItem = {({ item }) => {
                    return (
                        <View style={{alignItems: 'center', width: width, height: 360, justifyContent: 'center'}}>
                            <TouchableOpacity style={styles.main}
                                onPress ={() => 
                                    props.navigation.navigate("Results", { id: item.id })
                                }
                            >
                                <Image 
                                        style ={styles.image}
                                        source = {{
                                            uri: item.image_url,
                                        }}
                                />
                                <Text style={styles.widgetText} numberOfLines={2} adjustsFontSizeToFit>{item.name}</Text>
                                <Text style={styles.widgetText} numberOfLines={2} adjustsFontSizeToFit>{item.location.address1 + ', ' + item.location.zip_code}</Text>
                                <RatingBar rating={item.rating}/>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: 300,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#ff8c69',
        borderWidth: 4,
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    widgetText: {
        fontSize: 18,
        fontFamily: 'Verdana',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
    },
    priceTitles: {
        fontFamily: 'Verdana',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        marginTop: -30,
        borderColor: '#ff8c69',
        borderTopWidth: 20,
        height: 140,
        width: 140,
        borderRadius: 80,
        alignSelf: 'center',
      },
      bottom: {
        alignItems: 'center',
        backgroundColor: 'red',
      },
})

export default withNavigation( FoodList )