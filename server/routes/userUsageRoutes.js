import express from 'express';
import { sendUserUsage } from '../controllers/userUsageController.js';
const userUsageRouter = express.Router();

userUsageRouter.post('/', sendUserUsage);

export default userUsageRouter;
