"use strict";
import express,{Express,Request,Response} from 'express';

const User = require("../../models/UserService");
const Board = require("../../models/BoardService");

const output = { 
    home: (req:Request, res:Response) => {
        //console.log(req.body)
        
        res.send("hi guys");
    },
}

const process = {
    login : async (req:Request, res:Response) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register : async (req:Request, res:Response) =>{
        console.log(req.body)
        console.log(req.body.userId);
        const user = new User(req.body);
        const response = await user.register();
        console.log(response);
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



