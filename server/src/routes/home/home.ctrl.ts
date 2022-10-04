"use strict";
import express,{Express,Request,Response} from 'express';

const User = require("../../models/UserService");

const output = { 
    home: (req:Request, res:Response) => {
        
        
        res.send("hi guys");
    },
}

const process = {
    

}
module.exports = {
    output,
    
    process,
};



