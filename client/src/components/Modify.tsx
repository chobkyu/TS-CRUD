import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { boardList } from "../interface/boardList";
import {board} from '../interface/board';

function Modify(){
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<boardList[]>([]);
    const {seq} = useParams();
    const navigate=useNavigate();
    let row;

    const [board,setBoard] =useState<board>({
        title:"",
        content:"",
    });

    const onchange = (e:any) => {
        const {name, value} = e.target;
        setBoard({
            ...board,
            [name]:value
        }); 
    }
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
            if(!board.title||!board.content) return alert("제목과 내용을 입력해주세요");
            
        }else{
            alert('권한이 없습니다');
            navigate("/");
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
               <input name='title' type="text" className="search-input" value={data[0].title} onChange={onchange}/>
               <div className = 'bar2'>
                   <h1>content</h1>
               </div>
               <table className="content_table">
                   <tr>
                       <td><textarea name="content" className="content" id="content" onChange={onchange}>{data[0].content}</textarea>
                       </td>
                   </tr>
               </table>

               <div className = 'bar2'>
                   <h1>ID & Date</h1>
               </div>
               <input name='title' type="text" className="search-input" value={data[0].userId} disabled/>

               <input name='title' type="text" className="search-input" value={data[0].date} disabled/>
               
               <button className="d-btn" >완료</button>
               
               
           </div>
            }
        </div>
    )
}

export default Modify;