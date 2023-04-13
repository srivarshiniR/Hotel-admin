import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from './pages/adminHome';
import AdminLogin from './pages/adminLogin';
import Dashboard from './pages/dashboard';
import Management from './pages/management';
import Add from './pages/add';
import Userdetails from './pages/userdetails';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Routes>
     
        <Route path='/' element={<AdminLogin/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/adminhome' element={<AdminHome/>}></Route>
        <Route path='/management' element={<Management/>}></Route>
        <Route path='/userdetails' element={<Userdetails/>}></Route>

       
     </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
