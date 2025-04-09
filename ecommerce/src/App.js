import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories';

function App() {
  return (
    <>
        <BrowserRouter>
        
        <Routes>


        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        </Routes>
        {/* <Dashboard/> */}
        </BrowserRouter>
  {/* <Header/> */}

    
    
    </>

  );
}

export default App;
