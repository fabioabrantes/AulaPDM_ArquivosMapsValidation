import {Association} from '../entities/Association';
import imagesView from './imagesViews';

export default {

  handleAssociation(association:Association){
    return {
      id:association.id,
      name: association.name,
      latitude: association.latitude,
      longitude: association.longitude,
      about: association.about,
      instructions: association.instructions,
      opening_hours: association.opening_hours,
      open_on_weekends: association.open_on_weekends,
      imagesPath: imagesView.handleManyImages(association.imagesPath)
    }
  },
  hanldeManyAssociations(associations:Association[]){
    return associations.map(association=>this.handleAssociation(association));
  }

}