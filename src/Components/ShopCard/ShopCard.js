import React, { Component } from 'react';
import './ShopCard.scss';
import Proptypes from 'proptypes'
import {connect} from 'react-redux';

class ShopCard extends Component {
  render() {
    const {name, price} = this.props;
    return (
       <div className="shop-card">
            <p className="shop-card__name">{name}</p>
            <p className="shop-card__price">${price}</p>
            <button className="shop-card__purchase" onClick={this.props.purchase}>Purchase</button>
       </div>
    );
  }
}

ShopCard.propTypes = {
    name: Proptypes.string,
    price: Proptypes.number,
    purchase: Proptypes.func
}

export default ShopCard;