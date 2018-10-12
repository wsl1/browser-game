import React, { Component } from 'react';
import './SideBar.scss';
import Proptypes from 'proptypes'

class SideBar extends Component {
  render() {
    const { children } = this.props; 
    return (
        <div className="side-bar">
            {children}
        </div>
    );
  }
}

export default SideBar;