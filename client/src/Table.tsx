import React, { useEffect } from "react";

function Table(props:any){
    console.log("여기는 테이블"+props.data);
    return(
        <div>
            <td>{props.data.seq}</td>
            <td>{props.data.title}</td>
            <td>{props.data.date}</td>
        </div>
    )
}

export default Table;