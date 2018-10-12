import React, { Component } from 'react';
import './ShopSell.scss';
import Proptypes from 'proptypes';
import {connect} from 'react-redux';
import { sellCows, sellChickens} from '../../Actions/FarmActions';
import ShopCard from '../ShopCard/ShopCard';
import Prices from '../../data/Prices.json';

class ShopSell extends Component {
  render() {
    console.log(this.props);
    const animals = this.props.animals;
    const shopCards = Object.keys(animals).map(key => {
      let onSubmit;
      let price;
      switch(key) {
        case 'cows':
          onSubmit = this.props.sellCows;
          price = Prices.cow.buyPrice;
          break;
        case 'chickens':
          onSubmit = this.props.sellChickens;
          price = Prices.chicken.sellPrice;
          break;
      }
      return (
        <ShopCard
          name={key}
          price={price}
          type="sell"
          onSubmit={onSubmit}
        />
      );
    });

    return (
        <div className="shop-sell">
            {shopCards}
        </div>
    );
  }
}
const mapStateToProps = (state) => ({
  animals: state.farm.animals        
});
const mapDispatchToProps = (dispatch) => ({
    sellCows: (quantity) => {
      dispatch(sellCows(quantity))
    },
    sellChickens: (quantity) => {
      dispatch(sellChickens(quantity))
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(ShopSell);