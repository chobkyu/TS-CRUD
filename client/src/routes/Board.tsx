import React,{useEffect, useState} from 'react';
import axios from 'axios';
import List from '../components/List';
import {board} from './Write';
import { response } from 'express';

export interface boardList extends board{
    seq:number,
    date:string,
    userId:string
}

function Board(){
    /*
    
    const [boardData, setBoardData] = useState([]);
    const board = async() =>{
        const response = async () => await axios.get('http://localhost:5000/');
        const json = await response; 
        console.log(json);
        //setBoardData([...boardData,response]);
        setLoading(false);
        console.log(boardData);
    }
    useEffect(()=>{  //이거 두 번 실행되는 이슈 있음
        
        console.log("이게 왜 두번 실행?")
        board();
    },[])
    const arr = new Array<boardList>();
    const arrData = new Array();
*/
    const [loading, setLoading] = useState(true);
    const [arrData,setArrData] = useState<boardList[]>([]);
    const test = async () => {
        const rows = await axios.get('http://localhost:5000/');
        //console.log(rows.data);
        
            console.log(arrData.length)
            let i :number = 0;
            for(i;i<rows.data.length;i++){
                const data:boardList = {
                    seq : rows.data[i].seq,
                    title : rows.data[i].title,
                    content : rows.data[i].content,
                    userId : rows.data[i].userId,
                    date : rows.data[i].date,
                }
                //console.log(data);
                setArrData(arrData => [...arrData, data]);
                //console.log("arrDate : "+arrData);
            }           
        //setArrData(rows);
        console.log("arrDate : "+arrData);
        setLoading(false);
    }
    
    useEffect(()=>{  //이거 두 번 실행되는 이슈 있음
        console.log("이게 왜 두번 실행?")
        if(arrData){
            test(); 
        }
        
    },[])
    
    if(!{setLoading}){
        console.log("test: "+ arrData);
    }
    return(
        <div>
            <div className = "search-box">
                <input type="text" id="search"/>
                <button className="btn-search">검색하기</button>
            </div>

            
            {loading ? <strong>Loading...</strong>: 
                <div>
                    <List 
                        datas={arrData}
                    />
                </div>}
        </div>
    )
}

export default Board;