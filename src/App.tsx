import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import LandingPage from "./pages/LandingPage"
import RegisterCompanyPage from "./pages/RegisterCompanyPage"
import SignInPage from "./pages/SigninPage"
import { RegisterPage } from "./pages/RegisterPage"
import Selecti from "./components/Select"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="register-company" element={<RegisterCompanyPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="test" element={<Selecti/>} />
      </Route>
    </Routes>
  )
}

export default App;

/*import Login from './components/login'
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

export default App*/