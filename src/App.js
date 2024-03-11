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
import Error from './components/Error.js'
import AdminSignin from "./components/AdminSignin.js";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";



function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(getAuth(app), (user) => setUser(user));
  //adarsh
  const [useremail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [admin, setAdmin] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash user={user}/>} />
          <Route path="/signin" element={<SignIn setUserEmail={setUserEmail} setUsername={setUsername} setUserNumber={setUserNumber} user={user}  />} />
          <Route path="/signup" element={<SignUp setUserEmail={setUserEmail} setUsername={setUsername} setUserNumber={setUserNumber} user={user} app={app} />} />
          <Route path="/navigation" element={<Navigation username={username} useremail={useremail} setUserEmail={setUserEmail} setUsername={setUsername} userNumber={userNumber} setUserNumber={setUserNumber} user={user}/>} />
          <Route path="/gatepass" element={<GatePass username={username} useremail={useremail} setUserEmail={setUserEmail} setUsername={setUsername} userNumber={userNumber} setUserNumber={setUserNumber} user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq username={username} useremail={useremail} setUserEmail={setUserEmail} setUsername={setUsername} userNumber={userNumber} setUserNumber={setUserNumber} user={user} />} />
          <Route path="/admin" element={<Admin admin={admin} setAdmin = {setAdmin} setUserEmail={setUserEmail} setUsername={setUsername} setUserNumber={setUserNumber} user={user} app={app} />} />
          <Route path="/error" element={<Error />} />
          <Route path="/adminsignin" element={<AdminSignin admin={admin} setAdmin = {setAdmin} app={app}/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
