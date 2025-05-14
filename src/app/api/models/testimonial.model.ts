import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITestimonial extends Document {
  firstName: string;
  lastName?: string;
  review: string;
  approved?: boolean;
}

const testimonialSchema: Schema<ITestimonial> = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  review: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

export const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial ||
  mongoose.model<ITestimonial>("Testimonial", testimonialSchema);
