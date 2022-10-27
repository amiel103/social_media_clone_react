
import React from "react";
import { Link } from "react-router-dom";


export default function App( data ){
  const profile = JSON.parse(localStorage.getItem("user"))['email'];
  return(
    
    // <h1>hello</h1>
    
    <div className="Post">

      { }
      
      <Link to={'/profile/'+data['email']}>
        <h6>{data['author']}</h6>
      </Link>
      <h6>{data['post']}</h6>
      <h6>{data['likes']}</h6>
      <h6>{data['created']}</h6>
    </div>
    
  )
  
}

