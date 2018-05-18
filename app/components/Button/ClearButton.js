import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image, View } from 'react-native';

import styles from './styles';

const ClearButton = ( {onPress, text }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.prototypes = {
    text: PropTypes.text,
    onPress: PropTypes.func,
};

export default ClearButton;