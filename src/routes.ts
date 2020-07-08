
import {UserController} from './api/user/user.controller';
import {arrayController} from './api/array.controller'
export class RegisterRouteClass {
    public RegisterRoutes(app: any) {
        // ArrayController
        app.post('/filter/byId', arrayController.filterById);
        app.post('/reduce', arrayController.reduceArray);
        app.post('/map', arrayController.mapData)
        //userController
        app.post('/user', UserController.findAll);
        app.post('/users/authenticate', UserController.findOne);
        app.post('/register', UserController.save);
        // you have to pass id as http://localhost.com/getUser?id=23
        app.get('/getUser', UserController.findOne);
        // you have to pass id as http://localhost.com/getUser/23
        app.get('/getUser/:id', UserController.findOne);
    }

}
