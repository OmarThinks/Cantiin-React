import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'

import ProductsList from './routes/products/list';



import NavBar from "./components/navbar";
import Home from "./routes/home";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar isLoggedIn={false}/>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/products" component={ProductsList} />
            </div>
        </div>
      </BrowserRouter>


  );
}

export default App;
