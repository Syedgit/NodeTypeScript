
import {UserController} from './api/user/user.controller';
import {arrayController} from './api/array.controller';
import { AdminController} from './api/admin/admin.controller';
import { JobController } from './api/jobs/jobs.controller';
export class RegisterRouteClass {
    public RegisterRoutes(app: any) {
        // ArrayController
        app.post('/filter/byId', arrayController.filterById);
        app.post('/reduce', arrayController.reduceArray);
        app.post('/map', arrayController.mapData)
        //userController
        app.get('/user', UserController.findAll);
        app.post('/users/authenticate', UserController.findOne);
        app.post('/register', UserController.save);
        app.post('/api/saveClients', AdminController.save);
        // you have to pass id as http://localhost.com/getUser?id=23
        app.get('/getUser', UserController.findOne);
        app.get('/api/resumeFiles', JobController.getFiles)
        // you have to pass id as http://localhost.com/getUser/23
        app.get('/getUser/:id', UserController.findOne);
        app.get('/getClients' , AdminController.findAllClients);
        app.get('/api/getJobs' , AdminController.findAllJobs);
        app.post('/api/saveContacts', AdminController.saveAddContacts);
        app.post('/api/applyJob', JobController.save);

    }

}
