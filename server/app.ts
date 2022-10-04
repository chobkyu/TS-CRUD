import express,{Express,Request,Response} from 'express';

const app:Express = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');

const home = require("./src/routes/home");



app.use(express.static(__dirname+'/src/public'));
app.use(express.json());
//url을 통해 전달되는 테이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.use("/",home);



module.exports = app;