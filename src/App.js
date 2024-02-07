import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
