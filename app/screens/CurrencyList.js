import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, FlatList, View, StatusBar } from "react-native";
import { ListItem, Separator } from "../components/List";
import currencies from "../data/currencies";
import { connect } from "react-redux";

import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

import styles from "./styles";

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string
  };

  handlePress = currency => {
    const { type } = this.props.navigation.state.params;

    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === "quote") {
      comparisonCurrency = this.props.quoteCurrency;
    }
    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor
});

export default connect(mapStateToProps)(CurrencyList);
