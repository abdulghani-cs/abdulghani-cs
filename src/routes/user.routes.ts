import express from 'express';
import {
  getUsers,
  signup,
  login,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/user.controller';

const router = express.Router();

// User routes
router.get('/', getUsers); // Get all users
router.post('/signup', signup); // User signup
router.post('/login', login); // User login
router.get('/:id', getUserById); // Get user by ID
router.put('/:id', updateUser); // Update user
router.delete('/:id', deleteUser); // Delete user

export default router;
