"use strict";

import { Board } from "../interface/Board";

const BoardDao = require("./BoardDao");



class BoardService{
    body: Board;
    constructor(body:Board){
        this.body = body;
       
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

    async readBoard(seq:number){
        try{
            const row = await BoardDao.read(seq);
            return row;
        }catch(err){
            return {success : false, msg : err};
        }
    }

    async searchBoard(text:String){
        const key = text;
        try{
            const rows = await BoardDao.search(key);
            return rows;
        } catch(err){
            return {success : false, msg :err};
        }
    }

    async modify(){
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
            const response = await BoardDao.modify(board);
            return response;
        }catch(err){
            return {success : false, msg : err};
        }
    }
}

module.exports = BoardService;