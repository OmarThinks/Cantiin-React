import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'


import NavBar from "./components/navbar";
import Home from "./routes/home";


function App() {
  return (
    <div>
     <NavBar isLoggedIn={true} />

    <Home/>
      
    </div>



  );
}

export default App;
