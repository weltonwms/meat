import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import {User} from "./user";
import {apiConfig} from './api.config';

export const handleAuthentication=(req:Request, resp:Response)=>{
    
    const userRequest: User= req.body;
    const userDb : User= User.getUser(userRequest.email);
    if(userDb && userDb.matches(userRequest)){
        //resp.send('usuario autorizados')
        
        const token = jwt.sign({ sub: userDb.email, iss: "meat-api" }, apiConfig.secret);
        resp.json({ message: "ok", acessToken: token, name:userDb.name, email:userDb.email });
       
    }
    else{
       resp.status(403).json({message:'usuario/senha invalidos'})
    }
    
    
}