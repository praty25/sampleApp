import { Router } from 'express';
import * as searchController from '../controllers/search.controller.js';

const router = new Router();

router.route('/searchData').post(searchController.searchData);

export default router