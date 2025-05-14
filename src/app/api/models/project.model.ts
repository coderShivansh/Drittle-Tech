import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description?: string;
  liveUrl: string;
  imageUrl?: string;
  points?: string[];
}

const projectSchema: Schema<IProject> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    liveUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    points: {
      type: [String],
    },
  },
  { timestamps: true }
);

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);
