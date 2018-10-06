import React, { Component } from 'react';
import './Farm.scss';
import FarmStats from '../FarmStats/FarmStats';
import SideBar from '../SideBar/SideBar';
import SideBarItem from '../SideBarItem/SideBarItem';

class Farm extends Component {
  render() {
    return (
       <div className="farm">
          <SideBar>
            <SideBarItem text="Animals" link="/farm" />
            <SideBarItem text="Incomes" link="/farm"/>
          </SideBar>
          <FarmStats />
       </div>
    );
  }
}

export default Farm;
