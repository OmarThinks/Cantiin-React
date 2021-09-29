import React, {useState} from 'react';


const LoginForm = () => {
  
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log({username,password});
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
