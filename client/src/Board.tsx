import React,{useEffect} from 'react';
import axios from 'axios';

import {board} from './Write';

export interface boardList extends board{
    seq:number,
    date:string,
}

function Board(){
    
    const arr = new Array<boardList>();
    const arrData = new Array();

    const test = async () => {
        const rows = await axios.get('http://localhost:5000/');
        console.log(rows.data);
        
        
    }
    useEffect(()=>{  //이거 두 번 실행되는 이슈 있음
        
        console.log("이게 왜 두번 실행?")
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