import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Login from './Login'
import Thank from './Thank'
import Home from './Home'
import{BrowserRouter,Link,Route,Switch,Router} from 'react-router-dom';
import Nav from './Nav'
import createHistory from 'history/createBrowserHistory';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div>
        <Nav/>
<Switch >
  <Route exact path="/" component={Form}/>
  <Route path="/Thank" component={Thank}/>
  <Route  path="/Login" component={Login}/>
  <Route  path="/Home" component={Home}/>
  </Switch>


        </div>
        </BrowserRouter>
    )
    
  }
    
  
}

export default App;
