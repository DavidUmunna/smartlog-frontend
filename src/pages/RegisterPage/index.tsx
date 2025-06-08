import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../../components/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/Card";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import axios from "axios";
import { useState } from "react";
import SuccessModal from "../../components/successmodal";
export function RegisterPage() {

  type Role= "Admin"|"Staff"|"";

  interface formData{
    CompanyName:string;
    email:string;
    password:string;
    firstname:string;
    lastname:string;
    role:Role;
    confirmpassword:string;
  }
 
  const [Error,setError]=useState('')
  const [formData, setformData]=useState<formData>({
    CompanyName:'',
    email:'',
    password:'',
    firstname:'',
    lastname:'',
    role:'',
    confirmpassword:''

  })
  const [showModal,setshowModal]=useState(false)
  const [loading, setloading]=useState(false)
  
  
  
 
  const ResetForm=()=>{
    setformData({
      CompanyName:'',
      email:'',
      password:'',
      firstname:'',
      lastname:'',
      role:'',
      confirmpassword:''


    })
  }

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      setloading(true)
      const API_GATEWAY=`${import.meta.env.VITE_APP_URL}/api`

      const response=await axios.post(`${API_GATEWAY}/admin/createuser`,{...formData},{
          
          withCredentials: false, // Not inside headers
        })
      if (response.data.success===true){
        setshowModal(true) 
        ResetForm()
      }

    }catch(error:unknown){
      console.error(error)
      if (axios.isAxiosError(error)){

        if (error.response){
          setError(error.response.data.message||"user creation failed")
        }else if (error.request){
          setError("Server is unreachable. Please check your connection")
        }else{
          setError("An Error occured, please try again")
        }
      }else{
        setError("An Error occured")
      }


    }finally{
      setloading(false)
      ResetForm()
    }


  }
  if (loading) {
    return <div className='flex justify-center  items-center h-screen'>
              <div className='animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-transparent'>
                 
              </div>
           </div>;
  }
  if (showModal){
    return <SuccessModal
          message="user creation was successful!"
          onClose={() => setshowModal(false)}
        />
  }

  const handleinputchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
  
    setformData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handlerolechange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const {name,value}=e.target
    
      setformData((prev)=>({
        ...prev,
        [name]:value as Role
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
          <CardTitle className="text-2xl text-black">Register</CardTitle>
          <CardDescription className="text-customgrey">Create a new account to join your company</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-black">Company Name</Label>
              <Input id="company" value={formData.CompanyName} name="CompanyName" type="text" onChange={handleinputchange} placeholder="Enter your company name" className="border border-slate-300 mt-1 text-black" required />
            </div>
             
             <div className="space-y-2">
              <Label htmlFor="firstname" className="text-black">First Name</Label>
              <Input id="firstname" value={formData.firstname} name="firstname" type="text" onChange={handleinputchange} placeholder="Enter your company name" className="border border-slate-300 mt-1 text-black" required />
            </div>

             <div className="space-y-2">
              <Label htmlFor="lastname" className="text-black">Last Name</Label>
              <Input id="lastname" value={formData.lastname} name="lastname" type="text" onChange={handleinputchange} placeholder="Enter your company name" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-black">Role</Label>
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handlerolechange}
                  className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                >
                  <option value="" disabled>Select a role</option>
                  <option value="Admin">Admin</option>
                  <option value="Staff">Staff</option>
                </select>
            
                {/* Dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input id="email" value={formData.email} name="email" onChange={handleinputchange}  type="email" placeholder="email@example.com" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-black">Password</Label>
              <Input id="password" value={formData.password} name="password" onChange={handleinputchange} type="password" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-black">Confirm Password</Label>
              <Input id="confirmpassword" value={formData.confirmpassword} name="confirmpassword" onChange={handleinputchange} type="password" className="border border-slate-300 mt-1 text-black" required />
            </div>

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-black">
            Already have an account?{" "}

            <Link to="/signin" className="font-medium underline text-primblue hover:text-darkblue">
              Sign in
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