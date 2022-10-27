import React from "react";
import axios from "axios";
import Home from "./Home";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
// import  { Redirect } from 'react-router-dom'





 
export default function Login(){

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let result;
  
    const baseURL = 'http://127.0.0.1:8000/api/login';

    axios.post(baseURL, {
      email: event.target.email.value,
      password: event.target.password.value
    })
    .then((response) => {
  
      result = response.data;
  
      if( result !== 'user not found'){
        alert( result )
        localStorage.setItem( 'user' , JSON.stringify(result) )
        navigate('/home');
      }else{
        alert( result);
      }
  
  
    }).catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
  
    });
  
  
  
  }
  useEffect(()=>{

  if(localStorage.getItem('user') != null){
   
      navigate('/home');
    }
    
    // return <Redirect to='/home'  />
  },[])
    return(
      <div className="login" >
        <form onSubmit={handleSubmit}>
          
          Email: <br/>
          <input type="text"  name="email" required/><br/>
          Password:  <br/>
          <input type="password" name="password" required/>


          <div className="loginButtons">
            <Link to='/signUp'>
              <button className="loginButton" type="submit" >Sign Up</button>
            </Link>
          
            <button className="loginButton" type="submit" >Login</button>
          </div>

        </form>
      </div>
    )


  }



  



