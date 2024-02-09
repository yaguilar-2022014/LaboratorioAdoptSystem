'use strict'

import express from 'express'
import { deleteAnimal, findAnimal, listAnimal, registAnimal, updateAnimal } from './animal.controller.js'

const api = express.Router()

api.post('/registAnimal', registAnimal)
api.get('/listAnimal', listAnimal)
api.get('/findAnimal', findAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id', deleteAnimal)

export default api