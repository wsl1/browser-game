import React, { Component } from 'react';
import './TopBar.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class TopBar extends Component {
  render() {
    return (
        <header className="top-bar">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-item__link" to="/farm">Farm</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item__link" to="/shop">Shop</Link>
                </li>
            </ul>
            <div className="player-info">
                Balance: ${this.props.balance}
            </div>
        </header>
    );
  }
}

const mapStateToProps = (state) => ({
    balance: state.farm.balance
});
export default connect(mapStateToProps, null)(TopBar);
