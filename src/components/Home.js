import React from "react";
import ReactDOM from 'react-dom'
import WritePost from './WritePost'
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Post from './Post';
import axios from "axios";




export default function Home(){

  const navigate = useNavigate();

  const [postData, setPostData] = useState([{
    author:'q',
    post:'w',
    likes:'w',
    created_at:'a'
  }]);

  const [postTags, setPostTags] = useState([]);

  let tags =[]
  

  const logout = ()=> {
    alert("logout")
    localStorage.removeItem("user"); 
    navigate('/');
  }
  const profile = ()=> {
    navigate('/profile');
  }

  useEffect(()=>{
    if(localStorage.getItem('user') == null ){
      navigate('/');
    }

    const baseURL = 'http://127.0.0.1:8000/api/getPost';
  
    const getPost = async ()=>{
      await axios.get(baseURL)
      .then((response) => {
        setPostData( response.data );
        console.log( 'api request granted' )
        
        for (let i = 0; i < response.data.length; i++) {

          const tag = <Post author  = {response.data[i]['author']}
                post    = { response.data[i]['post'] }
                likes   = { response.data[i]['likes'] }
                created = { response.data[i]['created_at'] }
                email   = { response.data[i]['email'] }
            
          />
          tags.push(tag)
          setPostTags(tags.reverse());
        } 

        
      });
    }

    
    getPost();
    
    


  },[])




  return(
    <div>
      <nav>
        <div className="h3">
          <h3>HOME</h3>
          <h3 className="logout" onClick={profile}>PROFILE</h3>
          
        </div>
        <h3 className="logout" onClick={logout}> LogOut</h3>
      </nav>
      
      
      {postTags }
      <Link to='/createPost'>
        <button className="float">+</button>
      </Link>
    </div>
    
  )
  
} 