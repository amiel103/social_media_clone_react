
import React from "react";
import axios from "axios";
import { useState ,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../index.css';
import Post from './Post';

export default function App(){

  const {id} = useParams();
  
  
  
  const navigate = useNavigate();

  const logout = ()=> {
    alert("logout")
    localStorage.removeItem("user"); 
    navigate('/');
  }


  const home = ()=> {
    navigate('/home');
  }

  const [postTags, setPostTags] = useState([]);
  let tags =[]

  useEffect(()=>{
    if(localStorage.getItem('user') == null ){
      navigate('/');
    }

    const baseURL = 'http://127.0.0.1:8000/api/getPostOf';

    let emailSend;
    
    if(id===undefined){
      emailSend = JSON.parse(localStorage.getItem("user"))['email'];
      alert(emailSend)
    }else{
      emailSend = id;
    }
    const getPost = async ()=>{
      await axios.post(baseURL,{
        email: emailSend,
      })
      .then((response) => {
        console.log( 'api request granted' )
        
        for (let i = 0; i < response.data.length; i++) {

          const tag = <Post author  = {response.data[i]['author']}
                post    = {response.data[i]['post']}
                likes   = {response.data[i]['likes']}
                created = {response.data[i]['created_at']}
          />
          tags.push(tag)
          setPostTags(tags.reverse());
        } 

        
      });
    }

    
    getPost();
    
    


  },[])

  return(
    
    // <h1>hello</h1>
    <div>
      <nav>
        <h3 className="logout" onClick={home}>HOME</h3>
        <h3 className="logout" onClick={logout}> LogOut</h3>
      </nav>

      {postTags }
      <Link to='/createPost'>
        <button className="float">+</button>
      </Link>
    </div>
    
    
  )
  
}

