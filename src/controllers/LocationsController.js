import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MisssionsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController{
    constructor(){
        super('api/locations')
        this.router
            .get('', this.getLocations)
            .get('/:locationId/missions', this.getLocationMissions)
    }
    async getLocationMissions(request, response, next) {
        try {
            let locationId = request.params.locationId
            let locations = await missionsService.getLocationMissions(locationId)
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }

    async getLocations(request, response, next) {
        try {
            let locations = await locationsService.getLocations(request)
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }
}