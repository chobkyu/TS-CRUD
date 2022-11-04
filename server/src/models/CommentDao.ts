"use strict";

import { Comment } from "../interface/Comment";
const db = require("../config/db");


class CommentDao{
    static insertComment(comment:Comment){
        return new Promise((resolve,reject) => {
            const query:string = "insert into comment(comment,date,seq) values(?,?,?);";
            db.query(query,[comment.comment,comment.date,comment.seq],(err:string)=>{
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