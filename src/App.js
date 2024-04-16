
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Getapidata from './Components/GetAPIdata/Getapidata';
import FirstInnerBanner from './Components/InnerBanner/FirstInnerBanner';
// import FunnyMovies from './Components/Movies/FunnyMovies';
import Login from './Components/LoginPage/Login';
// import Movies from './Components/Movies/Movies';

import Home from './Components/Home/Home'
// // import Nav from './Components/NavBar/Nav';




function App() {
  return (
    <>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route exact path='Login' element={<Login/>}/>
  <Route exact path='first' element={<FirstInnerBanner/>} />
  </Routes>
    </>
  
  );
}

export default App;
