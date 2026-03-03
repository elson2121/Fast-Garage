import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // THIS IS THE MISSING LOGIC
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the page from refreshing

    try {
      const response = await fetch('http://localhost:4000/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.text(); // Your backend sends a string

      if (response.ok) {
        alert(data); // "Login successful! Welcome [Name]"
      } else {
        alert(data); // "Invalid email or password"
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Could not connect to the server.');
    }
  };

  return (
    <div className='login-container'> 
      <h1> Login </h1>
      {/* Changed classname to className and added onSubmit */}
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
          className='pass' 
          type="email" 
          id="email" 
          required
          value={email} 
          onChange={event => setEmail(event.target.value)} 
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input 
          className='pass' 
          type="password" 
          id="password" 
          required
          value={password} 
          onChange={event => setPassword(event.target.value)} 
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
