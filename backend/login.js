
import express from 'express'
import { Authenticate } from '../controllers/Authenticate.js';

const router=express.Router()

router.post('/',Authenticate);
export default router;