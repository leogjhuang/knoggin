import { model, Schema, Document } from "mongoose";
import { IStroop } from "./Stroop";
import { ISudotype } from "./Sudotype";
import { IUso } from "./Uso";


export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  stroopSessions: IStroop[];
  sudotypeSessions: ISudotype[];
  usoSessions: IUso[];
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  stroopSessions: [{
    type: Schema.Types.ObjectId,
    ref: "Stroop",
    default: []
  }],
  sudotypeSessions: [{
    type: Schema.Types.ObjectId,
    ref: "Sudotype",
    default: []
  }],
  usoSessions: [{
    type: Schema.Types.ObjectId,
    ref: "Uso",
    default: []
  }]
});

export default model<IUser>("User", UserSchema);
