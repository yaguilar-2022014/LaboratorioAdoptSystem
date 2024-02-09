'use strict'

import { checkUpdate } from '../utils/validator.js'
import Animal from './animal.model.js'

export const registAnimal = async (req, res) => {
    try {
        let data = req.body
        let animal = new Animal(data)
        await animal.save()
        return res.send({ message: 'Registered successfully' })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error at registering animal', err })
    }
}

export const listAnimal = async (req, res) => {
    try {
        let animal = await Animal.find({})
        return res.send({ animal })
    } catch (err) {
        console.log(err)
    }
}

export const findAnimal = async (req, res) => {
    try {
        let { name } = req.body
        let animal = await Animal.find({ name })
        //Nombre vacío
        if (animal == name) return res.send({ message: 'Please enter an animal name' })
        return res.send({ animal })

    } catch (err) {
        console.log(err)
    }
}

export const updateAnimal = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let updateAnimal = checkUpdate(data, id)
        if (!updateAnimal) return res.status(404).send({ message: 'Have  submited some data that cannot be updated or missing data' })
        let update = await Animal.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        return res.send({ message: 'Updated animal', update })
    } catch (err) {
        console.log(err)
    }
}

export const deleteAnimal = async (req, res) => {
    try {
        let { id } = req.params
        let deleteAn = await Animal.findOneAndDelete({ _id: id })
        if (!deleteAn) return res.status(404).send({ message: 'Account not found and not deleted' })
        return res.send({ message: `Animal with name: ${deleteAn.name} deleted successfully` })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error deleting animal' })
    }
}
