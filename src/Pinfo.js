import React from 'react';
import MySubscription from './MySubscription';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';
import Navbar from './Navbar';
const Pinfo =()=>{
    return(
    <>
    
<Navbar />
    <div className ="col-md-8 col-8  mx-auto">
  <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
</nav>
</div>
<MySubscription/>

< Footer/>


    </>       
    )
}
export default Pinfo;