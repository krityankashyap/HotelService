import { Request, Response } from "express";
import { createHotelService } from "../service/hotel.service";

export const createHotelController = async (req: Request , res: Response) => {
  console.log("Controller data: " ,req.body);
  try {
    const hotel = await createHotelService(req.body);
    

    res.status(201).json({
      message: "Hotel created successfully",
      data: hotel,
      success: true
    })
  } catch (error) {
      console.log("error at controller level ", error);
     res.status(500).json({
      msg: "Controller error",
      err: error
     })
  }
  
}