import express, { Request, Response } from 'express';
import { generateReport, getReports } from '../controllers/report.controller';

const router = express.Router();

// Route to generate a report
router.post('/generate', generateReport);

// Route to get all reports
router.get('/', getReports);

export default router;
