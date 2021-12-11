import express from 'express'

import { 
    getUserByAccount, validate
} from '../controllers/User.js';

const routerAuth = express.Router()


routerAuth.use(validate)

routerAuth.post('/', getUserByAccount); 

export default routerAuth;