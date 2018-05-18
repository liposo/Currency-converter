import React from 'react';
import EStylesSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import { Provider } from 'react-redux';
import store from './config/store';

EStylesSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryGreen: '#D57A66',
    $primaryOrange: '#00BD9D',
    $primaryPurple: '#9E768F',

    $white: '#ffffff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
    //$outline: 1,
});

export default () => 
    <Provider store={store}>
        <AlertProvider>
            <Navigator onNavigationStateChange={null}/>
        </AlertProvider>
    </Provider>;