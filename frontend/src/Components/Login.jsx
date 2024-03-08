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
