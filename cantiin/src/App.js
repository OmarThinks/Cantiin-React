import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'


import NavBar from "./components/navbar";
import Home from "./routes/home";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar isLoggedIn={false}/>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
        </div>
      </BrowserRouter>


  );
}

export default App;
