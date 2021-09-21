import './App.css';

import {backend_urls,frontend_urls} from './settings/urls';





function App() {
  return (







    <div>
    <ul>
      <li>
        <a href={frontend_urls.home}>Home</a>
      </li>
      <li>
        <a href={frontend_urls.products.list}>
          Products
        </a>
      </li>



      <li>
        <a href={frontend_urls.auth.login}>
          Login
        </a>
      </li>
      <li>
        <a href={frontend_urls.auth.signup}>
          Sign Up
        </a>
      </li>
      <li>
        <a href={frontend_urls.auth.logout}>
          Log Out
        </a>
      </li>

    </ul>



    <h1>  
      Welcome Home
    </h1>
      
    </div>



  );
}

export default App;
