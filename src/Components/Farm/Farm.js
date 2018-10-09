import React, { Component } from 'react';
import './Farm.scss';
import SideBar from '../SideBar/SideBar';
import SideBarItem from '../SideBarItem/SideBarItem';
import {Route} from 'react-router-dom';
import FarmAnimals from '../FarmAnimals/FarmAnimals';
import FarmIncomes from '../FarmIncomes/FarmIncomes';

class Farm extends Component {
  render() {
    return (
       <div className="farm">
          <SideBar>
            <SideBarItem text="Animals" link="/farm/animals" />
            <SideBarItem text="Incomes" link="/farm/incomes"/>
          </SideBar>
          <Route exact path="/farm/animals" component={FarmAnimals}/>
          <Route exact path="/farm/incomes" component={FarmIncomes} />  
       </div>
    );
  }
}

export default Farm;
//<FarmStats />