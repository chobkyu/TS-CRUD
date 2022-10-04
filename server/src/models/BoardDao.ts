"use strict";

import { rejects } from "assert";
import { resolve } from "path";
import {Board} from "./BoardService";

const db = require("../config/db");

class BoardDao{
    static enroll(board:Board){
        return new Promise((resolve,reject)=>{
            const query:string = "insert into Board(title,content,date) values(?,?,?);";
            db.query(query,[board.title,board.content,board.date],(err:string)=>{
                if(err) reject(err);
                resolve({success:true});
            });
        });
        
    }
}

module.exports = BoardDao;