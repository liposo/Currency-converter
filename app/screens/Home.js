import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

import { connect } from 'react-redux';

const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '370';
const TEMP_CONVERSION_RATE = 0.36;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
    }

    handlePressBaseCurrency = () => {
        console.log('Pressed Base');
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency'})
    }

    handlePressQuoteCurrency = () => {
        console.log('Pressed Quote');
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency'})
    }

    handleTextChange = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    };

    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency());
    }

    handleOptionsPress = () => {
        console.log('Pressed Options')
        this.props.navigation.navigate('Options')
    }

    render() {
        return (
            <Container>
                <Header onPress={this.handleOptionsPress}/>
                <KeyboardAvoidingView behavior="padding">
                    <Logo />
                    <InputWithButton
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric" 
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        onChangeText={this.handleTextChange}
                    />
                    <InputWithButton 
                        value={TEMP_QUOTE_PRICE}
                        keyboardType="numeric"
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                    /> 
                    <LastConverted 
                    base={this.props.baseCurrency}
                    quote={this.props.quoteCurrency}
                    date={TEMP_CONVERSION_DATE}
                    conversionRate={TEMP_CONVERSION_RATE}
                    />
                    <ClearButton
                        text="Reverse currency"
                        onPress={this.handleSwapCurrency}
                    /> 
                </KeyboardAvoidingView>
            </Container>
        );
    }    
}

const mapStatToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    
    return {    
        baseCurrency,
        quoteCurrency,
    };
};

export default connect(mapStatToProps)(Home);