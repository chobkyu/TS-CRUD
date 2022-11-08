import React, { useEffect } from "react";
import Table from "./Table";
import '../css/Table.css';
function List(props:any){
    useEffect(()=>{
        
        
    },[])
    
    return(
        <div>
            <table>
                <thead>
                    <th>seq</th>
                    <th>title</th>
                    <th>userId</th>
                    <th>date</th>
                </thead>
            
                <tbody>
                    
                    {props.datas&&props.datas.map((data:any) => (
                        <Table
                            data={data}
                        />
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default List;