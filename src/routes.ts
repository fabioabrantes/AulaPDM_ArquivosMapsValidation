import {Router} from 'express';
import multer from "multer";

import uploadConfig from './config/upload';

import {CreateAssociationController} from "./controllers/CreateAssociationController"

const createAssociationController = new CreateAssociationController();

const router = Router();

const upload = multer(uploadConfig);


router.post('/associations',upload.array('images'), createAssociationController.handle)

export {router}
