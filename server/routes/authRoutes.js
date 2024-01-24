import express from 'express';
import { authControllers } from '../controllers/authControllers.js';

export const authRouters = express.Router();

authRouters.post('/register', authControllers.registerContestant);
authRouters.post('/register/verify', authControllers.verifyRegistration);

authRouters.post('/login', authControllers.loginContestant);
