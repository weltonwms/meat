import {Request, Response} from 'express';
import * as jwt from "jsonwebtoken";
import {apiConfig} from './api.config';

export const handleAuthorization=(req:Request, resp:Response, next)=>{
    let token= extractToken(req);
    if(!token){
        resp.setHeader('WWW-AUTHORIZATION','Bearer token_type=jwt');
        resp.status(401).json({message:"É necessário enviar o token"})
    }
    else{
        
        jwt.verify(token,apiConfig.secret,(erro, decode)=>{
           if(decode){
               next();
           }
           else{
                resp.status(403).json({message:"Token Inválido"});
           }
            
        })
    }
}

function extractToken(req:Request){
    let token=undefined;
    let auth:string= (req.headers && req.headers.authorization)? req.headers.authorization.toString():'';
    let partsAuth:Array<string>= auth.split(' ');
    if(partsAuth.length>1 && partsAuth[0]==="Bearer"){
        token=partsAuth[1];
    }
    return token;
}