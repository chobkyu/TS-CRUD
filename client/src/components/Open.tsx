import React, { useState } from 'react';
import {useEffect} from "react";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { boardList } from '../interface/boardList';


function Open(){
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<boardList[]>([]);
    const {seq} = useParams();
    const navigate=useNavigate();
    let row;
    const open = async () =>{
        
        row = await axios.post('http://localhost:5000/read',{seq:seq});
        console.log(row);
        const dataDB:boardList = {
            seq : row.data[0].seq,
            title : row.data[0].title,
            content : row.data[0].content,
            userId : row.data[0].userId,
            date : row.data[0].date,
        }
        setData([...data, dataDB]);
        setLoading(false);
    };
    useEffect(()=>{
       open(); 
       
    },[])

    const onclick = () => {
        const id = window.sessionStorage.getItem('id');
        console.log("hi")
        if(id===data[0].userId){
            navigate('/modify/'+seq)
        }else{
            alert('권한이 없습니다');
        }
    }

    if(!{setLoading}){
        console.log("test: "+ row);
    }
    return(
        <div>
            {loading ?<strong>loading...</strong>:
               <div className = "input-Board">
                
               <div className = 'bar2'>
                   <h1>Title</h1>
               </div>
               <input name='title' type="text" className="search-input" value={data[0].title} disabled/>
               <div className = 'bar2'>
                   <h1>content</h1>
               </div>
               <table className="content_table">
                   <tr>
                       <td><textarea name="content" className="content" id="content" disabled>{data[0].content}</textarea>
                       </td>
                   </tr>
               </table>

               <div className = 'bar2'>
                   <h1>ID & Date</h1>
               </div>
               <input name='title' type="text" className="search-input" value={data[0].userId} disabled/>

               <input name='title' type="text" className="search-input" value={data[0].date} disabled/>
               
               <button className="d-btn" ><Link to="/" >목록</Link></button>
               <button className="m-btn" onClick={onclick}>수정</button>
               

               <div className='comment'>
                    <h2>Comment</h2>
                    <textarea className='comment'></textarea>
                    <button className='c-btn'>등록</button>
                </div>
           </div>
            }
        </div>
    )
}

export default Open;