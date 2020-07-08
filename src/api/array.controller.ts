
  
import { Request, Response } from 'express';

export class arrayController {
  public static async filterById (req: Request, res: Response): Promise<any>  {
    // sample data that should be pass to url http://localhost:9001/filter/byId/47
    let response: any;
    try {
      const users = [
        { id: 11, name: 'Adam', age: 23, group: 'editor' },
        { id: 47, name: 'John', age: 28, group: 'admin' },
        { id: 85, name: 'William', age: 34, group: 'editor' },
        { id: 97, name: 'Oliver', age: 28, group: 'admin' }
      ]
      if(req.body.id){
        response = users.filter((e: any) => {
          if(req.body.id === e.id) {
            return true;
          }
        }); 
        res.status(200).send({
          success: true,
         data: response
        })
      }
      
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
  public static async reduceArray (req: Request, res: Response): Promise<any>  {
    // sample data that should be pass to url http://localhost:9001/reduce
    try {
      const arr = [
        {id: "47", value: "test1", count: 21},
        {id: "47", value: "test2", count: 87},
        {id: "87", value: "Donald", count: 1},
        {id: "65", value: "Jim", count: 1}
      ];
      // Desired output 
      /*
         "data": [
        {
            "id": "47",
            "data": [
                {
                    "value": "test1",
                    "count": 21
                },
                {
                    "value": "test2",
                    "count": 87
                }
            ]
        },
        {
            "id": "87",
            "data": [
                {
                    "value": "Donald",
                    "count": 1
                }
            ]
        },
        {
            "id": "65",
            "data": [
                {
                    "value": "Jim",
                    "count": 1
                }
            ]
        }
    ]*/
      const result = arr.reduce((acc, d) => {
        const found = acc.find(a => a.id === d.id);
        const value = { value: d.value, count: d.count }; // the element in data property
        if (!found) {
          //acc.push(...value);
          acc.push({id:d.id, data: [value]}) // not found, so need to add data property
        }
        else {
          found.data.push(value) // if found, that means data property exists, so just push new element to found.data.
        }
        return acc;
      }, []);
        res.status(200).send({
          success: true,
         data: result
        })
      
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
  public static async mapData (req: Request, res: Response): Promise<any>  {
    // sample data that should be pass to url http://localhost:9001/map
    try {
      const arr = [{
        id: 1,
        name: 'bill'
      }, {
        id: 2,
        name: 'ted'
      }]
      const result = arr.map(person => ({ value: person.id, text: person.name }));
        res.status(200).send({
          success: true,
         data: result
        })
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}

