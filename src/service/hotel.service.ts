// import { Prisma } from "@prisma/client";
import { createHotelRepositories } from "../repositories/Hotel.repositories";
import { InternalServerError } from "../utils/errors/app.error";
import { createHotelDTO } from "../dtos/hotel.dto";

export async function createHotelService(hotelData: createHotelDTO){
  try {

   const hotel = await createHotelRepositories(hotelData)
   return hotel;

  } catch (error) {
    throw new InternalServerError("failed to create Hotel in service");
  }
}