import React,{useEffect, useState} from 'react';
import axios from 'axios';
import List from './List';
import {board} from './Write';

export interface boardList extends board{
    seq:number,
    date:string,
}

function Board(){
    
    /*const arr = new Array<boardList>();
    const arrData = new Array();*/

    const [arrData,setArrData] = useState<boardList[]>([]);
    const test = async () => {
        const rows = await axios.get('http://localhost:5000/');
        console.log(rows.data);
        if(arrData){
            let i :number = 0;
            for(i;i<rows.data.length;i++){
                const data:boardList = {
                    seq : rows.data[i].seq,
                    title : rows.data[i].title,
                    content : rows.data[i].content,
                    date : rows.data[i].date,
                }
                console.log(data);
                setArrData([...arrData, data]);
            }
            
        }
        console.log("arrDate : "+arrData);
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

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>게시글1</td>
                            <td>artistJay</td>
                            <td>2022-03-19</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>게시글2</td>
                            <td>artistJay</td>
                            <td>2022-03-19</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>게시글2</td>
                            <td>artistJay</td>
                            <td>2022-03-19</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Board;