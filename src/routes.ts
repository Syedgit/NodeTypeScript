
import {UserController} from './api/user/user.controller';
export class RegisterRouteClass {
    public RegisterRoutes(app: any) {
        app.post('/user', UserController.findAll);
        // you have to pass id as http://localhost.com/getUser?id=23
        app.get('/getUser', UserController.findOne);
        // you have to pass id as http://localhost.com/getUser/23
        app.get('/getUser/:id', UserController.findOne);
    }

}
