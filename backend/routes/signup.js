
import express from 'express'
import { AddUser } from '../controllers/AddUser.js';

const router=express.Router()

router.post('/',AddUser);
export default router;