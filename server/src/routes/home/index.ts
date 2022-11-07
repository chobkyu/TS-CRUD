import express,{Express,Request,Response} from 'express';

const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/',ctrl.output.home);

router.post('/login',ctrl.process.login);

router.post('/register',ctrl.process.register);

router.post('/write',ctrl.process.write);

router.post('/read', ctrl.process.read);

router.post('/search',ctrl.process.search);

router.post('/modify', ctrl.process.modify);

router.post('/insertComment', ctrl.process.insertComment);

router.post('/deleteComment', ctrl.process.deleteComment);

router.post('/viewComment', ctrl.process.viewComment)

module.exports = router;