
  
import { Request, Response } from 'express';
import { ApplyJobs } from './applyjobs.model';



export class JobController {
 
  public static async save (req: Request, res: Response): Promise<any> {
    try {
      const _request = req.body;
      const _file = req.body
        const job = await ApplyJobs.create(_request);
        console.log("APPLYJobs POST >>>>>", req.body);
        if (!job) {
          return res.status(404).send({
            success: false,
            message: 'Invalid Request',
            data: null
          });
        }
        res.status(200).send({
          success: true,
          data: job
        });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
  public static async getFiles (req: Request, res: Response): Promise<any> {
    try {
        const job = await ApplyJobs.find();
        if (!job) {
          return res.status(404).send({
            success: false,
            message: 'Invalid Request',
            data: null
          });
        }
      res.status(200).send({
        success: true,
        data: job
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}

