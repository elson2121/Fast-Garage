import React from 'react'
//import usestate
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
        
      <h1> Login </h1>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      
    </div>
  )
}

export default Login
