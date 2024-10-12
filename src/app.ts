import express from 'express';
import reportRoutes from './routes/report.routes';
import teamRoutes from './routes/team.routes';
import attendanceRoutes from './routes/attendance.routes';

const app = express();

app.use(express.json());
app.use('/api/reports', reportRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/attendance', attendanceRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


