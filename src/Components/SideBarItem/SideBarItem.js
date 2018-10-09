import React, { Component } from 'react';
import './SideBarItem.scss';
import Proptypes from 'proptypes'
import {Link} from 'react-router-dom';

class SideBarItem extends Component {
  render() {
    const {text, link} = this.props;
    return (
        <div className="side-bar-item">
            <Link className="side-bar-item__link" to={link}>{text}</Link>
        </div>
    );
  }
}

SideBarItem.propTypes = {
    text: Proptypes.string,
    link: Proptypes.string
}

export default SideBarItem;