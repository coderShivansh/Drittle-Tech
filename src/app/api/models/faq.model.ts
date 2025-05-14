import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFaq extends Document {
  title: string;
  description: string;
}

const faqSchema: Schema<IFaq> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Faq: Model<IFaq> =
  mongoose.models.Faq || mongoose.model<IFaq>("Faq", faqSchema);
