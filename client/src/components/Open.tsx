import React, { useState } from 'react';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { boardList } from '../routes/Board';


function Open(){
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<boardList[]>([]);
    const {seq} = useParams();
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
               
               <button className="d-btn" >목록</button>
               
           </div>
            }
        </div>
    )
}

export default Open;