"use strict";

import { rejects } from "assert";
import { resolve } from "path";
import {Board} from "./BoardService";

const db = require("../config/db");

class BoardDao{
    static enroll(board:Board){
        return new Promise((resolve,reject)=>{
            const query:string = "insert into Board(title,content,date,userId) values(?,?,?,?);";
            db.query(query,[board.title,board.content,board.date,board.userId],(err:string)=>{
                if(err) reject(err);
                resolve({success:true});
            });
        });
        
    }

    static list(){
        return new Promise((resolve,reject)=>{
            const query:string = "select * from Board;";
            db.query(query,(err:string,rows:Object)=>{
                if(err){
                    reject("${err}");
                }
                resolve(rows);
            })
        })
    }

    static read(seq:number){
        return new Promise((resolve,reject)=>{
            const query:string = "select * from Board where seq = ?;";
            db.query(query,[seq],(err:string,row:object)=>{
                if(err) reject(err);
                resolve(row);
            })
        })
    }
}

module.exports = BoardDao;