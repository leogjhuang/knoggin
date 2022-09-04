import { model, Schema, Document } from "mongoose";

export interface IUso extends Document {
  reactionTimes: number[]; // in milliseconds
  totalTime: number; // in seconds
  totalCorrect: number;
}

const UsoSchema: Schema = new Schema({
  reactionTimes: {
    type: [Number],
    required: true,
    default: []
  },
  totalTime: {
    type: Number,
    required: true,
    default: 0
  },
  totalCorrect: {
    type: Number,
    required: true,
    default: 0
  }
});

export default model<IUso>("Uso", UsoSchema);
