import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  fullName: string;
  email: string;
  message: string;
}

const contactSchema: Schema<IContact> = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);
