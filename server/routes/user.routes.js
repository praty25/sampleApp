import { Router } from 'express';
import * as UserController from '../controllers/users.controller';
const router = new Router();

router.route('/userRegistration').post(UserController.createUser);

router.route('/userAuthentication').post(UserController.checkUser);

	export default router;