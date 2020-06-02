import React,{Component}from 'react'
import './Login.css'
import './Form.js'
import {Redirect,Link} from 'react-router-dom';

class Login extends Component
{
    constructor(props)
    {
           super(props);
           this.state={
               usern:'',
               pass2:''
               
           }

    }
  
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value }); 
       const{user}=this.state;
    } 
   
    handleCheck (e)
    {
     e.preventDefault();
        var d=document.getElementsByName('usern')[0].value;
        var userData = JSON.parse(localStorage.getItem('user'));
        var p=document.getElementsByName('pass2')[0].value;
       var p1=userData.password;
        var d1=userData.name;
       
       if(d==d1 & p==p1)
       {
           console.log("Success login")
           alert("Welcome "+d);
         window.location.href="/Home";
       }
       else{
           console.log("Failure login");
           alert("Username or password incorrect")
       }
    }
   
    render()
    {
        
        return(
            <div className="Logdiv">
                <h1 className="Login">Login</h1>
                <script type="text/javascript" src="/Form"> 
    </script> 
            <form> 
                <label>Username:</label> 
                <input type="text" name="usern"
                placeholder="Enter Username.."
                />
               
               <label>Password:</label><input type="password" name="pass2" 
               placeholder="Enter password"/>
               <button onClick={this.handleCheck}>Login</button>
                </form>
                </div>
        )
    }
}

export default Login;

