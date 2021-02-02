import React, { useState } from 'react';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import  image from './images/image.jpg'
import foot from './images/web2.jpg'

const MySubscription=()=>{

  const [count,setCount]=useState(0);
  const action=()=>{
    setCount(count+1);
  };

  const action2=()=>{
   if(count >0 ){
       setCount(count-1);
   }else{
       alert("sorry, Zero Limit Reached")
   }
  };
return(
    <>             
    <div className="container-fluid">
    <div className="row">
            <div className="col-md-3 col-8 mx-auto  mt-5">
           
            <div class="card text-white bg-info mb-3" >
  
  <div class="card-body">
  
<img src={image} alt="{image}" class="rounded-circle" />
<p>hello,<br/>jhon deo</p>
  </div>
</div>
<div class="card text-white bg-info mb-1" >
  <div class="card-body">
    <p class="card-text">my orders <Link to=""><i class="fas fa-greater-than"></i> </Link> </p>
  </div>
</div>
<div class="card text-white bg-info mb-3" >
  <div class="card-body">
    <p class="card-text"><i class="fas fa-user-cog"></i> <span className=" ">Acount setting</span></p>
    
<p className=" text-center">public information</p>

<p className=" text-center">Manages address</p>
  </div>
</div>

<div class="card text-white bg-info mb-1" >

    <p class="card-text mt-2 px-2"><i class="fa fa-user" aria-hidden="true"> My staff</i></p>
      <div className=" text-center px-2">
          <p>My copun</p>
          <p>My Review & Rating</p>
          <p>My Wallet</p>
  
      </div>
 
</div>

<p className=" text-center mt-1">My Subscription </p>
<div class="card text-white bg-info mb-1 px-4 " >
 <p><br/><i class="fas fa-question-circle"> Help</i></p><br/>
 <p><i class="fas fa-users-cog"> FAQs</i></p>
</div>
<div class="card bg-info mb-1 px-4" >
   <p><br/><i class="fas fa-sign-out-alt">Logout</i></p>
</div>


            </div>  
            
              {/* right side page  */}
            <div className=" col-md-8 col-12 mx-auto mt-5">
            <div class="form-group col-12">
                          <hr/>
                         </div>
            <span className="title-right ">
          <Link to="#" class="btn btn-outline-primary ">Suscribe to more</Link></span>
            <p>Active Subscription </p>
            <div class="container px-2 py-2 mt-2"> 
        <div class="row "> 
            <div class="col mx-1">
            <div class="post-thumb mx-auto"><img src={foot}  alt={foot} /></div>  
            </div> 
            <div class="col mx-1">
              
            <div class="post-title ">
                  <p>Name</p>
                  Key Sampoo<br/>personalcare

                  </div>
            </div> 
            <div class="col mx-1">
            <div >
            <p>Quantity</p>
   <ul class="pagination mt-4">
 
    <li class="page-item"><button onClick={action} ><i class="fa fa-plus" aria-hidden="true"></i></button></li>
    <li class="page-item"><input type="text" className=" text-center w-100" name="" value={count} id="textbox" /></li>
    <li class="page-item"><button onClick={action2} ><i class="fa fa-minus fa-1x" aria-hidden="true"></i></button>
</li>
  </ul>
  
  </div>
            </div> 
            <div class="col mx-1 mt-2">
            <p>Frequency<span><br/>1 MONTH </span>
            <span> <p>next delivery<br/>
            28 feb 2021</p></span></p>
           
            </div> 
            <div class="col mx-1">
          <span className="title-right">status</span>
          <Link to="#" class="btn btn-outline-primary mt-3">Change Date</Link>
              
            </div> 
        </div> 
    </div> 


    <div class="container px-2 py-2 mt-2"> 
        <div class="row "> 
            <div class="col mx-1">
            <div class="post-thumb mx-auto"><img src={foot}  alt={foot} /></div>  
            </div> 
            <div class="col mx-1">
              
            <div class="post-title ">
                 
               Aroma magic oil<br/>
                Any
                  </div>
            </div> 
            <div class="col mx-1">
            <div >
   <ul class="pagination mt-4">
    <li class="page-item"><button onClick={action} ><i class="fa fa-plus" aria-hidden="true"></i></button></li>
    <li class="page-item"><input type="text" className=" text-center w-100" name="" value={count} id="textbox" /></li>
    <li class="page-item"><button onClick={action2} ><i class="fa fa-minus fa-1x" aria-hidden="true"></i></button>
</li>
  </ul>
  
  </div>
            </div> 
            <div class="col mx-1">
            <p><span><br/>1 MONTH </span>
            <span> <p>next delivery<br/>
            28 feb 2021</p></span></p>
           
            </div> 
            <div class="col mx-1">
          <Link to="#" class="btn btn-outline-primary mt-3">Change Date</Link>
              
            </div> 
        </div> 
    </div> 
  
    <div class="container px-2 py-2 mt-2"> 
        <div class="row "> 
            <div class="col mx-1">
            <div class="post-thumb mx-auto"><img src={foot}  alt={foot} /></div>  
            </div> 
            <div class="col mx-1">
              
            <div class="post-title ">
                
               Tea from the Valley
               Any

                  </div>
            </div> 
            <div class="col mx-1">
            <div >
   <ul class="pagination mt-4">
    <li class="page-item"><button onClick={action} ><i class="fa fa-plus" aria-hidden="true"></i></button></li>
    <li class="page-item"><input type="text" className=" text-center w-100" name="" value={count} id="textbox" /></li>
    <li class="page-item"><button onClick={action2} ><i class="fa fa-minus fa-1x" aria-hidden="true"></i></button>
</li>
  </ul>
  
  </div>
            </div> 
            <div class="col mx-1">
            <p><span><br/>1 MONTH </span>
            <span> <p>next delivery<br/>
            28 feb 2021</p></span></p>
           
            </div> 
            <div class="col mx-1">
          <Link to="#" class="btn btn-outline-primary mt-3">Change Date</Link>
              
            </div> 
        </div> 
    </div> 

    <div class="container px-2 py-2 mt-2"> 
        <div class="row "> 
            <div class="col mx-1">
            <div class="post-thumb mx-auto"><img src={foot}  alt={foot} /></div>  
            </div> 
            <div class="col mx-1">
              
            <div class="post-title mt-4">
                 
                Magazine 101

                  </div>
            </div> 
            <div class="col mx-1">
            <div >
   <ul class="pagination mt-4">
    <li class="page-item"><button onClick={action} ><i class="fa fa-plus" aria-hidden="true"></i></button></li>
    <li class="page-item"><input type="text" className=" text-center w-100" name="" value={count} id="textbox" /></li>
    <li class="page-item"><button onClick={action2} ><i class="fa fa-minus fa-1x" aria-hidden="true"></i></button>
</li>
  </ul>
  
  </div>
            </div> 
            <div class="col mx-1">
            <p>1 MONTH
            </p>
           
            </div> 
            <div class="col mx-1">
              
            </div> 
        </div> 
    </div> 
  {/* horizontal line   */}
    <div class="form-group col-12">
                          <hr/>
                         </div>
  

            </div>

            </div> 
    </div>

    

   
    </>

)
}
export default MySubscription;