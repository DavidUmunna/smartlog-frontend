import axios from "axios"
import React,{useState,useEffect} from "react"



export default function ForgotPassword(){
  const [Error, setError]=useState("")
  const [email,setEmail]=useState("")
  const [step,setStep]=useState(1)

  const sendUrl=async(email:String)=>{
    try{
      const VITE_URL=import.meta.env.VITE_APP_URL
      const response=await axios.put(`${VITE_URL}/api/reset`,{email})

      if (response.success){


      }



    }catch(error){

    }
  }
  return (
    <>
      <div className="">

            
      </div>
    </>
  )
}