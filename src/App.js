import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Home } from './Pages/Home';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
