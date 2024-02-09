import mongoose from "mongoose"

const animalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['MALE', 'FEMALE']
    },
    keeper:{
        type: String,
        required: true
    },
    species:{
        type: String,
        required: true,
        uppercase: true
    },
    size:{
        type: String,
        uppercase: true,
        enum: ['SMALL', 'MEDIUM', 'BIG'],
        required: true
    }
})

export default mongoose.model('animal', animalSchema)