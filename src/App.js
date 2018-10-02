import React, { Component } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Farm from './Components/Farm/Farm';
import Shop from './Components/Shop/Shop';

class App extends Component {
  render() {
    return (
      <div className="app">

        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/farm" component={Farm}/>
              <Route path="/shop" component={Shop}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
