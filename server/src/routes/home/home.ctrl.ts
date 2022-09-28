"use strict";
import express,{Express,Request,Response} from 'express';

const output = { //페이지를 렌더링 해서 보여주는 호출을 묶음
    home: (req:Request, res:Response) => {
        
        
        res.send("hi guys");
    },
}

const process = {

    
}
module.exports = {
    output,
    process,
};



