import React from 'react'

export default function Home() {
  return (
    <div>
      //write the register for for useing the name,sex, department
      <h1> Home </h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />  
        <label htmlFor="sex">Sex:</label>
        <input type="text" id="sex" name="sex" required />
        <br />
        <label htmlFor="department">Department:</label>
        <input type="text" id="department" name="department" required />
        <br />
        <button type="submit">Register</button>
      </form>
      // add the crude operations for the 



    </div>
  )
}
