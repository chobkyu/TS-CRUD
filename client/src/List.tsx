import React, { useEffect } from "react";

function List(props:any){
    useEffect(()=>{
        console.log(props);
    },[])
    console.log("props : "+ props)
    return(
        <div>
            hi
        </div>
    )
}

export default List;