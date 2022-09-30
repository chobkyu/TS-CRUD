import React,{useState} from 'react';
import './Login.css';
import axios from 'axios';
export interface regist{
    id:string,
    pw:string,
    name:string,
    nickname:string
}

function Register(){
    const [newUser, setNewUser] = useState({
        id:"",
        pw:"",
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
        
    }
    const onclick = () =>{
        console.log(newUser.id);
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