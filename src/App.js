import { Routes, Route } from 'react-router-dom';

import NoMatch from "./components/no-match";
import Home from "./home"
import Misc from "./misc"
import FinalSpace from "./finalspace"
import Users from './users';
import UserDetails from "./users/user-details"
import EditUser from "./users/edit-user";
import AddUser from "./users/add-user"



import './App.css';
import NavBar from './components/nav-bar';

const App = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="/users/:slug" element={<UserDetails />} />
            <Route path="/users/edit/:slug" element={<EditUser />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/finalspace" element={<FinalSpace />} />
            <Route path="/misc" element={<Misc />} />
            <Route path="*" element={<NoMatch />} />
         </Routes>

      </>
   );
};

export default App;
