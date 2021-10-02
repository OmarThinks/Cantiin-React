import React, {useState} from 'react';
import jQuery from 'jquery'
import fetchers from '../../../helpers/fetchers';
const axios = require('axios');








const LoginForm = () => {
  
  
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");

  const [form,setForm] = useState(
    {
      data:   {username:"", password:""},
      errors: {username:"", password:""}
    });


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



  const handleChange=(e)=>{
    setForm(
      {
        ...form,
        data:{
          ...form.data,
          [e.target.name]:e.target.value
        }
      }
      );
  };



  return ( <form onSubmit={handleSubmit}>

<div>
    <label>Username: </label>
    <input type="text" name="username" value={form.data.username} onChange={handleChange}/>
    </div>
    <div>
    <label>Password: </label>
    <input type="text" name="password" value={form.data.password} onChange={handleChange}/>
    </div>
    <input type="submit" value="Login"/>

  </form> );
}
 
export default LoginForm;
