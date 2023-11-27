import "./Login.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [typeLogin, setTypeLogin] = useState("company");

    let navigate = useNavigate();

    let handleLogin = async () => {
        let datas = await axios.post("http://localhost:8080/login",{
            type : typeLogin,
            email : email,
            phone : phone
        });
        console.log(datas.data);
        console.log(email);
        console.log(phone);
        console.log(typeLogin);
        if(datas.data.company && !datas.data.candidate){
            navigate("/company-manage", {state: {company : datas.data.data}})
        }else if(!datas.data.company && datas.data.candidate){
            navigate("/candidate", {state: {user: datas.data.data}});
        }else{
            alert("Email hoặc số điện thoại không chính xác!");
        }
    }


    return ( 
        <div className="container-login">
    <span className="text-login">ĐĂNG NHẬP</span>
    <div className="form-login-content">
        <label className="login-label">Số điện thoại : </label>
        <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} id="login" className="login-input" 
       
        />
    </div>
    <div className="form-login-content">
        <label className="login-label">Email : </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="login" className="login-input" 
        
        />
    </div>
    <div className="form-login-content">
        <label className="login-label"> Vai trò: </label>
        <select value={typeLogin} onChange={(e)=>setTypeLogin(e.target.value)} className="login-input">
            <option value={"company"}>Company</option>
            <option value={"candidate"}>Candidate</option>
        </select>
    </div>
    <button className="btn-login" onClick={handleLogin}>Đăng Nhập</button>
   
</div>
     );
}

export default Login;