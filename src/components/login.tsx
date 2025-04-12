import React, {  JSX } from "react"
import { useState } from "react"
import {Link} from 'react-router-dom'
import key from '../assets/key.png'





export default function Login_page():JSX.Element{
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [Loading,setloading]=useState(false)
  const [error,seterror]=useState("")
  React.useEffect(()=>{
    
  },[])
  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setloading(true)
    seterror("")

  }
  return (
    <>
      <div className="flex justify-center rounded-md p-4 shadow-md bg-black ">


        <div >
          <div className="flex justify-center">
            <div  >
              <div className="flex justify-center">
                <img className="w-12 h-12" src={key}/>
              </div>
              <div>
                <h2>Sign in to your account</h2>
              </div>
                        
            </div>
          </div>
                
          <form 
            onSubmit={(e)=>{handleSubmit(e)}}
            method="POST"
          >   <div className=" m-5">
              <label htmlFor="Username" className="block text-sm font-medium">
                            Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e:React.ChangeEvent<HTMLDataElement>)=>setusername(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-none border border-gray-300 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>
            <div className=" m-5">
              <label htmlFor="password">
                            password
              </label>
              <div>
                <Link to={'/'}>
                                Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="text"
                required
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-none border border-gray-300 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <button
                type="submit"
                className=""
              >
                {Loading? 'Signing In':"Sign In"}
                                
    
              </button>
              <>
                {error&&error}
              </>
            </div>
                    
    
          </form>
        </div>
        
      </div>
    </>

  )
}
