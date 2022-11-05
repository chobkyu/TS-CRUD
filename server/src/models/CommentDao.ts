"use strict";

import { Comment } from "../interface/Comment";
const db = require("../config/db");


class CommentDao{
    static insertComment(Comment:Comment){
        console.log(Comment);
        return new Promise((resolve,reject) => {
            const query:string = "insert into comment(comment,date,seq) values(?,?,?);";
            db.query(query,[Comment.comment,Comment.date,Comment.seq],(err:string)=>{
                if(err) reject(err);
                resolve({success:true});
            })
        })
    }

    static deleteComment(seq:number){
        return new Promise((resolve,reject) => {
            const query:string = "delete from comment where seq = ?;";
            db.query(query,[seq],(err:string) => {
                if(err) reject(err);
                resolve({success:true});
            })
        })
    }
}

module.exports = CommentDao;