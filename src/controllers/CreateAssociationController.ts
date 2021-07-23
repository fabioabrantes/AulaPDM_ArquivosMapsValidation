import {Request,Response} from 'express';

import {CreateAssociationService} from '../services/CreateAssociationService';

import {AssociationRequest} from '../dto/AssociationRequest'
import associationView from '../views/associationView';

class CreateAssociationController{

  async handle(req:Request,resp:Response):Promise<Response>{
    const createAssociationService = new CreateAssociationService();
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
    const imagesPath = reqImages.map(image =>({path:image.filename}));
    //console.log(imagesPaths);
    //salvar no banco as informações;
   const dataAssociation = {
    name,
    about,
    latitude,
    longitude,
    instructions,
    open_on_weekends,
    opening_hours,
    imagesPath
   }
  const association = await createAssociationService.execute(dataAssociation)

  return resp.status(201).json(associationView.handleAssociation(association));
  }
}

export {CreateAssociationController}