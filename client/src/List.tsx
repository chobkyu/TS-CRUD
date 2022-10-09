import React, { useEffect } from "react";
import Table from "./Table";

function List(props:any){
    useEffect(()=>{
        console.log("List : " +props.datas[0]);
    },[])
    
    return(
        <div>
            <table>
                <thead>
                    <th>seq</th>
                    <th>title</th>
                    <th>date</th>
                </thead>
            </table>
            <tbody>
                <tr>
                {props.datas.map((data:any) => (
                    <Table
                        data={data}
                    />
                ))}
                </tr>
            </tbody>
            
        </div>
    )
}

export default List;