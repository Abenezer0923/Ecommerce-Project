import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/User.js';

const chaked = asyncHandler(async (req, res, next) => {
    let token

    token = req.cookies.jwt

    if(token) {
        try {
            const decode = jwt.verify(token, process.env.JWT);
            req.user = await User.findById(decode.userId).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
      }
})

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error('Not authorized as an admin');
    }
  };
export {chaked, admin};  