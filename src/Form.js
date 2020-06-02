
import React, { Component } from "react";    
import './Form.css'
import {Redirect,Link} from 'react-router-dom';
    
class Form extends Component {  
    userData;  
    constructor(props) {    
        super(props);    
        this.state = {    
            name: '',    
            email: '',    
            date: '',    
            gender: 'select',    
            phone: '',   
            age:'', 
            country: 'select',
            password:'',   redirect: false, 
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }  
   
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                password:this.userData.password
            })
           
        } else {
            this.setState({
               name:'',
               password:''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    handleFormValidation() {    
        const { name, email, date, gender, phone, country,password,age } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        if (!name) {    
            formIsValid = false;    
            formErrors["nameErr"] = "Name is required.";    
        }    
  
        if (!password) {    
            formIsValid = false;    
            formErrors["passwordErr"] = "Password is required.";    
        }    
        if (typeof password !== "undefined") {
            if (password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              formIsValid = false;
              formErrors["passwordErr"] = "enter secure and strong password.";
            }
          }
  
        if (!email) {    
            formIsValid = false;    
            formErrors["emailErr"] = "Email id is required.";    
        }    
        if(!email.includes('@'))
        {
            formIsValid = false;    
            formErrors["emailErr"] = "Email id is invalid"; 
        } 
     
        if (!date) {    
            formIsValid = false;    
            formErrors["dateErr"] = "Date of birth is required.";    
        }       
        
  
        if (gender==''||gender=='select') {    
            formIsValid = false;   
            formErrors["genderErr"] = "Select gender";    
        }    
     
        if (!phone) {    
            formIsValid = false;    
            formErrors["phoneErr"] = "Phone number is required.";    
        }  

        if (!age) {    
            formIsValid = false;    
            formErrors["ageErr"] = "Age is required.";    
        }  
        if (!age.match(/^[0-9]{2}$/)) {    
            formIsValid = false;    
            formErrors["ageErr"] = "Enter correct age";    
        }
      if (!phone.maxLength==10) {    
            formIsValid = false;    
            formErrors["phoneErr"] = "Phone number should be 10 digit";    
        }    
  
        if (country == '' || country== "select") {    
            formIsValid = false;    
            formErrors["countryErr"] = "Select country";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value }); 
       const{user}=this.state;
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
        var elems = document.getElementsByName('name')[0].value;
        
        console.log(elems)
        if (this.handleFormValidation()) {    
            const { name, value } = e.target;    
            this.setState({ [name]: value });
            window.location.href="/Thank";
           

        } 
 
      
    }    
  
    render() {    
        
        const { nameErr, emailErr, dateErr, genderErr, phoneErr, countryErr,passwordErr,ageErr } = this.state.formErrors;    
    
        return (    
            <div className="main"> 
              <h1 style={{ textAlign: "center" }} className="reg"> Registration Form</ h1>     
             
                    <form onSubmit={this.handleSubmit}>    
                     
                            <label>Name</label>    
                            <input type="text" name="name" id="na"   
                                value={this.state.name}    
                                onChange={this.handleChange}    
                                placeholder="Enter name.."    
                                className={nameErr ? ' showError' : ''} />    
                            { 
                                <div style={{ color: "red"}}>{nameErr}</div>    
                            }    
    
                        
                        <label>Password</label>    
                            <input type="password" name="password"  maxLength='10'  
                                value={this.state.password}    
                                onChange={this.handleChange}    
                                placeholder="Enter password"    
                                className={passwordErr ? ' showError' : ''} />    
                            {   
                                <div style={{ color: "red"}}>{passwordErr}</div>    
                            }    
    
                       
                            <label >Email Id</label>    
                            <input type="text" name="email"    
                                value={this.state.email}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailErr ? ' showError' : ''} />    
                            {   
                                <div style={{ color: "red"}}>{emailErr}</div>    
                            }    
    
                        
                            <label >Date of Birth</label>    
                            <input type="date" name="date"    
                                value={this.state.date}    
                                onChange={this.handleChange}    
                                 
                                className={dateErr ? ' showError' : ''} />    
                            { 
                                <div style={{ color: "red"}}>{dateErr}</div>    
                            }    <br/>
                          
                            <label>Gender</label>  <br/>  
                            <select name="gender" value={this.state.gender} 
                            onChange={this.handleChange}  
                            className={genderErr ? ' showError' : ''}>  <br/>
                            <option value="select">--Select--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select> 
                            {   
                                <div style={{ color: "red"}}>{genderErr}</div>    
                            }   
                           
                            <label>Age</label>    
                            <input type="text" name="age"    
                                value={this.state.age}    
                                onChange={this.handleChange}    
                                placeholder="Your Age.."    
                                className={nameErr ? ' showError' : ''} />    
                            {    
                                <div style={{ color: "red"}}>{ageErr}</div>    
                            }    
    
                          
                            <label >Phone Number</label>    
                            <input type="text" name="phone"  maxLength='10'  
                                onChange={this.handleChange}    
                                value={this.state.phone}    
                                placeholder="Enter phone number"    
                                className={phoneErr ? ' showError' : ''} />    
                            {   
                                <div style={{ color: "red"}}>{phoneErr}</div>    
                            }  
                            <br/> <br/> 
                           
                            <label htmlFor="country">country</label>    
                            <select name="country"    
                                value={this.state.country}    
                                onChange={this.handleChange}    
                                className={countryErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="India">India</option>    
                                <option value="Malaysia">Malaysia</option>    
                                <option value="China">China</option>    
                            </select>    
                            {   
                                <div style={{ color: "red"}}>{countryErr}</div>    
                            } 
                   
                          
                      <div >     
                     <button>Submit</button></div>
                    </form>    
                
            </div >    
        )    
    }    
}    
    
export default Form;