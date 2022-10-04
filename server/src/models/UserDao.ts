"use strict";

import { resolve } from "path";

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
}

module.exports = UserDao;