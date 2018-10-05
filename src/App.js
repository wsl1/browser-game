import React, { Component } from 'react';
import './App.scss';
import TopBar from './Components/TopBar/TopBar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Farm from './Components/Farm/Farm';
import Shop from './Components/Shop/Shop';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <TopBar />
            <div className="app__content">
              <Switch>
                <Route path="/farm" component={Farm}/>
                <Route path="/shop" component={Shop}/>
              </Switch>
            </div>
            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
