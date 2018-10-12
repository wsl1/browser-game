import React, { Component } from 'react';
import './ShopCard.scss';
import Proptypes from 'proptypes'
import {connect} from 'react-redux';

class ShopCard extends Component {

  state = {
    quantity: 1
  }

  resetState = () => this.setState({quantity: 1})

  incrementQuantity = () => {
    this.setState({
      ...this.state,
      quantity: ++this.state.quantity
    });
  }

  decrementQuantity = () => {
    const state = {...this.state};
    if(!(state.quantity === 1)) {
      this.setState({
        ...this.state,
        quantity: --this.state.quantity
      });
    }
  }

  onClick = () => {
    this.props.onSubmit(this.state.quantity);
    this.resetState();
  }

  render() {
    const {name, price, type} = this.props;
    let buttonText;
    switch(type) {
      case 'buy':
        buttonText = 'Buy';
        break;
      case 'sell':
        buttonText = 'Sell';
        break;
    }
    return (
       <div className="shop-card">
            <p className="shop-card__name">{name}</p>
            <p className="shop-card__price">${price}</p>
            <div className="shop-card__quantity-picker">
              <div className="shop-card__quantity">{this.state.quantity}</div>
              <div className="shop-card__buttons">
                <button onClick={this.incrementQuantity}>+</button>
                <button onClick={this.decrementQuantity}>-</button>
              </div>

            </div>
            <button className="shop-card__submit" onClick={this.onClick}>{buttonText}</button>
       </div>
    );
  }
}

ShopCard.propTypes = {
    name: Proptypes.string,
    price: Proptypes.number,
    type: Proptypes.oneOf(['buy', 'sell']),
    onSubmit: Proptypes.func,
}

export default ShopCard;