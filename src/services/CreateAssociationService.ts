import {getCustomRepository} from "typeorm";

import {AssociationRepository} from '../repositories/AssociationRepository';
import {Association} from "../entities/Association";
import {AssociationRequest} from "../dto/AssociationRequest";

import {associationValidation} from '../utils/associationValidation';
import { AppErrors } from "../errors/AppErros";

class CreateAssociationService{
  
  async execute(associationParams:AssociationRequest): Promise<Association>{

    const associationRepository  = getCustomRepository(AssociationRepository);
   
    // validando os campos
    await associationValidation(associationParams);
    // regra de negócio : não é permitdio cadastrar associação com mesmo nome
    const {name} = associationParams;
    const associationExists = await associationRepository.findAssociationByName(name)
    if(associationExists){
      throw new AppErrors("Error: Association exists",400);
    }
    const association = await associationRepository.createAssociation(associationParams);
    

    return association;
  }
}
export {CreateAssociationService}