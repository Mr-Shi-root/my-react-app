import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Registry from './pages/registry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='registry' element={<Registry />} />
      </Routes>
    </div>
  );
}

export default App;
