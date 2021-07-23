import * as Yup from 'yup';
import {ValidationError} from 'yup';

import {AssociationRequest} from "../dto/AssociationRequest";
export async function associationValidation(objectAssociation:AssociationRequest){

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    latitude: Yup.number().required("latitude é obrigatório"),
    longitude: Yup.number().required(),
    about: Yup.string().required().max(300),
    instructions: Yup.string().required(),
    opening_hours: Yup.string().required(),
    open_on_weekends: Yup.boolean().required(),
    images: Yup.array( 
      Yup.object().shape({
        path: Yup.string().required(),
      })
    ),
  });

  try{
    await schema.validate(objectAssociation, {abortEarly:false});
  }catch(error){
    throw new ValidationError(error);
  }
}