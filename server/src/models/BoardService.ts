"use strict";

const BoardDao = require("./BoardDao");

export interface Board{
    title:string,
    content:string,
    date:string,
    userId:String
}

class BoardService{
    body: Board;
    constructor(body:Board,userId:String){
        this.body = body;
        this.body.userId = userId
    } 
    
    async insertBoard(){
        
        
        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let day = today.getDate();  // 날짜
        let hours = today.getHours(); // 시
        let minutes = today.getMinutes();  // 분
        
        const date:string = year+"/"+month+"/"+ day + " "+ hours+':'+minutes; 
        
        this.body.date = date;

        const board = this.body;

        try{
            const response = await BoardDao.enroll(board);
            return response;
        }catch(err){
            return {success : false, msg : err};
        }
    }

    async listBoard(){
        try{
            const rows = await BoardDao.list();
            return rows;
        }catch(err){
            return {success : false, msg : err};
        }
    }
}

module.exports = BoardService;