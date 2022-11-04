"use strict";
import express,{Express,Request,Response} from 'express';
const session = require("express-session");
const User = require("../../models/UserService");
const Board = require("../../models/BoardService");

const output = { 
    home: async (req:Request, res:Response) => {
        console.log("welcome home");
        const board = new Board();
        const rows = await board.listBoard();
       
        return res.json(rows);
    },
}

const process = {
    login : async (req:Request, res:Response) => {
        const user = new User(req.body);
        const response = await user.login();
        console.log(response);
        if(response.success){
            //세션 부분 추가해야됨
            session.userId = req.body.id;
        }
        return res.json(response);
    },

    register : async (req:Request, res:Response) =>{
        const user = new User(req.body);
        const response = await user.register();
        
        return res.json(response);
    },

    write : async (req:Request, res:Response) => {
        //console.log(sessionStorage.userId)
        const board = new Board(req.body);
        const response = await board.insertBoard();
        console.log(response);
        return res.json(response);
        
    },

    read : async (req:Request, res:Response) => {
        const seq = req.body.seq;
        console.log(seq);
        const board = new Board(req.body);
        const response = await board.readBoard(seq);
        console.log(response);
        return res.json(response);
    },

    search : async (req:Request, res:Response) => {
        const title = req.body.title;
        console.log(title);
        const board = new Board(req.body);
        const rows = await board.searchBoard(title);
        console.log(rows);
        return res.json(rows);
    },


    modify : async (req:Request, res:Response) => {
        console.log(req.body);
        const board = new Board(req.body);
        const row = await board.modify();
        return res.json(row);
    }

}
module.exports = {
    output,
    process,
};



