import express from 'express';
import { checkIn, checkOut } from '../controllers/attendance.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/checkin', authMiddleware, checkIn);
router.post('/checkout', authMiddleware, checkOut);

export default router;


