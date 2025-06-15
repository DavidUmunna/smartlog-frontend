import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../../components/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/Card"
import {Input} from "../../components/Input"
import {Label} from "../../components/Label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../components/usercontext/userSlice"
import { useDispatch } from "react-redux"
import axios,{AxiosResponse} from "axios"
interface Props{
  setauth:(value:any)=>void
}

const SignInPage: React.FC<Props>=({setauth}) =>{
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [Error,setError]=useState('')
  const [formData, setformData]=useState({
    //CompanyName:'',
    email:'',
    password:''

  })
  const [loading, setloading]=useState(false)

  interface formData{
    //CompanyName:string;
    email:string;
    password:string;
  }
  interface User{
  id:string,
  name:string,
  email:string
}
  interface SigninResponse {
    token: string;
    userId: string;
    success:boolean;
    message:string;
    user:User,
    

  }
 
  

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      setloading(true)
      const API_GATEWAY=`${import.meta.env.VITE_APP_URL}/api`
      type signinaxiosResponse=AxiosResponse<SigninResponse>
      const response:signinaxiosResponse=await axios.post(`${API_GATEWAY}/admin/signin`,{...formData},{
          
          withCredentials: false, // Not inside headers
        })
      if (response.data.success===true){
        localStorage.setItem("authToken",response.data.token)
        dispatch(setUser(response.data.user))
        setauth(true)
        navigate("/admin/dashboard")
      }

    }catch(error:unknown){
      console.error(error)
      if (axios.isAxiosError(error)){

        if (error.response){
          setError(error.response.data.message||"Login failed")
        }else if (error.request){
          setError("Server is unreachable. Please check your connection")
        }else{
          setError("An Error occured, please try again")
        }
      }else{
        setError("An Error occureds")
      }


    }finally{
      setloading(false)
      if (!setauth){
        setformData({
          email:'',
          password:''
        })

      }
    }


  }
  if (loading) {
    return <div className='flex justify-center  items-center h-screen'>
              <div className='animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-transparent'>
                 
              </div>
           </div>;
  }

  const handleinputchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
  
    setformData((prev)=>({
      ...formData,
      [name]:value
    }))
  }


  return (
    <div className="container mx-auto max-w-md py-10 px-4">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline text-primblue hover:text-darkblue">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-black">Sign in</CardTitle>
          <CardDescription className="text-customgrey">Enter your credentials to access your account</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/*<div className="space-y-2">
              <Label htmlFor="company" className="text-black">Company Name</Label>
              <Input id="company" placeholder="Enter your company name" className="border border-slate-300 mt-1 text-black" required />
            </div>*/}

           <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input id="email" value={formData.email} name="email" onChange={handleinputchange}  type="email" placeholder="email@example.com" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-black">Password</Label>
                <Link to="/forgot-password" className="text-sm font-medium underline text-primblue hover:text-darkblue">
                  Forgot password?
                </Link>
              </div>
              <div className="space-y-2">

              <Input id="password" value={formData.password} name="password" onChange={handleinputchange} type="password" className="border border-slate-300 mt-1 text-black" required />
            </div>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-black">
            Don't have an account?{" "}

            <Link to="/register" className="font-medium underline text-primblue hover:text-darkblue">
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
      {Error && (
                  <div
                    
                   className="p-3 mt-5 flex  justify-center items-center  text-red-600 border-l-4 border-red-500 bg-red-200"
                  >
                    {Error}
                  </div>)}
    </div>
  )
}

export default SignInPage
