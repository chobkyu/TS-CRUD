import axios from "axios";
import React, { useEffect } from "react";
import '../css/Table.css';

function Table(props:any){
    const onclick = async () =>{
        console.log("seq :" + props.data.seq);
        const seq = props.data.seq;
        const row = await axios.post('http://localhost:5000/read',{seq:seq});
        console.log(row);
    };
    return(
        
            <tr className="tr">
                <td>{props.data.seq}</td>
                <td onClick={onclick}>{props.data.title}</td>
                <td>{props.data.userId}</td>
                <td>{props.data.date}</td>
            </tr>
       
            
           
        
    )
}

export default Table;