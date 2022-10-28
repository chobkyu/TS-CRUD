import React,{useState,useEffect} from 'react';
import '../css/Write.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {board} from '../interface/board';


function Write(){
    const [board,setBoard] = useState<board>({
        title:"",
        content:"",
    });
    const navigate=useNavigate();
    useEffect(()=>{
        const id = window.sessionStorage.getItem('id');
        if(!id){
            navigate('/login');
            alert('로그인 해주세요');
            
        }
    },[]);

    const onchange = (e:any) => {
        const {name, value} = e.target;
        setBoard({
            ...board,
            [name]:value
        }); 
    }
    

    const onclick = async () => {
        if(!board.title||!board.content) return alert("제목과 내용을 입력해주세요");
        const response = await axios.post('http://localhost:5000/write',{
            title:board.title,
            content:board.content,
            userId:window.sessionStorage.getItem('id')
        });
        console.log(response.data);

        if(response.data.success){
            alert("글이 등록되었습니다");
            navigate("/");
        }else{
            return alert(response.data.msg);
        }
    }
    return(
        <div>
            <div className = "search-box">
                <input type="text" id="search"/>
                <button className="btn-search">검색하기</button>
            </div>

            <div className = "input-Board">
                
                <div className = 'bar2'>
                    <h1>Title</h1>
                </div>
                <input name='title' type="text" className="search-input" onChange={onchange}/>
                <div className = 'bar2'>
                    <h1>content</h1>
                </div>
                <table className="content_table">
					<tr>
						<td><textarea name="content" className="content" id="content" onChange={onchange}></textarea>
						</td>
					</tr>
				</table>
                <button className="d-btn" onClick={onclick}>등록</button>
                
            </div>
        </div>

    );
}

export default Write;