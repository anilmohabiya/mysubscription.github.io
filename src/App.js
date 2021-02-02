import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import {Switch,Route, Redirect} from 'react-router-dom';
import Pinfo from './Pinfo';
const App =()=>{

return(
<>

<Switch>
<Route exact path="/" component={Pinfo} />

<Redirect to ="/" />
</Switch>


</>


  );
};
export default App;
