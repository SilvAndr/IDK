import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Credits from './views/credits/credits';
import Main from './views/main/main';

class App extends Component {

render(){
return(
<Router>
<Switch>
  <Route  exact path="/" component={Main}/>
  <Route exact path="/credits" component={Credits}/>
</Switch>


</Router>

)

}


}

export default App;
