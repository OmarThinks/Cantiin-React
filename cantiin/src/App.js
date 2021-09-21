import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'

import {backend_urls,frontend_urls} from './settings/urls';

import NavBar from "./components/navbar";



function App() {
  return (






    <div>
     <NavBar isLoggedIn={true} />




    <h1>  
      Welcome Home
    </h1>
      
    </div>



  );
}

export default App;
