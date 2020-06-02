import React from 'react'
import './Thank.css'
import {Link} from 'react-router-dom'
import './Login.js'
const Thanks =()=>
{
    var userData1 = JSON.parse(localStorage.getItem('user'));

    var d11=userData1.name;
return(
    

    <div className="Thcss">
      
<h1 >Thanks For Signing Up {d11}</h1>
   <Link to ='/Login'>Click here to Login</Link>
      
        </div>
      

       
   
)

}
export default Thanks