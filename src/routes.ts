
import {UserController} from './api/user/user.controller';
import {arrayController} from './api/array.controller'
export class RegisterRouteClass {
    public RegisterRoutes(app: any) {
        app.post('/filter/byId', arrayController.filterById);
        app.post('/reduce', arrayController.reduceArray);
        app.post('/user', UserController.findAll);
        // you have to pass id as http://localhost.com/getUser?id=23
        app.get('/getUser', UserController.findOne);
        // you have to pass id as http://localhost.com/getUser/23
        app.get('/getUser/:id', UserController.findOne);
    }

}
