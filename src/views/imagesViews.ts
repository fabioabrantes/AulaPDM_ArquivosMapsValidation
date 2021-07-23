import { Image } from "../entities/Image";

interface ImageResponse{
  id:number;
  url:string;
}
export default {

  handleImage(image:Image):ImageResponse{
    return { 
      id:image.id,
      url:`http://localhost:3000/uploads/${image.path}`
    };
  },
  handleManyImages(images:Image[]):ImageResponse[]{
    return images.map(image => this.handleImage(image));
  }
}