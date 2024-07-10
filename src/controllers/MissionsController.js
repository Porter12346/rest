
import { missionsService } from "../services/MisssionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController{
    constructor(){
        super('api/missions')
        this.router
        .get('', this.getMissions)
        .post('', this.createMission)
    }
    async createMission(request, response, next) {
        try {
            const missions = await missionsService.createMission(request.body)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async getMissions(request, response, next) {
        try {
            const missions = await missionsService.getMissions()
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
}