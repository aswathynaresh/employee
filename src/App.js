import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './component/Employee';
import Home from './component/Home';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/Employee' exact element={<Employee />}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
