import { dbContext } from "../db/DbContext.js"

class MissionsService {
    async getMissions(response) {
        try {
            let missions = await dbContext.Missions.find().populate('rat').populate('location')
            return (missions)
        } catch (error) {
            throw new Error(error)
        }

    }

}

export const missionsService = new MissionsService()