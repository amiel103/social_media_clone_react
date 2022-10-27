
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../index.css';

export default function App(){
  
  const navigate = useNavigate();

  const logout = ()=> {
    alert("logout")
    localStorage.removeItem("user"); 
    navigate('/');
  }

  const createPost = (event)=>{
    
    const user = JSON.parse(localStorage.getItem("user"))

    const baseURL = 'http://127.0.0.1:8000/api/createPost';
    axios.post(baseURL, {
      post: event.target.text.value,
      author: user['name'],
      email: user['email']
    })
    .then((response) => {
      alert(response.data);
    });

    navigate('/home');
  }

  const home = ()=> {
    navigate('/home');
  }

  return(
    
    // <h1>hello</h1>
    <div>
      <nav>
        <h3  onClick={home}>HOME</h3>
        <h3 className="logout" onClick={logout}> LogOut</h3>
      </nav>
    
      <div className="writePost">

        <form onSubmit={createPost}>
          <p>Create Post</p>
          
          <div className="textArea">
            <textarea name="text" rows="2" cols="50" required>
              
            </textarea>
          </div>
          <br/>
          <button type="submit" >Post</button>
        </form>
      </div>

    </div>
    
    
  )
  
}

