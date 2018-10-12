import React, { Component } from 'react';
import './FarmStats.scss';
import CowSvg from './CowSvg';
import ChickenSvg from './ChickenSvg';
import MilkSvg from './MilkSvg';
import {connect} from 'react-redux';

class FarmStats extends Component {
  render() {
    return (
       <div className="farm-stats">
          <div className="farm-stats__stat">
              <CowSvg className="cow"/>
              <p className="farm-stats__number">{this.props.cowsNumber}</p>
          </div>
          <div className="farm-stats__stat">
              <ChickenSvg className="chicken"/>
              <p className="farm-stats__number">{this.props.chickensNumber}</p>
          </div>
          <div className="farm-stats__stat">
              <MilkSvg className="milk"/>
              <p className="farm-stats__number">2/s</p>
          </div>
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
    cowsNumber: state.farm.cows,
    chickensNumber: state.farm.chickens
});

export default connect(mapStateToProps, null)(FarmStats);
