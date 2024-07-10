import { dbContext } from "../db/DbContext.js"

class LocationsService{

    async getLocations(request) {
        try {
            let locations = await dbContext.Locations.find()
            return(locations)
        } catch (error) {
            throw new Error(error)
        }
    }

} 

export const locationsService = new LocationsService()