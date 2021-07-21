import { Request,Response, NextFunction,ErrorRequestHandler } from 'express';

import {AppErrors} from '../errors/AppErros';

interface IValidationErrors{
  [key:string]:string[];
}
export function exceptionsHandle(
  err:Error, 
  req:Request, 
  res:Response, 
  next:NextFunction){

    if(err instanceof AppErrors){
      return res.status(err.statusCode).json({error: err.message});
    }
   
    return res.status(500).json({
      status:"Error",
      message: "Error server internal"});
}