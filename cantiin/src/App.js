import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'

import {backend_urls,frontend_urls} from './settings/urls';

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
