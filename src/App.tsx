import { Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import LandingPage from "./pages/LandingPage"
import RegisterCompanyPage from "./pages/RegisterCompanyPage"
import SignInPage from "./pages/SigninPage"
import { RegisterPage } from "./pages/RegisterPage"
import Dashboard from "./pages/Dashboard/index"
import axios from "axios"

function App() {
  
  const [auth, setauth]=useState(false)

 const checkAuth = async () => {
      try {

        const token = localStorage.getItem("authToken");
        const API = import.meta.env.VITE_APP_URL;
        const response = await axios.get(`${API}/api/access`, {
          headers: {
            Authorization: `Bearer ${token}`,
             
          },
          withCredentials: false, 
        });
    
        setauth(response.data.authenticated);
      } catch (error) {
        setauth(false);
        console.error("error :",error)
      }
    };
  useEffect(()=>{
    checkAuth()
    const Timer =setInterval(()=>{
      
      checkAuth();
    },15*60*1000)
    return () => clearInterval(Timer)
    

  },[])
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="register-company" element={<RegisterCompanyPage />} />
        <Route path="signin" element={<SignInPage setauth={setauth} /> } />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="dashboard"
          element={
            auth === null ? (
              <div>Loading...</div>
            ) : auth ? (
              <Dashboard />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />

      </Route>
    </Routes>
  )
}

export default App;

