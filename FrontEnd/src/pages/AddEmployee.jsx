import React from 'react'
//import usestate 
import { useState } from 'react'





function AddEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailaddress, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    //prepare the data to send to the server 
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: emailaddress,
      password: password
    };
    //send the data to the server
    const apiurl = 'http://localhost:4000/add-employee';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const response = fetch(apiurl, requestOptions);
    response.then(res => res.json())
      .then(res => {
        console.log(res);
        //clear the form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      });
  };

  return (
    <>
      <h1> Add the Employee </h1>
      <div className='form'>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname" value={firstName} onChange={event => setFirstName(event.target.value)} />
          <br />
          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" value={lastName} onChange={event => setLastName(event.target.value)} />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={emailaddress} onChange={event => setEmail(event.target.value)} />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default AddEmployee
