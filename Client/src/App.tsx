import AddEmployee from './components/AddEmployee'
import Login from './components/Login'
import './App.css'
import { Route, Routes} from 'react-router-dom' 
function App() {
 
  return (
   <Routes>
    <Route path="/" element={<div>this is the app</div>} />
    <AddEmployee />
    <Login />
    <Route path="/add" element={<div>this is the app</div>} />
   </Routes>
  )
}

export default App
