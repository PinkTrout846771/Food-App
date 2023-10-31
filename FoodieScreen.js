import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar'
import FoodList from '../components/FoodList'
import yelp from '../api/yelp';
import { TouchableOpacity } from 'react-native-gesture-handler';


const FoodieScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [currentPrice, setCurrentPrice] = useState('$');
    const [buttonRadiusColor1, setButtonRadiusColor1] = useState('#FA8072')
    const [buttonRadiusColor2, setButtonRadiusColor2] = useState('#EBE8E2')
    const [buttonRadiusColor3, setButtonRadiusColor3] = useState('#EBE8E2')
    const [priceTitle, setPriceTitle] = useState('Affordable')
    const flatListRef = useRef(null);

    const foodApi = async (term) => {
        setCurrentPrice(currentPrice);
        console.log(currentPrice);
        console.log(term);
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'ashburn va'
                },
            });

            setResults(response.data.businesses);
        }
        catch (err) {
            console.log(err)
            setResults('Sorry, Something Went Wrong :(')
        }
    }

    const filterResultsByPrice = (targetPrice) => {
        let temp = [];
        for (let i = 0; i < results.length; i++) {
            if (results[i].price === targetPrice) {
                temp.push(results[i])
            }
        }
        return temp;
    }

    const buttonPress = (price) => {
        if (price === '$') {
            setPriceTitle('Affordable')
            setButtonRadiusColor1('#FA8072')
            setButtonRadiusColor2('#EBE8E2')
            setButtonRadiusColor3('#EBE8E2')
            try {
                flatListRef.current.scrollToIndex( { index:0 } )
            }
            catch (err) {
                console.log('nothing there bruh')
            }
        }
        else if (price === '$$') {
            setPriceTitle('Bit Pricier')
            setButtonRadiusColor1('#EBE8E2')
            setButtonRadiusColor2('#FA8072')
            setButtonRadiusColor3('#EBE8E2')
            try {
                flatListRef.current.scrollToIndex( { index:0 } )
            }
            catch (err) {
                console.log('nothing there bruh')
            }
        }
        else {
            setPriceTitle('Expensive')
            setButtonRadiusColor1('#EBE8E2')
            setButtonRadiusColor2('#EBE8E2')
            setButtonRadiusColor3('#FA8072')
            try {
                flatListRef.current.scrollToIndex( { index:0 } )
            }
            catch (err) {
                console.log('nothing there bruh')
            }
        }
        setCurrentPrice(price)
    }

    useEffect(() =>{
        foodApi('food');
    }, []);

    return (
        <View style={styles.mainContainer}>
            <View style={{marginTop: 10, marginBottom: 20}}>
                <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => foodApi(term)} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => buttonPress('$')}
                    style = {
                        {
                            width: 100,
                            height: 100,
                            marginTop: 20,
                            marginBottom: 20,
                            borderRadius: 20,
                            backgroundColor: 'white',
                            //borderColor: '#EBE8E2',
                            borderColor: buttonRadiusColor1,
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }
                    }
                >
                    <Text style={styles.buttonText}>$</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => buttonPress('$$')}
                    style = {
                        {
                            width: 100,
                            height: 100,
                            marginTop: 20,
                            marginBottom: 20,
                            //marginLeft: 20,
                            borderRadius: 20,
                            backgroundColor: 'white',
                            //borderColor: '#EBE8E2',
                            borderColor: buttonRadiusColor2,
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }
                    }
                >
                    <Text style={styles.buttonText}>$$</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => buttonPress('$$$')}
                    style = {
                        {
                            width: 100,
                            height: 100,
                            marginTop: 20,
                            marginBottom: 20,
                            //marginLeft: 20,
                            borderRadius: 20,
                            backgroundColor: 'white',
                            //borderColor: '#EBE8E2',
                            borderColor: buttonRadiusColor3,
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }
                    }
                >
                    <Text style={styles.buttonText}>$$$</Text>
                </TouchableOpacity>
            </View>
            <FoodList 
                title={priceTitle}
                reference={flatListRef}
                results={filterResultsByPrice(currentPrice)}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F5F4',
    },
    text: {
        fontSize: 30,
    },
    priceTitles: {
        fontFamily: 'Verdana',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    buttonContainer: {
        //backgroundColor: '#EBE8E2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 20,
        //marginLeft: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        //borderColor: '#EBE8E2',
        borderColor: 'red',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 48,
        fontWeight: 'bold',
        
    },
});


export default FoodieScreen;