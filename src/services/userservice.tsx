import axios from "axios"

const API_GATEWAY=`${import.meta.env.VITE_APP_URL}/api`

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
//type signinaxiosResponse=AxiosResponse<SigninResponse>

export const signin=async(email:string,password:string):Promise<SigninResponse>=>{
  try{
    const response=await axios.post(`${API_GATEWAY}/admin/`,{email,password},{
          
          withCredentials: true, // Not inside headers
        })

    return  response.data as SigninResponse
  }catch(error){
    console.error(error)
    throw new Error("Sign in failed")
    

  }
}

export const createuser=async(payload:object):Promise<User>=>{
  try{

    const response=await axios.post(`${API_GATEWAY}/admin/createuser`,{payload})

    return response.data as User
  }catch(error){
    console.error(error)
    throw new Error("user creation failed")
  }

}

//export const access=async()
