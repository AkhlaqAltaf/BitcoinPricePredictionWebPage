import axios from "axios"

const LoginApi=async()=>{
   var response =await axios.post(
    "http://192.168.1.4:8000/api/accounts/login/" ,
    
    {username:"Akhlaq",email:"engrwaleed86@gmail.com",password:"123456"}

)

return response;


}
export default LoginApi;