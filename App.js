import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FoodieScreen from './src/screens/FoodieScreen.js';
import ResultsScreen from './src/screens/ResultsScreen.js';


const navigator = createStackNavigator(
    {
        Foodie: FoodieScreen,
        Results: ResultsScreen,
    },
    {
        initialRouteName: 'Foodie',
        defaultNavigationOptions: {
            title: 'Academies of Peri Peri',
        },
    }
);


export default createAppContainer(navigator);