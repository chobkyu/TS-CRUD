"use strict";
import express,{Express,Request,Response} from 'express';

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
        return res.json(response);
    },

    register : async (req:Request, res:Response) =>{
        const user = new User(req.body);
        const response = await user.register();
        
        return res.json(response);
    },

    write : async (req:Request, res:Response) => {
        const board = new Board(req.body);
        const response = await board.insertBoard();
        console.log(response);
        return res.json(response);
        
    }

}
module.exports = {
    output,
    
    process,
};



