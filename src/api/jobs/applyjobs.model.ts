import * as mongoose from "mongoose";
// Define collection and schema
// export interface IApplyJobs extends mongoose.Document {
//   jobTitle : string,
//   name: string,
//   address:  string,
//   city: string,
//   province: string,
//   email: string,
//   phone: string,
//   skills: string
// }

 const ApplyJobsSchema = new mongoose.Schema({
  jobTitle: {
        type: String,
        required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  province: {
    type: String
  },
  email: {
    type: String,
    required: true
  }, 
  phone: {
    type: String,
    required: true
  },
  skills: {
    type: String
  },
  experience: {
    type: String
  },
  file: { 
    data: Buffer,
    contentType: String
  }

});

const ApplyJobs = mongoose.model('AppliedJobs', ApplyJobsSchema);
export { ApplyJobs }