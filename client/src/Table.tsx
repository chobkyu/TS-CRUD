import React, { useEffect } from "react";
import './css/Table.css';
function Table(props:any){
    
    return(
        
            <tr className="tr">
                <td>{props.data.seq}</td>
                <td>{props.data.title}</td>
                <td>{props.data.userId}</td>
                <td>{props.data.date}</td>
            </tr>
       
            
           
        
    )
}

export default Table;