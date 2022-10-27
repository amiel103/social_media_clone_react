
import './index.css';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import WritePost from './components/WritePost'
import Profile from './components/Profile'
import { Route,Routes } from 'react-router-dom';




export default function App(){
  return(
    
    // <h1>hello</h1>
    
    <Routes>
      <Route path='/' element={ <Login/> } />
      <Route path='/home' element={ <Home/> } />
      <Route path='/signUp' element={ <SignUp/> } />
      <Route path='/createPost' element={ <WritePost/> } />
      <Route path='/profile' element={ <Profile/> } />
      <Route path='/profile/:id' element={ <Profile/> } />
    </Routes>

    
  )
  
}

