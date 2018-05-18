import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({

    $underlayColor: '$border',

    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$white',
    },
    text: {
        fontSize: 16,
        color: '$darkText'
    },
    separator: {
        marginLeft: 20,
        flex: 1,
        backgroundColor: '$border',
        height: StyleSheet.hairlineWidth,
    },
    icon: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$primaryBlue',
    },
    checkIcon: {
        width: 18,
    },
});

export default styles;