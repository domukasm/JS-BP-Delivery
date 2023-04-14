import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import Signin from './Components/SignIn';
import Create from './Components/Create';
import List from './Components/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;