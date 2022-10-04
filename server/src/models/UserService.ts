"use strict";

const UserDao = require("./UserDao");

class UserService{
    body: any;  //나중에 타입 수정 예정
    constructor(body:any){
        this.body = body;
    }

    async login(){
        const client:any = this.body;
        const user:any = await UserDao.getUserInfo(client.id);
        try{
            if(user){
                if(user.id===client.id && user.pw === client.pw){
                    return {success:true};
                }
                return {success : false, msg:"비밀번호가 틀렸습니다"};
            }
            return {success : false, msg:"존재하지 않는 아이디입니다"};
        }catch(err){
            return {success:false,msg:err};
        }
    }
}

module.exports = UserService;