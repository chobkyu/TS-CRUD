import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Table.css';

function Table(props:any){
    /*const onclick = async () =>{
        console.log("seq :" + props.data.seq);
        const seq = props.data.seq;
        const row = await axios.post('http://localhost:5000/read',{seq:seq});
        console.log(row);
    };*/
   // <Link to={`/movie/${id}`}>{title}</Link>
    return(
        
            <tr className="tr">
                <td>{props.data.seq}</td>
                <td ><Link to ={`/open/${props.data.seq}`}>{props.data.title}</Link></td>
                <td>{props.data.userId}</td>
                <td>{props.data.date}</td>
            </tr>
       
            
           
        
    )
}

export default Table;