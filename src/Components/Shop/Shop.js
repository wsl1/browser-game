import React, { Component } from 'react';
import ShopBuy from '../ShopBuy/ShopBuy';
import ShopSell from '../ShopSell/ShopSell';
import SideBar from '../SideBar/SideBar';
import SideBarItem from '../SideBarItem/SideBarItem';
import {Route} from 'react-router-dom';

class Shop extends Component {
  
  render() {
    return (
       <div className="shop">
          <SideBar>
            <SideBarItem text="Buy" link="/shop/buy" />
            <SideBarItem text="Sell" link="/shop/sell"/>
          </SideBar>
          <Route exact path="/shop/buy" component={ShopBuy}/>
          <Route exact path="/shop/sell" component={ShopSell}/>
       </div>
    );
  }
}

export default Shop;
