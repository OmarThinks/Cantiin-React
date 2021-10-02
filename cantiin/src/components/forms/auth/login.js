import React, {useState} from 'react';
import jQuery from 'jquery'
import fetchers from '../../../helpers/fetchers';
const axios = require('axios');

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}


let localhost_djoser_login_url = "http://127.0.0.1:8000/api/auth/token/login/";
let localhost_drf_login_url = "https://cantiin.com/api-auth/login/";
let localhost_custom_login_url = "https://cantiin.com/api/auth/custom/login/";
let localhost_drf_token_login_url = "http://127.0.0.1:8000/api-token-auth/";



/*
    fetch(url, {
      //credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        //'X-CSRFToken': csrftoken
      },
      body: {username, password}
     }).then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

*/




/*
*/





const LoginForm = () => {
  
  
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");




  const logout = (e) =>{
    e.preventDefault();
    console.log({username,password});


    var config = {
    method: 'post',
    url: localhost_drf_login_url,
    data: {
      username
    },
    withCredentials: true,
      
  };



    
    
  fetch("https://cantiin.com/api/auth/custom/logout/", {
    credentials: 'include',
    method: 'POST',
    headers: {
      //'Accept': 'application/json',
      "Content-Type":"application/json",
      //'X-CSRFToken': "abc"
    },
   }).then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
    

  }






  const handleSubmit = (e) =>{
    e.preventDefault();
    
  fetchers.auth.login({username,password})
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
    
  }





  return ( <form onSubmit={handleSubmit}>

<div>
    <label>Username: </label>
    <input type="text" name="username" value={username} onChange={e=>{setUsername(e.target.value)}}/>
    </div>
    <div>
    <label>Password: </label>
    <input type="text" name="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
    </div>
    <input type="submit" value="Login"/>


<button onClick={logout}>Logout</button>

  </form> );
}
 
export default LoginForm;
