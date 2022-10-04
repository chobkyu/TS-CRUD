import React from 'react';

function Board(){
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