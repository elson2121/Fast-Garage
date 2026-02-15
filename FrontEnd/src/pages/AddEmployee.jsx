import React from 'react'

function AddEmployee() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
     <h1> Add the Employee </h1>
     <div className='form'>
      <form  action="" onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name:</label>
      <input type="text" id="fname" name="fname" />
      <br />
      <label htmlFor="lname">Last Name:</label>
      <input type="text" id="lname" name="lname" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <input type="submit" value="Submit" />




      </form>
     </div>


    </>
  )
}

export default AddEmployee
