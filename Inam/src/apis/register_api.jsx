import axios from "axios"

const Register =async() =>{

try {
    var response =await axios.post('http://192.168.1.4:8000/api/accounts/register/',{email:"engrwaleed8236@gmail.com",password:"123456"})

    return response;

} catch (error) {
    console.log("Some thing is Wrong",error);
    
}
  

}

export default Register;