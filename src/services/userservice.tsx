import axios from "axios"
const API_GATEWAY='/api'

interface SigninResponse {
    token: string;
    userId: string;
    success:boolean;
    message:string;
    user:object,
    error:undefined;
    // add more fields if your API returns them
  }
export const signin=async(email:string,password:string):Promise<SigninResponse>=>{
  try{
    const response=await axios.post(`${API_GATEWAY}/admin/:${email}`,{email,password})

    return  response.data
  }catch(error){
    console.error(error)

  }
}

export const createuser=async(payload:object):Promise<SigninResponse>=>{
    try{

        const response=await axios.post(`${API_GATEWAY}/admin/createuser`,{payload})

        return response.data
    }catch(error){
        console.error(error)
    }

}

//export const access=async()
