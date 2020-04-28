
  
import { Request, Response } from 'express';

export class UserController {
  public static async findAll (req: Request, res: Response): Promise<any>  {
    try {
      // const users = await User.find();
      // if (!users) {
      //   return res.status(404).send({
      //     success: false,
      //     message: 'Users not found',
      //     data: null
      //   });
      // }
      const users : any = { test: "hello world"};
      res.status(200).send({
        success: true,
        data: users
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public static async findOne (req: Request, res: Response): Promise<any> {
    console.log(req.query.id);
    console.log(req.params.id);
    try {
      // const user = await User.findById(req.params.id, { password: 0 });
      const user = [{id: 123, name: "john"}];
      if (!user) {
        return res.status(404).send({
          success: false,
          message: 'User not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: user
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  // public update = async (req: Request, res: Response): Promise<any> => {
  //   const { name, lastName, email, password } = req.body;
  //   try {
  //     const userUpdated = await User.findByIdAndUpdate(
  //       req.params.id,
  //       {
  //         $set: {
  //           name,
  //           lastName,
  //           email,
  //           password
  //         }
  //       },
  //       { new: true }
  //     );
  //     if (!userUpdated) {
  //       return res.status(404).send({
  //         success: false,
  //         message: 'User not found',
  //         data: null
  //       });
  //     }
  //     res.status(200).send({
  //       success: true,
  //       data: userUpdated
  //     });
  //   } catch (err) {
  //     res.status(500).send({
  //       success: false,
  //       message: err.toString(),
  //       data: null
  //     });
  //   }
  // };

  // public remove = async (req: Request, res: Response): Promise<any> => {
  //   try {
  //     const user = await User.findByIdAndRemove(req.params.id);

  //     if (!user) {
  //       return res.status(404).send({
  //         success: false,
  //         message: 'User not found',
  //         data: null
  //       });
  //     }
  //     res.status(204).send();
  //   } catch (err) {
  //     res.status(500).send({
  //       success: false,
  //       message: err.toString(),
  //       data: null
  //     });
  //   }
  // };
}

