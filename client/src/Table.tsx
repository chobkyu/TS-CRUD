import React, { useEffect } from "react";

function Table(props:any){
    console.log(props);
    return(
        <div>
            <td>{props.data.seq}</td>
            <td>{props.data.title}</td>
            <td>{props.data.date}</td>
        </div>
    )
}

export default Table;