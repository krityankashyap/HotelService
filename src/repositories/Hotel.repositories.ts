// import { Prisma } from "@prisma/client";

import prismaClient from "../prisma/client"
import { createHotelDTO } from "../dtos/hotel.dto";

export async function createHotelRepositories(hotelData: createHotelDTO) {
     try {
          console.log("Hotel Data :" , hotelData);
          const hotel = await prismaClient.hotel.create({
            data: hotelData
          });
          return hotel;
        } catch (error) {
          // Let Prisma errors bubble up to service layer for proper handling
          console.error("Repository error:", error);
          throw error;
        }
}