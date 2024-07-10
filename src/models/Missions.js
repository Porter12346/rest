import { Schema } from "mongoose";

export const MissionsSchema = new Schema({
    codename: { type: String, minLength: 1, maxLength: 100, required: true},
    objective: { type: String, minLength: 1, maxLength: 500, required: true},
    year: { type: String, minLength: 1, maxLength: 10, required: true},
    completed: {type: Boolean, required: true, default: false},
    ratId: {type: Schema.ObjectId, required: true, ref: 'Rat'},
    locationId: {type: Schema.ObjectId, required: true, ref: 'Location'}
}, {toJSON: {virtuals: true}})

MissionsSchema.virtual('rat', {
    localField: 'ratId',
    ref: 'Rat',
    foreignField: '_id',
    justOne: true
})

MissionsSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Location',
    foreignField: '_id',
    justOne: true
})