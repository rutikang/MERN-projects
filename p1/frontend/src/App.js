import './App.css';
//
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './Student';
import CreateStudent from './CreateStudent';
import Update from './Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Student />}> </Route>
      <Route path='/create' element={< CreateStudent />}> </Route>
      <Route path='/update/:id' element={< Update />}> </Route>

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
