import { model, Schema, Document } from "mongoose";

export interface IStroop extends Document {
  reactionTimes: number[]; // in milliseconds
  accuracy: number; // in %
  totalTime: number; // in seconds
  totalCorrect: number;
}

const StroopSchema: Schema = new Schema({
  reactionTimes: {
    type: [Number],
    required: true,
    default: [],
  },
  accuracy: {
    type: Number,
    required: true,
    default: 0,
  },
  totalTime: {
    type: Number,
    required: true,
    default: 0,
  },
  totalCorrect: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default model<IStroop>("Stroop", StroopSchema);
