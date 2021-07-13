
  
import { Request, Response } from 'express';
import { Client } from './client.model'
import { Jobs } from './jobs.model';
import { addContacts } from './add-contacts.model';


export class AdminController {
  
  public static async findAllClients (req: Request, res: Response): Promise<any>  {
    try {
      const clients = await Client.find();
      console.log("CLIENTSSS>>>>>", clients);
      if (!clients) {
        return res.status(404).send({
          success: false,
          message: 'Clients not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: clients
      });
    
    } catch (err) {
      res.status(500).send({ 
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
  public static async findAllJobs (req: Request, res: Response): Promise<any>  {
    try {
      const jobs = await Jobs.find();
      if (!jobs) {
        return res.status(404).send({
          success: false,
          message: 'Jobs not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: jobs
      });
    
    } catch (err) {
      res.status(500).send({ 
        success: false,
        message: err.toString(),
        data: null
      });
    }
  }
  public static async save (req: Request, res: Response): Promise<any> {
    console.log("GOT THE Service working>>>>>>>>>>>>>", req.body);
    
    let _response: any;
    try {
      const _request = req.body;
      if(_request.selectedOption === "Client") {
        const client = await Client.create(_request);
        console.log("CLIENTS POST >>>>>", req.body);
        if (!client) {
          return res.status(404).send({
            success: false,
            message: 'Client not found',
            data: null
          });
        }
        _response = client;
      }
      if(_request.selectedOption === "Jobs") {
        const job = await Jobs.create(_request);
        console.log("Jobs POST >>>>>", req.body);
        if (!job) {
          return res.status(404).send({
            success: false,
            message: 'Invalid Request',
            data: null
          });
        }
        _response = job;
      }
      res.json(_response);
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
  public static async saveAddContacts (req: Request, res: Response): Promise<any> {
    try {
      const _request = req.body;
      const addedContacts = await addContacts.create(_request);
      console.log("AddContacts POST >>>>>", req.body);
      if (!addedContacts) {
        return res.status(404).send({
          success: false,
          message: 'Invalid Request',
          data: null
        });
      }
      res.json(addedContacts);
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}

