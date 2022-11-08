import React from 'react';
import {comment} from '../interface/comment';

function Comment(prop:any){
    return(
        <div className="reple">
            <span>{prop.data.userId}</span>
            <input type='text' className='commentList' disabled value={prop.data.comment}/>
        </div>
    )
}

export default Comment;