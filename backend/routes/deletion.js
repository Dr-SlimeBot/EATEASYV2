
import express from 'express'
import { deleteUser } from '../controllers/delete.js';

const router=express.Router()

router.delete('/',deleteUser);
export default router;