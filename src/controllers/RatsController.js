import { dbContext } from "../db/DbContext.js";
import { ratsService } from "../services/RatsSerivce.js";
import BaseController from "../utils/BaseController.js";

export class RatsController extends BaseController{
    constructor(){
        super('api/rats')
        this.router
            .get('', this.getRats)
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