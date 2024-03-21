// import React from 'react'

// export default function Login() {
//   return (
//     <div className='login'>
//         <div className="loginContent">
//             <span id='login'>Login</span>
//             <form action="">
//                 <span id="email">Email</span><br />
//                 <input type="email" name="email" id="emailInput" placeholder='Enter Email' required/><br />
//                 <p className='pwd'>
//                     <span id="pwd">Password</span><br />
//                     <input type="password" name="password" id="pwdInput" placeholder='Enter Password' required/>
//                 </p>
//                 <button id="loginBtn" type="submit">LOG IN</button>

//             </form>

//         </div>

//     </div>
//   )
// }

import React, { useState } from 'react';


export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const statusCode = response.status;

      if (statusCode === 200) {
        // Successful login
        onLogin(); // Trigger the login action
      } else if (statusCode === 400) {
        setError('Invalid username or password');
      } else {
        setError('An unexpected error occurred');
      }
    } catch (error) {
      setError('Error occurred while logging in');
    }
  };

  return (
    <div className="login">
      <div className="loginContent">
        <span id="login">Login</span>
        <form onSubmit={handleSubmit}>
          <span id="email">Username</span><br />
          <input
            type="text"
            name="username"
            id="usernameInput"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br />
          <p className='pwd'>
            <span id="pwd">Password</span><br />
            <input
              type="password"
              name="password"
              id="passwordInput"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
          <button id="loginBtn" type="submit">LOG IN</button>
          {error && <p className="error">{}</p>}
        </form>
      </div>
    </div>
  );
}
