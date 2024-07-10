import { dbContext } from "../db/DbContext.js"

class RatsSerivce {

async getRats(request) {
    try {
        let rats = await dbContext.Rats.find()
        return(rats)
    } catch (error) {
        throw new Error(error)
    }
}

}

export const ratsService = new RatsSerivce()