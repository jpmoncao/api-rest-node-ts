import dotenv from 'dotenv';
import express from 'express';

import UserRouter from './router/UserRouter.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/user', new UserRouter().router);

app.listen(process.env.API_PORT,
    () => console.log(`Server ping!\nRunning in port ${process.env.API_PORT}`)); 
