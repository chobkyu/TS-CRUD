import React,{useState} from 'react';
import './css/Login.css';
import {  Link, useNavigate } from "react-router-dom";
import axios from 'axios';

interface login{
    userId:string,
    userPw:string,
}

function Login(){
    const [login, setLogin] = useState<login>({
        userId:"",
        userPw:"",
    });

    const onchange = (e:any) => {
        const {name, value} = e.target;
        setLogin({
            ...login,
            [name]:value
        })
        console.log(login);
    }

    const navigate=useNavigate();

    const onclick = async() => {
        if(!login.userId||!login.userPw) return alert("아이디와 비번 둘 다 입력해주세요");

        const response = await axios.post('http://localhost:5000/login',{
            userId:login.userId,
            userPw:login.userPw,
        });
        console.log(response.data.success);

        if(response.data.success){
            alert('로그인 되었습니다');
            navigate('/');
        }else{
            return alert(response.data.msg);
        }

    }
    return (
        
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                        <input id="id" name="userId" type="text" onChange={onchange} placeholder="userid"/>
                        <input id="passWord" name="userPw" type="password" onChange={onchange} placeholder="password"/>
                        <p onClick = {onclick} id="button">login</p>
                        <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
        
    )
}

export default Login;