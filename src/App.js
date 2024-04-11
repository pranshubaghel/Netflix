
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Getapidata from './Components/GetAPIdata/Getapidata';
import FirstInnerBanner from './Components/InnerBanner/FirstInnerBanner';
// import Login from './Components/LoginPage/Login';
// import Movies from './Components/Movies/Movies';

// import Home from './Components/Home/Home'
// // import Nav from './Components/NavBar/Nav';
// import FirstBanner from './Components/Banner/FirstBanner';
// import SecondBanner from './Components/Banner/SecondBanner';
// import ThirdBanner from './Components/Banner/ThirdBanner';
// import FourBanner from './Components/Banner/FourBanner';
// import Footer from './Components/Footer/Footer';
// import QueryDropdown from './Components/Query/QueryDropdown';






function App() {
  return (
    <>
    {/* <Home/>
    <FirstBanner/>
    <SecondBanner/>
    <ThirdBanner/>
    <FourBanner/>
    <QueryDropdown/>
    <Footer/> */}
  <FirstInnerBanner/>
  {/* <Movies/> */}
  {/* <Getapidata/> */}
  {/* <Login/> */}
  {/* <Nav/> */}
  {/* <QueryDropdown/> */}
  {/* <Routes>
  <Route path='/' element={<Home/>} />
  <Route exact path='Login' element={<Login/>} />
  </Routes> */}
    </>
  
  );
}

export default App;
