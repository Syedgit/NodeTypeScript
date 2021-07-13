import * as mongoose from "mongoose";
// Define collection and schema
export interface IClients extends mongoose.Document {
name : string,
address: string,
city:  string,
province: string,
email: string
phone: string
}
 const AddContactsSchema = new mongoose.Schema({
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
  },
  province: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: true
  }
});

const addContacts = mongoose.model('addContacts', AddContactsSchema);
export { addContacts }