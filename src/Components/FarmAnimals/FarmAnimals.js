import React, { Component } from 'react';
import './FarmAnimals.scss';
import {connect} from 'react-redux';
import CowSvg from './CowSvg';
import ChickenSvg from './ChickenSvg';

class FarmAnimals extends Component {
  render() {
    return (
       <div className="farm-animals">
         <div className="farm-animal">
              <CowSvg className="cow"/>
              <p className="farm-animal__quantity">{this.props.cowsQuantity}</p>
          </div>
          <div className="farm-animal">
              <ChickenSvg className="chicken"/>
              <p className="farm-animal__quantity">{this.props.chickensQuantity}</p>
          </div>
       </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cowsQuantity: state.farm.animals.cows,
  chickensQuantity: state.farm.animals.chickens
});
export default connect(mapStateToProps, null)(FarmAnimals);
