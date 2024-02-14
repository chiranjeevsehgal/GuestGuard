import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./services/firebase.js";
import './App.css';
import Dash from './components/Dash.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'
import Navigation from './components/Navigation.js'
import GatePass from './components/GatePass.js'
import About from './components/About.js'
import Faq from './components/Faq.js'
import Admin from './components/Admin.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(getAuth(app), (user) => setUser(user));

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash user={user}/>} />
          <Route path="/signin" element={<SignIn user={user}  />} />
          <Route path="/signup" element={<SignUp user={user} app={app} />} />
          <Route path="/navigation" element={<Navigation user={user}/>} />
          <Route path="/gatepass" element={<GatePass user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq user={user} />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
