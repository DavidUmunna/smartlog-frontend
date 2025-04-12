import Login from './components/login'
import React from 'react'
import { Route,Routes,useLocation} from 'react-router-dom'
import './App.css'
import { useState } from 'react'

function App() {
  const location=useLocation()
  const [auth, setauth]=useState(true)

  React.useEffect(()=>{
    setauth(true)

  },[auth])

  return (
    <>
      
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={auth? <Login/>:<Login/> }></Route>
      </Routes>
      
      
      
    </>
  )
}

export default App
