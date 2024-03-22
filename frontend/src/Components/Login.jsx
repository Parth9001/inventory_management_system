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
            style={{
              width: '400px',
              height: '50.6px',
              background: 'white',
              boxShadow: '0px 4px 20px 4px rgba(0, 0, 0, 0.50)',
              borderRadius: 30,
              // Placeholder text style
              color: '#4C7ED5',
              fontSize: 20,
              fontFamily: 'Garamond',
              fontWeight: '400',
              wordWrap: 'break-word',
              paddingLeft: '20px' // Margin from the right
            }}
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
              style={{
                width: '400px',
                height: '50.6px',
                background: 'white',
                boxShadow: '0px 4px 20px 4px rgba(0, 0, 0, 0.50)',
                borderRadius: 30,
                // Placeholder text style
                color: '#4C7ED5',
                fontSize: 20,
                fontFamily: 'Garamond',
                fontWeight: '400',
                wordWrap: 'break-word',
                paddingLeft: '20px' // Margin from the right
              }}
              type="password"
              name="password"
              id="passwordInput"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
          <button id="loginBtn" type="submit">LOGIN</button>
          {error && <p className="error">{}</p>}
        </form>
      </div>
    </div>
  );
}  