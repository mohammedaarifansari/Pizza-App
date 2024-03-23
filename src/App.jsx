
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/footer/Footer';
import Home from './page/Home/Home';
import { useState } from 'react';
import Login from './components/navbar/login/Login';

function App() {
  
  const [showlogin,setShowLogin] = useState(false)

  return (
  <>
  {showlogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
     <Footer/>
    </div>
    </>
  )
}

export default App;
