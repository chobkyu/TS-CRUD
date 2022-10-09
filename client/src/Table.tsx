import React, { useEffect } from "react";
import './css/Table.css';
function Table(props:any){
    console.log("여기는 테이블"+props.data.seq);
    return(
        
            <tr className="tr">
                <td>{props.data.seq}</td>
                <td>{props.data.title}</td>
                <td>{props.data.date}</td>
            </tr>
       
            
           
        
    )
}

export default Table;