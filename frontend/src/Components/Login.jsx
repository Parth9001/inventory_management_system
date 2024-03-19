import React from 'react'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginContent">
            <span id='login'>Login</span>
            <form action="">
                <span id="email">Email</span><br />
                <input type="email" name="email" id="emailInput" placeholder='Enter Email' required/><br />
                <p className='pwd'>
                    <span id="pwd">Password</span><br />
                    <input type="password" name="password" id="pwdInput" placeholder='Enter Password' required/>
                </p>
                <button id="loginBtn" type="submit">LOG IN</button>

            </form>

        </div>

    </div>
  )
}

// import React, { useState, useEffect } from 'react';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     // You can perform any additional side effects here if needed
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Make API request to backend with user credentials
//     try {
//       const response = await fetch('backend_api_url/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         // Redirect to home page upon successful login
//         window.location.href = '/home';
//       } else {
//         // Handle error cases such as invalid credentials
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error occurred while logging in:', error);
//     }
//   };

//   return (
//     <div className='login'>
//       <div className="loginContent">
//         <span id='login'>Login</span>
//         <form onSubmit={handleSubmit}>
//           <span id="email">Email</span><br />
//           <input
//             type="email"
//             name="email"
//             id="emailInput"
//             placeholder='Enter Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           /><br />
//           <p className='pwd'>
//             <span id="pwd">Password</span><br />
//             <input
//               type="password"
//               name="password"
//               id="pwdInput"
//               placeholder='Enter Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </p>
//           <button id="loginBtn" type="submit">LOG IN</button>
//         </form>
//       </div>
//     </div>
//   );
// }
