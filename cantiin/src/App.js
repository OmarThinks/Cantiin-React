import './App.css';

import {BrowserRouter, Route, Router} from 'react-router-dom'


import { AuthContext, AuthContextProvider } from './contexts/Authentication';

import ProductsList from './routes/products/list';





import NavBar from "./components/navbar";
import Home from "./routes/home";
import LoginRoute from "./routes/auth/login";
import SignupRoute from "./routes/auth/signup";



function App() {
  let location = window.location.href;
  console.log(location);
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <NavBar isLoggedIn={false} location={window.location.href}/>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/products" component={ProductsList} />
              <Route path="/login" component={LoginRoute} />
              <Route path="/signup" component={SignupRoute} />
            </div>
        </div>
      </AuthContextProvider>
    </BrowserRouter>


  );
}

export default App;
