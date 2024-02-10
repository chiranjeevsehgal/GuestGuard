import './App.css';
import Dash from './Dash.js'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Navigation from './Navigation.js'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/navigation" element={<Navigation />} />
        </Routes>
      </BrowserRouter>

      {/* <div className="App">
        <Dash></Dash>
        <SignIn></SignIn>
      </div> */}
    </div>
  );
}

export default App;
