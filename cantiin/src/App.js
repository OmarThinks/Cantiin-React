import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'


import { AuthContext, AuthContextProvider } from './contexts/Authentication';

import ProductsList from './routes/products/list';





import NavBar from "./components/navbar";
import Home from "./routes/home";
import LoginRoute from "./routes/auth/login";



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <NavBar isLoggedIn={false}/>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/products" component={ProductsList} />
              <Route path="/login" component={LoginRoute} />
            </div>
        </div>
      </AuthContextProvider>
    </BrowserRouter>


  );
}

export default App;
