import "reflect-metadata";
import express from "express";
import path from 'path';
import cors from 'cors';
import "express-async-errors";
import "./database";

import { exceptionsHandle } from "./middleware/exceptionsHandle";

import {router} from './routes';

const app = express();

app.use(cors());
app.use(express.json());


app.use(router);

app.use(exceptionsHandle);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3000, ()=>{
  console.log("server online on port 3000");
})