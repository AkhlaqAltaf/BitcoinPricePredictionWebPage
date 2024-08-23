import axios from "axios"

const Register =async() =>{

try {
    var response = axios.post('http://192.168.1.4:8000/api/accounts/register/',{email:"engrwaleed86@gmail.com",password:"123456"})

    return response;

} catch (error) {
    console.log("Some thing is Wrong",error);
    
}
  

}

export default Register;