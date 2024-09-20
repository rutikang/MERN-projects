import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Home/>}></Route>
      <Route path='/login' element={< Login/>}></Route>
      <Route path='/register' element={< Register/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
