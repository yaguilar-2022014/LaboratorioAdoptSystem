'use strict'

/* import express from 'express'
import { deleteAnimal, findAnimal, listAnimal, registAnimal, updateAnimal } from './animal.controller.js'

const api = express.Router()

api.post('/registAnimal', registAnimal)
api.get('/listAnimal', listAnimal)
api.get('/findAnimal', findAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id', deleteAnimal)

export default api */

import { Router } from "express"
import { save, test, get, update, deleteAnimal, search } from "./animal.controller.js"

const api = Router()

api.get('/test', test)
api.post('/save', save)
api.get('/get', get)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteAnimal)
api.post('/search', search)

export default api