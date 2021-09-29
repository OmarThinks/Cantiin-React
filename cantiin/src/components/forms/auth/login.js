import React, {useState} from 'react';
const axios = require('axios');

const LoginForm = () => {
  
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log({username,password});
  
        
    // Make a request for a user with a given ID
    axios.post('https://cantiin.com/api/auth/users/login/')
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

  </form> );
}
 
export default LoginForm;
