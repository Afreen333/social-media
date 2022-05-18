import Login from './components/Login';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Home from './components/Home';
import Signup from './components/Signup';
import './App.css';
import Editprofile from './components/Editprofile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/editprofile" element={<Editprofile/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      
    </Routes>
      </BrowserRouter>
    
  );
}

export default App;
