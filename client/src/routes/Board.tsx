import React,{useEffect, useState} from 'react';
import axios from 'axios';
import List from '../components/List';
import {boardList} from '../interface/boardList';




function Board(){

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
    
    useEffect(()=>{  
        
        test(); 
                
    },[])
    
    const [search,setSearch] = useState({title:""});

    const onChange = (e:any) => {
        const {name,value} = e.target;
        setSearch({
            ...search,
            [name] : value
        });
        console.log(search)
    }

    const onClick = async () => {
        setLoading(true);
        const title = search;
        console.log("검색어 : "+ title.title);

        const response = await axios.post('http://localhost:5000/search',{
            title:title.title
        });
        console.log(response.data);
        
        setArrData(response.data);
        console.log(arrData);
        setLoading(false);
    }

    return(
        <div>
            <div className = "search-box">
                <input type="text" name="title" id="search" onChange={onChange}/>
                <button onClick={onClick} className="btn-search">검색하기</button>
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