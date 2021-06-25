
  
import { Request, Response } from 'express';
import { Client } from './client.model'


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
  public static async save (req: Request, res: Response): Promise<any> {
    console.log("GOT THE Service working>>>>>>>>>>>>>");
    try {
      console.log("CLIENTS POST >>>>>", req.body);
      const clientData = req.body;
      const client = await Client.create(clientData);
      if (!client) {
        return res.status(404).send({
          success: false,
          message: 'Client not found',
          data: null
        });
      }
      res.json(client);
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}

