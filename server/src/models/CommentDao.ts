"use strict";

import { Comment } from "../interface/Comment";
const db = require("../config/db");


class CommentDao{
    static insertComment(Comment:Comment){
        console.log(Comment);
        return new Promise((resolve,reject) => {
            const query:String = "insert into comment(comment,date,seq,userId) values(?,?,?,?);";
            db.query(query,[Comment.comment,Comment.date,Comment.seq,Comment.userId],(err:string)=>{
                if(err) reject(err);
                resolve({success:true});
            })
        })
    }

    static deleteComment(seq:number){
        return new Promise((resolve,reject) => {
            const query:String = "delete from comment where seq = ?;";
            db.query(query,[seq],(err:string) => {
                if(err) reject(err);
                resolve({success:true});
            })
        })
    }

    static viewComment(seq:number){
        return new Promise((resolve,reject) => {
            const query:String = "select * from comment where seq =?;";
            db.query(query,[seq],(err:String,rows:object) => {
                if(err) reject(err);
                resolve(rows);
            })
        })
    }
}

module.exports = CommentDao;