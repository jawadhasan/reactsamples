import { Routes, Route } from 'react-router-dom';

import NoMatch from "./components/no-match";
import Home from "./home"
import Misc from "./misc"
import FinalSpace from "./finalspace"

import './App.css';
import NavBar from './components/nav-bar';

const App = () => {
  return (
     <>
        <NavBar />       
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/finalspace" element={<FinalSpace />} />      
           <Route path="/misc" element={<Misc />} />                    
           <Route path="*" element={<NoMatch />} />
        </Routes>
       
     </>
  );
};

export default App;
