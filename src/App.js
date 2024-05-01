import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import Home from './Components/Home/Home';
import FirstInnerBanner from './Components/InnerBanner/FirstInnerBanner';

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
