import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { connectAlert } from '../components/Alert';

import { ListItem, Separator } from '../components/List';
import styles from './styles';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType:  PropTypes.func,
    }

    handleThemesPress = () => {
        console.log('Pressed Themes');
        this.props.navigation.navigate('Theme')
    }

    handleSitePress = () => {
        console.log('Pressed Site');
        Linking.openURL('httsp://fixer.io').catch( () => this.props.alertWithType('error', 'Sorry!', "fixer.io could not be opened!"));
    }

    render() {
        return (
            <ScrollView>
                <ListItem 
                    text="Themes" 
                    onPress={this.handleThemesPress}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE}/>}
                />
                <Separator/>
                <ListItem 
                    text="Fixer.io" 
                    onPress={this.handleSitePress}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>}
                />
            </ScrollView>
        )
    }   
};

export default connectAlert(Options);