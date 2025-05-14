import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOpening extends Document {
  title: string;
  description?: string;
  level: string;
  salary?: number;
  isExpire?: boolean;
  jobId: string;
}

const openingSchema: Schema<IOpening> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  level: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  isExpire: {
    type: Boolean,
  },
  jobId: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Opening: Model<IOpening> =
  mongoose.models.Opening || mongoose.model<IOpening>("Opening", openingSchema);
