import * as mongoose from "mongoose";
// Define collection and schema
export interface IUser extends mongoose.Document {
  firstName: string,
  lastName: string,
  userName: string 
  password: string 
}
 const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
      },
    lastName: {
        type: String,
        required: true
      },
   userName: {
    type: String,
    required: true
  },
   password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);
export { User }