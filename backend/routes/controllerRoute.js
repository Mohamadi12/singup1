const express=require('express')
const controllerRoute=express.Router()
const{getAll, getOne,ajout, update,remove}=require('../controllers/routeController')

controllerRoute.get('/user',getAll)
controllerRoute.get('/user/:id',getOne)
controllerRoute.post('/user',ajout)
controllerRoute.put('/user/:id',update)
controllerRoute.delete('/user/:id',remove)







module.exports=controllerRoute