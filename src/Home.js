import React from 'react'
import './Home.css'
const Home =()=>
{
  var userData11 = JSON.parse(localStorage.getItem('user'));

    var d111=userData11.name;
    return(
        <div>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="content">
    <h1 style={{fontSize:"45px"}}>Welcome to Home page {d111}</h1>
        </div>
        </div>
    )

}

export default Home