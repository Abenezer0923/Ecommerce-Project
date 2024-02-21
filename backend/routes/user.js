import express from 'express';
import {registerUser, getUsers} from '../controller/user.js';
import { chaked, admin } from '../middleware/authHandler.js';

const router = express.Router();

router.route('/').post(registerUser).get(chaked, admin, getUsers);

export default router;
