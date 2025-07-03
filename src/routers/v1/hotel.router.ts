import express, { Router, Request, Response } from 'express';
import { createHotelController } from '../../controllers/hotel.controllers';

const hotelRouter: Router = express.Router();

hotelRouter.post('/', createHotelController);

hotelRouter.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

export default hotelRouter;