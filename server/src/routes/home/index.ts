import express,{Express,Request,Response} from 'express';

const router = express.Router();

const ctrl = require("./home.ctrl");

router.use('/',ctrl.output.home);

module.exports = router;