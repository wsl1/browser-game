import React, { Component } from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-item__link" to="/farm">Farm</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item__link" to="/shop">Shop</Link>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Navbar;
