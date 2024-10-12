import express, { Request, Response } from 'express';
import { createTeam, getTeams } from '../controllers/team.controller';

const router = express.Router();

// Route to create a new team
router.post('/', createTeam);

// Route to get all teams
router.get('/', getTeams);

export default router;
