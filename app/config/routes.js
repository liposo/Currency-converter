import { StackNavigator } from 'react-navigation';
import { StatusBar, Platform } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Theme from '../screens/Theme';

const HomeStack = StackNavigator({
    Home:{
        screen: Home, 
        navigationOptions: {
            header: () => null,
        }
    },
    Options: {
        screen: Options,
        navigationOptions: ({ navigation } ) => ({
            headerTitle: 'Options',
        })
    },
    Theme: {
        screen: Theme,
        navigationOptions: ({ navigation } ) => ({
            headerTitle: 'Themes',
        })
    }, 
}, {
    headerMode: 'screen',
    navigationOptions: { headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : StatusBar.currentHeight }},
});

const CurrencyListStack = StackNavigator({
    CurrencyList: {
        screen: CurrencyList, 
        navigationOptions: ({ navigation } ) => ({
            headerTitle: navigation.state.params.title,
        })
    }
}, {
    navigationOptions: { headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : StatusBar.currentHeight }},
})

export default StackNavigator({
    Home: {
        screen: HomeStack,
    },
    CurrencyList: {
        screen: CurrencyListStack,
    }, 
}, {
    mode: 'modal',
    headerMode: 'none'
});