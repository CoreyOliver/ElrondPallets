const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const palletController = require('../controllers/pallet')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, palletController.palletHome)

router.get('/buildPallet', ensureAuth, palletController.palletBuildHome)

router.post('/buildPallet/createPallet', palletController.createPallet)


// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)


module.exports = router