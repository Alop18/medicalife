import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import { Login } from './pages/login';
import Registro from './pages/registro';
import Cita from './pages/cita';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registro' element={<Registro/>}></Route>
        <Route path='/cita' element={<Cita/>}></Route>
 
      </Routes>
    </div>
  );
}

export default App;
