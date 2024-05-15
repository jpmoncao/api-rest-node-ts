import dotenv from 'dotenv';
import express from 'express';
import { UserRouter } from './router/UserRouter.js';
dotenv.config();
var app = express();
app.use(express.json());
app.use('/user', new UserRouter().router);
app.listen(process.env.API_PORT, function () { return console.log("Server ping!\nRunning in port ".concat(process.env.API_PORT)); }); // Ajuste aqui
