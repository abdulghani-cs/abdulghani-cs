import { Request, Response } from 'express';
import Attendance from '../models/attendance.model';

// Check-in function
export const checkIn = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.body;

  try {
    const today = new Date().toISOString().split('T')[0];
    const existingRecord = await Attendance.findOne({ userId, date: today });

    if (existingRecord) {
      res.status(400).json({ message: 'User already checked in today' });
      return;
    }

    const checkInTime = new Date();
    const attendance = new Attendance({ userId, date: today, checkInTime });
    await attendance.save();

    res.status(201).json({ message: 'Check-in successful', attendance });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Server error' });
  }
};

// Check-out function
export const checkOut = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.body;

  try {
    const today = new Date().toISOString().split('T')[0];
    const record = await Attendance.findOne({ userId, date: today });

    if (!record || record.checkOutTime) {
      res.status(400).json({ message: 'User not checked in or already checked out' });
      return;
    }

    record.checkOutTime = new Date();
    await record.save();

    res.status(200).json({ message: 'Check-out successful', record });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Server error' });
  }
};
