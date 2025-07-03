// import { Prisma } from "@prisma/client";
import { createHotelRepositories } from "../repositories/Hotel.repositories";
import { InternalServerError } from "../utils/errors/app.error";
// import { createHotelDTO } from "../dtos/hotel.dto";
import { Prisma } from "@prisma/client";

export async function createHotelService(hotelData: Prisma.HotelCreateInput){
  try {

   const hotel = await createHotelRepositories(hotelData)
   return hotel;

  } catch (error) {
    throw new InternalServerError("failed to create Hotel in service");
  }
}