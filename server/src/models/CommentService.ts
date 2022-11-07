"use strict";

import { Comment } from "../interface/Comment";

const CommentDao = require("./CommentDao");

class CommentService{
    body:Comment;
    constructor(body:Comment){
        this.body = body;
    }

    async insertComment(){
        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let day = today.getDate();  // 날짜
        let hours = today.getHours(); // 시
        let minutes = today.getMinutes();  // 분
        
        const date:string = year+"/"+month+"/"+ day + " "+ hours+':'+minutes; 
        this.body.date = date;

        const comment = this.body;
        console.log(this.body)
        try{
            const response = await CommentDao.insertComment(this.body);
            return response;
        }catch(err){
            console.log(err);
            return {success : false, msg : err};
        }
    }

    async deleteComment(){
        try{
            const response = await CommentDao.deleteComment(this.body.seq);
            return response;
        }catch(err){
            console.log(err);
            return {success : false, msg : err};
        }
    }

    async viewComment(){
        try{
            const rows = await CommentDao.viewComment(this.body.seq);
            return rows;
        }catch(err){
            console.log(err);
            return {success : false, msg : err}
        }
    }
}

module.exports = CommentService;