import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return(
      <>
      <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-md-10 col-12 mx-auto">
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><i class="fa fa-snowflake-o" aria-hidden="true"></i>Relince Trend 
                  <i class="fa fa-snowflake-o" aria-hidden="true"></i></NavLink>
    <button className="navbar-toggler" type="button"
     data-toggle="collapse" data-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
       
      <form class="form-inline pull-xs-right mt-3 mr-3">
     
    <input class="form-control" type="text" placeholder="Search"/>
   
  </form>

        <li className="nav-item">
          <NavLink  className="nav-link" to="">
          <i class="fa fa-user" aria-hidden="true"></i> About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          exact
           className="nav-link active" aria-current="page" to="/"><i class="fa fa-heart" aria-hidden="true"></i> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Service</NavLink>
        </li>
       
      
      </ul>
 
    </div>
  </div>
</nav>
      
      </div>
      </div>
      </div>
      </>
    );
};
export default Navbar;