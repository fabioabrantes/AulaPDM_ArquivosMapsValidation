import {Request,Response} from 'express';

import {AssociationRequest} from '../dto/AssociationRequest'
class CreateAssociationController{

  async handle(req:Request,resp:Response):Promise<Response>{
    const {
      name,
      about,
      latitude,
      longitude,
      instructions,
      open_on_weekends,
      opening_hours,
    } = req.body as AssociationRequest;

    const reqImages = req.files as Express.Multer.File[];
    //console.log(reqImages);
    //salvar no banco as informações;
   



    return resp.status(201).json("ok");
  }
}

export {CreateAssociationController}