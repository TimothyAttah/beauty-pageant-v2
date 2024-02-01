import express from 'express';
import { contestantController } from '../controllers/contestantControllers.js';

export const contestantRoutes = express.Router();

contestantRoutes.get('/', contestantController.getAllContestant);
contestantRoutes.get('/:id', contestantController.getOneContestant);
