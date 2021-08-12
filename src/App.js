import React from "react";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from "./tem/home";

function App() {
  return (
    
    <Router>
    <Switch>
      <Route path='/portf' component={Home} exact />
      
    </Switch>
    </Router>
    
   
  );
}

export default App;
