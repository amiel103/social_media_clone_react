import React from "react";
import axios from "axios";






const handleSubmit = (event) => {
  event.preventDefault()
  


  if( event.target.password.value !== event.target.confirmPassword.value  ){
    alert("password must match");
    return;
  }

  const baseURL = 'http://127.0.0.1:8000/api/createUser';
  axios.post(baseURL, {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value
  })
  .then((response) => {
    alert(response.data);
  });



}



export default function SignUp(){
  return(
    
    <div className="SignUp" >
      
      <form onSubmit={handleSubmit}>
        Name<br/>
        <input type="text" name="name" required/><br/>

        Email: <br/>
        <input type="text"  name="email" required /><br/>

        Password: <br/>
        <input type="password"  name="password" required minLength="8" /><br/>

        Confirm Password:<br/>
        <input type="password"  name="confirmPassword" required minLength="8" />

        <button className="loginButton" type="submit" >Login</button>
      </form>
      
    </div>
  )
}