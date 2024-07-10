import { dbContext } from "../db/DbContext.js";
import { missionsService } from "../services/MisssionsService.js";
import { ratsService } from "../services/RatsSerivce.js";
import BaseController from "../utils/BaseController.js";

export class RatsController extends BaseController{
    constructor(){
        super('api/rats')
        this.router
            .get('', this.getRats)
            .get('/:ratId/missions', this.getRatMissions)
    }

    async getRatMissions(request, response, next) {
        try {
            const searchId = request.params.ratId
            const missions = await missionsService.getRatMissions(searchId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async getRats(request, response, next) {
        try {
            let rats = await ratsService.getRats(request)
            response.send(rats)
        } catch (error) {
            next(error)
        }
    }
}