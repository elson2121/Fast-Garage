
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddEmployee from './pages/AddEmployee' 
import Login from './pages/Login'
 

function App() {
 

  return (
    <>
    <Routes> 
      <Route path="/" element={<h1> hello </h1> } />
      <Route path="/add" element={<AddEmployee/>} />
      <Route path="/log" element={<Login/>}/> 
  
  </Routes>
   

    </>
  )
}

export default App
