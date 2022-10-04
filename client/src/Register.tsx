import React,{useState} from 'react';
import './css/Login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export interface regist{
    id:string,
    pw:string,
    pw2:string,
    name:string,
    nickname:string
}

function Register(){
    const [newUser, setNewUser] = useState<regist>({
        id:"",
        pw:"",
        pw2:"",
        name:"",
        nickname:"",
    }
    );

    const onchange = (e:any) => {
        const {name, value} = e.target;
        setNewUser({
            ...newUser,
            [name]:value
        })
        console.log(newUser);
    }

    const navigate=useNavigate();

    const onclick =async () =>{
        if(!newUser.id) return alert("아이디를 입력해주세요");
        if(!newUser.pw) return alert("비밀번호를 입력해주세요");
        if(!newUser.pw2) return alert("비밀번호 확인을 입력해주세요");
        if(!newUser.name) return alert("이름을 입력해주세요");
        if(!newUser.nickname) return alert("닉네임을 입력해주세요");

        if(newUser.pw!==newUser.pw2){
            alert("비밀번호를 확인해주세요");
            return false;
        }
       const response =  await axios.post('http://localhost:5000/register', {
            userId:newUser.id,
            userPw:newUser.pw,
            userName:newUser.name,
            userNickname:newUser.nickname,
        });
        
        console.log(response.data.success);
        if(response.data.success){
            alert("로그인 해주세요");
            navigate('/login');
        }else{
            return alert("회원가입 중 에러 발생");
        }
    }
    return (
        <div>
            <div className="login-page">
                    <div className="form">
                        <form className="login-form">
                            <input id="id" name = "id" type="text" placeholder="userid"  onChange={onchange}/>
                            <input id="passWord" name = "pw" type="password" placeholder="password" onChange={onchange}/>
                            <input id="confirm-passWord" name="pw2" type="password" placeholder="password confirm" onChange={onchange} />
                            <input id="name" type="text" name="name" placeholder="username" onChange={onchange}/>
                            <input id="nickname" type="text" name="nickname" placeholder="nickname" onChange={onchange}/>
                            <p onClick={onclick} id="button">sign Up</p>
                            <p className="message">Already registered? <a href="/login">login</a></p>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Register;