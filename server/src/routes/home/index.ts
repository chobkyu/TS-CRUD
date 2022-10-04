import express,{Express,Request,Response} from 'express';

const router = express.Router();

const ctrl = require("./home.ctrl");

router.use('/',ctrl.output.home);

router.use('/login',ctrl.process.login);

router.use('/register',ctrl.process.register);

module.exports = router;