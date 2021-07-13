import * as mongoose from "mongoose";
// Define collection and schema
export interface IJobs extends mongoose.Document {
  jobName : string,
  salary: string,
  skills:  string,
  experience: string,
  country: string
}
 const JobsSchema = new mongoose.Schema({
  jobName: {
        type: String,
        required: true
  },
  salary: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  } 
});

const Jobs = mongoose.model('Jobs', JobsSchema);
export { Jobs }