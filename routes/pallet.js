const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const palletController = require('../controllers/pallet')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//getters
//pallet homepage
router.get('/', ensureAuth, palletController.palletHome)
//form for creating pallets
router.get('/buildPallet', ensureAuth, palletController.palletBuildHome)
//render out previously recent pallets
router.get('/label/:id', ensureAuth, palletController.palletLabel)
//posting
router.post('/createPallet', palletController.createPallet)


// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)


module.exports = router