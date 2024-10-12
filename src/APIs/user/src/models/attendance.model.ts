import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  date: Date;
  checkInTime: Date;
  checkOutTime?: Date;
}

const AttendanceSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  checkInTime: { type: Date, required: true },
  checkOutTime: { type: Date }
});

const Attendance = mongoose.model<IAttendance>('Attendance', AttendanceSchema);
export default Attendance;
