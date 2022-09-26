import express,{Express,Request,Response} from 'express';

const app:Express = express();
const port = 5000;

app.get('/',(req:Request, res:Response)=>{
    res.send('hihihi');
});

app.listen(port, ()=>{
    console.log('서버 가동');
});