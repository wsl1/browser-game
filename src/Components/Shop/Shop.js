import React, { Component } from 'react';
import './Shop.scss';
import {connect} from 'react-redux';
import ShopCard from '../ShopCard/ShopCard';
import Items from './Items.json';
import {buyCow, buyChicken} from '../../Actions/FarmActions';

class Shop extends Component {
  
  render() {
    const shopCards = Items.map((shopCard) => {
      let purchase;
      switch(shopCard.name) {
        case 'Cow':
          purchase = this.props.buyCow;
          break;
        case 'Chicken':
          purchase = this.props.buyChicken
      }
      return (
        <ShopCard
          name={shopCard.name}
          price={shopCard.price}
          purchase={purchase}
        />
      );
    });

    return (
       <div className="shop">
          {shopCards}
       </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  buyCow: () => {
    dispatch(buyCow())
  },
  buyChicken: () => {
    dispatch(buyChicken())
  }
});

export default connect(null, mapDispatchToProps)(Shop);
