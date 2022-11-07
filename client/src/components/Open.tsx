import React, { useState } from 'react';
import {useEffect} from "react";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { boardList } from '../interface/boardList';
import {comment} from '../interface/comment';

function Open(){
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<boardList[]>([]);
    const [commentList,setCommentList] = useState<comment[]>([]);
    const {seq} = useParams();
    const navigate=useNavigate();
    let row;
    let commentRow:comment;
    const [comment,setComment] = useState();

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

        commentRow =  await axios.post('http://localhost:5000/read',{seq:seq});
        console.log(commentRow);
        setCommentList([...commentList,commentRow]);

                
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

    const submitComment = async () => {
        const id = window.sessionStorage.getItem('id');
        if(id===null){
            alert("로그인이 필요합니다");
            return;
        }
        const response = await axios.post('http://localhost:5000/insertComment',{
            comment:comment,
            seq:seq,
            userId:window.sessionStorage.getItem('id')
        });
        console.log(response.data);

        if(response.data.success){
            alert("글이 등록되었습니다");
            
        }else{
            return alert(response.data.msg);
        }
    }
    
    const onchange = (e:any) => {
       //const {name, value} = e.target;
       setComment(e.target.value)
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
                    <textarea className='comment' name="comment" onChange={onchange}></textarea>
                    <button className='c-btn' onClick={submitComment}>등록</button>
                </div>
           </div>
            }
        </div>
    )
}

export default Open;