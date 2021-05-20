import * as mongoose from "mongoose";
import crypto from 'crypto';
const jwt = require('jsonwebtoken');
// Define collection and schema
export interface IUser extends mongoose.Document {
  firstName: string,
  lastName: string,
  userName: string 
  password: string,
  hash: String,
  salt: String,
}
 const UsersSchema = new mongoose.Schema({
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
    },
    hasH: {
    type: String
    }, 
    salt: {
    salt: String
    }
  
});

UsersSchema.methods.setPassword = function(password: any) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UsersSchema.methods.validatePassword = function(password: any) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    userName: this.userName,
    id: this._id,
    exp: parseInt('1000', 10),
  }, 'secret');
}

UsersSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    userName: this.userName,
    token: this.generateJWT(),
  };
};
const User = mongoose.model('Users', UsersSchema);
export { User }