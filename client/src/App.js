import logo from './logo.svg';
import './App.css';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import {Routes,Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import Room from './screens/Room';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Displayscreen from './screens/Displayscreen';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navbar/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Homescreen/>}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='/booking/:roomid' element={<Bookingscreen/>}/>
          <Route path='/display/:roomid' element={<Displayscreen/>}/>
          

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
