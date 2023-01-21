import { Routes, Route } from 'react-router-dom';

import NoMatch from "./components/no-match";
import Home from "./home"

import './App.css';
import NavBar from './components/nav-bar';

const App = () => {
  return (
     <>
        <NavBar />       
        <Routes>
           <Route path="/" element={<Home />} />                 
           <Route path="*" element={<NoMatch />} />
        </Routes>
       
     </>
  );
};

export default App;
