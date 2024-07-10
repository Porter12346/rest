import { dbContext } from "../db/DbContext.js"

class MissionsService {

    async createMission(request) {
        try {
            let mission = await dbContext.Missions.create(request)
            await mission.populate('rat location', '-name -picture')
            return (mission)
        } catch (error) {
            throw new Error(error)
        }

    }

    async getMissions() {
        try {
            let missions = await dbContext.Missions.find().populate('rat location', '-name -picture')
            return (missions)
        } catch (error) {
            throw new Error(error)
        }

    }

    async getRatMissions(ratId) {
        try {
            let missions = await dbContext.Missions.find({ ratId: ratId }).populate('rat location', '-name -picture')
            return (missions)
        } catch (error) {
            throw new Error(error)
        }
    }

    async getLocationMissions(locationId) {
        try {
            let missions = await dbContext.Missions.find({ locationId: locationId }).populate('rat location', '-name -picture')
            return (missions)
        } catch (error) {
            throw new Error(error)
        }
    }

}

export const missionsService = new MissionsService()