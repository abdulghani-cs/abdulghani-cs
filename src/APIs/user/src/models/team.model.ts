import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
  teamName: string;
  members: mongoose.Schema.Types.ObjectId[];
}

const TeamSchema: Schema = new Schema({
  teamName: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Team = mongoose.model<ITeam>('Team', TeamSchema);
export default Team;
