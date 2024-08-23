import axios from "axios"

const LoginApi=async()=>{
   var response = axios.post(
    "http://192.168.1.4:8000/api/accounts/login/" ,
    
    {username:"Akhlaq",email:"inamullahj.521@gmail.com",password:"string"}

)

return response;


}
export default LoginApi;