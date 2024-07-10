import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { LocationSchema } from '../models/Location.js';
import { MissionsSchema } from '../models/Missions.js';
import { RatsSchema } from '../models/Rats.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatsSchema)
  Locations = mongoose.model('locations', LocationSchema)
  Missions = mongoose.model('missions', MissionsSchema)
}

export const dbContext = new DbContext()
