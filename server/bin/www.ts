"use strict";
import express,{Express,Request,Response} from 'express';

const app = require("../app");
const PORT:number=5000;

app.listen(PORT, ()=>{
    console.log('서버 가동');
});