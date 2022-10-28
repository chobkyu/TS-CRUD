"use strict";

import { rejects } from "assert";
import { resolve } from "path";
import { userInfo } from "../interface/userInfo";

const db = require("../config/db");

class UserDao{
    static getUserInfo(id:string){
        return new Promise((resolve,reject) => {
            console.log(id);
            const query:string = "SELECT * FROM users where userId =?;";
            db.query(query,[id], (err: any, data:object[])=>{
                if(err) reject("${err}");
                console.log(data);
                resolve(data[0]);
            });
        })
    }

    static insertUserInfo(userInfo:userInfo){
        return new Promise((resolve,reject)=>{
            const query:string = "insert into users(userId,userPw,userName,userNickname) values(?,?,?,?)";
            db.query(query,[userInfo.userId,userInfo.userPw,userInfo.userName,userInfo.userNickname],(err:string)=>{
                if(err) reject(err);
                resolve({success:true});
            })
        })
    }
}

module.exports = UserDao;