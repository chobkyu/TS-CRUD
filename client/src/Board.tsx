import React,{useEffect} from 'react';
import axios from 'axios';
function Board(){
    useEffect(()=>{
        async function test(){
            const rows = await axios.get('http://localhost:5000/');
            console.log(rows);
        }
        test();
    },[])
    
    return(
        <div>
            <div className = "search-box">
                <input type="text" id="search"/>
                <button className="btn-search">검색하기</button>
            </div>
        </div>
    )
}

export default Board;