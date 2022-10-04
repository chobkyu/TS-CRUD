"use strict";

const UserDao = require("./UserDao");

export interface userInfo{
    userId:string,
    userPw:string,
    userName:string,
    userNickname:string,
}

class UserService{
    body: userInfo;  //나중에 타입 수정 예정
    constructor(body:userInfo){
        this.body = body;
    }

    async login(){
        const client:userInfo = this.body;
        const user:any = await UserDao.getUserInfo(client.userId);
        try{
            if(user){
                if(user.id===client.userId && user.pw === client.userPw){
                    return {success:true};
                }
                return {success : false, msg:"비밀번호가 틀렸습니다"};
            }
            return {success : false, msg:"존재하지 않는 아이디입니다"};
        }catch(err){
            return {success:false,msg:err};
        }
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserDao.insertUserInfo(client);
            return response;
        }catch (err) {
            return {success : false, msg : err};
        } 
    }
}

module.exports = UserService;