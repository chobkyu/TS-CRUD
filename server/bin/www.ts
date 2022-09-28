"use strict";
import express,{Express,Request,Response} from 'express';
import { env } from 'process';
const app = require("../app");
const PORT:number= 5000;

app.listen(PORT, ()=>{
    console.log('서버 가동');
});