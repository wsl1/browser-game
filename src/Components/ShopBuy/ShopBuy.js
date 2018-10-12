import React, { Component } from 'react';
import Proptypes from 'proptypes'
import Prices from '../../data/Prices.json';
import ShopCard from '../ShopCard/ShopCard';
import {buyCows, buyChickens} from '../../Actions/FarmActions';
import {connect} from 'react-redux';
import './ShopBuy.scss';

class ShopBuy extends Component {
  
  render() {
    const shopCards = Object.keys(Prices).map(key => {
        let onSubmit;
        switch(key) {
          case 'cow':
            onSubmit = this.props.buyCows;
            break;
          case 'chicken':
            onSubmit = this.props.buyChickens;
            break;
        }
        return (
          <ShopCard
            name={key}
            price={Prices[key].buyPrice}
            type="buy"
            onSubmit={onSubmit}
          />
        );
      });
    return (
        <div className="shop-buy">
            {shopCards}
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    buyCows: (quantity) => {
      dispatch(buyCows(quantity))
    },
    buyChickens: (quantity) => {
      dispatch(buyChickens(quantity))
    }
  });

export default connect(null, mapDispatchToProps)(ShopBuy);