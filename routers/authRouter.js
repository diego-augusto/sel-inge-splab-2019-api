const express = require('express')
const Router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { People } = require('../database/models');


Router.use('/', async function(req, res) { 
  const foundUser = await People.findOne({
    where: {
      $or: {
        email: req.body.email,
        username: req.body.username
      }
    }
  })

  if (foundUser) {
    const isValidPassword = bcrypt.compareSync(req.body.password, foundUser.password) 
    if (isValidPassword) {
      const payload = {"id": foundUser.id, "name": foundUser.name, "email": foundUser.email, "role": foundUser.role}
      const token = jwt.sign(payload, process.env.SECRET, {expiresIn: 1800})
      res.json({data: token})
      
    } else {
      res.status(400).json({data: {message: 'Password inválido'}})
    }
  } else {
    res.status(400).json({data: {message: 'Usuário não encontrado'}})
  }
  
})

module.exports = Router