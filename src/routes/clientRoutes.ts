import express from 'express';
import {newClient}  from '../useCases/client/createClient';

const clientRoutes = express.Router();

clientRoutes.post("/newUser",(request,response)=>{

    return newClient.handle(request,response);
});

export {clientRoutes}