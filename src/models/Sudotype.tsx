import { model, Schema, Document } from "mongoose";

export interface ISudotype extends Document {
  charactersPerMinute: number;
  wordsPerMinute: number;
  accuracy: number; // in %
  totalTime: number; // in seconds
  totalCorrect: number;
}

const SudotypeSchema: Schema = new Schema({
  charactersPerMinute: {
    type: Number,
    required: true,
    default: 0
  },
  wordsPerMinute: {
    type: Number,
    required: true,
    default: 0
  },
  accuracy: {
    type: Number,
    required: true,
    default: 0
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

export default model<ISudotype>("Sudotype", SudotypeSchema);
