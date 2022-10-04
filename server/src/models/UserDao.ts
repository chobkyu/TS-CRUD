"use strict";

import { rejects } from "assert";
import { resolve } from "path";
import { userInfo } from "./UserService";

const db = require("../config/db");

class UserDao{
    static getUserInfo(id:string){
        return new Promise((resolve,reject) => {
            const query:string = "SELECT * FROM users where id =?;";
            db.query(query,[id], (err: any, data:any[])=>{
                if(err) reject("${err}");
                resolve(data[0]);
            });
        })
    }

    static insertUserInfo(userInfo:userInfo){
        return new Promise((resolve,reject)=>{
            const query:string = "insert into users(userId,userPw,userName,userNickname) values(?,?,?,?)";
            db.query(query,[userInfo.userId,userInfo.userPw,userInfo.userName,userInfo.userNickname],(err:string)=>{
                if(err) reject("${err}");
                resolve({success:true});
            })
        })
    }
}

module.exports = UserDao;