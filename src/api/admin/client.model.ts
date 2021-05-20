import * as mongoose from "mongoose";
// Define collection and schema
export interface IClients extends mongoose.Document {
clientName : string,
agencyName: string,
numberOfVisas:  string,
waqalaNum: string,
country: string
}
 const ClientsSchema = new mongoose.Schema({
  clientName: {
        type: String,
        required: true
  },
  agencyName: {
    type: String,
    required: true
  },
  numberOfVisas: {
    type: String,
    required: true
  },
  waqalaNum: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  } 
});

const Client = mongoose.model('Clients', ClientsSchema);
export { Client }