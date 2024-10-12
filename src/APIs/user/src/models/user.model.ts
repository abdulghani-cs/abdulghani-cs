import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'employee';
  team?: mongoose.Schema.Types.ObjectId;
  isDeleted: boolean;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'employee'], default: 'employee' },
  team: { type: Schema.Types.ObjectId, ref: 'Team', default: null },
  isDeleted: { type: Boolean, default: false }
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
