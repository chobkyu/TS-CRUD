"use strict";
import express,{Express,Request,Response} from 'express';

const User = require("../../models/UserService");

const output = { 
    home: (req:Request, res:Response) => {
        
        
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
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }

}
module.exports = {
    output,
    
    process,
};



